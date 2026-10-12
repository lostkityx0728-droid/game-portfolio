# Run with PUBLISH.cmd. Uses GitHub's official CLI; never asks for a pasted token.
[CmdletBinding()]
param(
  [ValidatePattern('^[A-Za-z0-9][A-Za-z0-9._-]{0,80}$')][string]$RepoName = 'game-portfolio',
  [string]$ExpectedOwner = 'lostkityx0728-droid'
)
$ErrorActionPreference = 'Stop'
$PSNativeCommandUseErrorActionPreference = $false
Set-Location -LiteralPath $PSScriptRoot
function Run([string]$Program, [string[]]$Arguments) {
  & $Program @Arguments
  if ($LASTEXITCODE -ne 0) { throw "$Program failed (exit $LASTEXITCODE). Nothing will be force-pushed or deleted." }
}
function Probe([string]$Program, [string[]]$Arguments) {
  $saved = $ErrorActionPreference
  try {
    $ErrorActionPreference = 'Continue'
    $output = @(& $Program @Arguments 2>$null)
    $code = $LASTEXITCODE
    return @{ OK = ($code -eq 0); Text = ($output -join "`n") }
  } finally { $ErrorActionPreference = $saved }
}
function Refresh-Path {
  $env:Path = $env:Path + ';' + [Environment]::GetEnvironmentVariable('Path','Machine') + ';' + [Environment]::GetEnvironmentVariable('Path','User')
  foreach ($dir in @("$env:ProgramFiles\Git\cmd", "$env:ProgramFiles\GitHub CLI", "$env:LOCALAPPDATA\Programs\Git\cmd")) {
    if (Test-Path -LiteralPath $dir) { $env:Path += ';' + $dir }
  }
}
function Ensure-Tool([string]$Command, [string]$Package) {
  Refresh-Path
  if (Get-Command $Command -ErrorAction SilentlyContinue) { return }
  if (-not (Get-Command winget -ErrorAction SilentlyContinue)) {
    throw "Missing $Command and WinGet. Install Git from https://git-scm.com/install/windows and GitHub CLI from https://cli.github.com, then run PUBLISH.cmd again."
  }
  $answer = Read-Host "$Command is missing. Install the official $Package package using WinGet? [y/N]"
  if ($answer -notmatch '^(y|yes)$') { throw 'Installation cancelled. No repository was created.' }
  Run 'winget' @('install','--id',$Package,'-e','--source','winget')
  Refresh-Path
  if (-not (Get-Command $Command -ErrorAction SilentlyContinue)) { throw "$Command was installed but is not on PATH yet. Close this window and run PUBLISH.cmd again." }
}
try {
  if (-not (Test-Path -LiteralPath '.git')) { throw 'Copy this revision into a fresh checkout of the existing game-portfolio repository before publishing. This package does not create another repository.' }
  Write-Host "`nTHREAD / WORLD - GitHub Pages publisher" -ForegroundColor Cyan
  Write-Host 'This publishes only the portfolio website. It does not upload a game-engine project.'
  Ensure-Tool 'git' 'Git.Git'
  Ensure-Tool 'gh' 'GitHub.cli'
  $auth = Probe 'gh' @('auth','status','--hostname','github.com')
  if (-not $auth.OK) {
    Write-Host 'Complete the official GitHub sign-in in your browser. Do not send anyone your token.'
    Run 'gh' @('auth','login','--hostname','github.com','--git-protocol','https','--web')
  }
  $who = Probe 'gh' @('api','user')
  if (-not $who.OK) { throw 'GitHub authentication could not be verified.' }
  $profile = $who.Text | ConvertFrom-Json
  $owner = [string]$profile.login
  if ($ExpectedOwner -and $owner -ne $ExpectedOwner) {
    throw "Signed in as $owner, but this package expects $ExpectedOwner. Use gh auth switch or log into the intended account. No upload was performed."
  }
  $slug = "$owner/$RepoName"
  Write-Host "`nTarget: $slug" -ForegroundColor Cyan
  Write-Host 'Visibility: PUBLIC. Website source, game screenshots and short clips will be publicly accessible.'
  Write-Host 'Confirm the reviewed project screenshots can be shown publicly. Contact fields remain blank.'
  $confirm = Read-Host 'Create/publish this public portfolio now? Type PUBLISH to continue'
  if ($confirm -cne 'PUBLISH') { Write-Host 'Cancelled. Nothing was uploaded.'; exit 0 }
  Run 'gh' @('auth','setup-git','--hostname','github.com')
  Run 'git' @('config','user.name',$owner)
  Run 'git' @('config','user.email',"$($profile.id)+$owner@users.noreply.github.com")
  # No recursive git add: only the named website files and supplied assets are staged.
  $allow = @('index.html','wonderwebby.html','moon-vagrant.html','fanworks.html','ancient-courtyard.html','jiangnan-water-town.html','testament.html','fukuoka-central-street.html','dragon-of-kamurocho.html','styles.css','collection.css','playable-game.css','playable-game.js','game-files.txt','site-data.js','projects-data.js','app.js','render.js','experience.js','.nojekyll','.gitignore','.gitattributes','README.md','SOURCES.md','CHECKS.md','PUBLISH.cmd','publish.ps1','publish.sh','ASSET-NOTICE.md')
  $media = @('favicon.svg','greenhouse-shadow.webp','orb-texture.webp','slide5_web_forming.mp4','slide5_web_forming.webp','slide6_hunting_feeding.mp4','slide6_hunting_feeding.webp','slide7_final_reveal.mp4','slide7_final_reveal.webp','wonderwebby-climbing.webp','wonderwebby-cover.webp','wonderwebby-web.webp','moon-vagrant-title.webp','moon-vagrant-comic.webp','moon-vagrant-gameplay.webp','fanworks-overview.webp','fanworks-intake.webp','fanworks-turbines.webp','fanworks-cascade.webp','ancient-courtyard-route.svg','ancient-courtyard-route-mobile.svg','jiangnan-water-town-cover.webp','jiangnan-water-town-altar.webp','jiangnan-water-town-bridge.webp','jiangnan-water-town-gate.webp','jiangnan-water-town-layout.webp','testament-cover.webp','testament-menu.webp','testament-flow.webp','testament-sketch.webp','fukuoka-cover.webp','fukuoka-blockout.webp','fukuoka-interior.webp','fukuoka-sequencer.webp','fukuoka-npc.webp','dragon-cover.webp','dragon-flow.webp','dragon-counter.webp','dragon-components.webp')
  $allow += $media | ForEach-Object { 'assets/' + $_ }
  $gameFiles = @(Get-Content -LiteralPath 'game-files.txt')
  foreach ($file in $gameFiles) { if ($file -notmatch '^games/moon-vagrant/[A-Za-z0-9_. /+()@-]+$' -or $file -match '\.\.') { throw 'Invalid game runtime manifest path.' } }
  Run 'git' (@('add','--') + $allow)
  Run 'git' @('add','--pathspec-from-file=game-files.txt')
  $diff = Probe 'git' @('diff','--cached','--quiet')
  if (-not $diff.OK) { Run 'git' @('commit','-m','Update interactive game portfolio') }
  $branch = Probe 'git' @('branch','--show-current')
  if ($branch.Text.Trim() -ne 'main') { throw 'Expected the local main branch. Switch to main before publishing.' }
  $remotes = @(& git remote)
  if ($remotes -contains 'origin') {
    $remote = (Probe 'git' @('remote','get-url','origin')).Text.Trim()
    if ($remote -notin @("https://github.com/$slug.git","https://github.com/$slug","git@github.com:$slug.git")) {
      throw "Existing origin points elsewhere ($remote). It was not changed."
    }
    Write-Host 'Updating the existing matching origin with a normal fast-forward push.'
    Run 'git' @('push','-u','origin','main')
  } else {
    throw 'The checkout has no origin remote. Use a fresh checkout of the existing game-portfolio repository.'
  }
  Write-Host "`nSource pushed: https://github.com/$slug" -ForegroundColor Green
  $pages = Probe 'gh' @('api',"repos/$slug/pages")
  $request = Join-Path ([IO.Path]::GetTempPath()) (([guid]::NewGuid().ToString()) + '.json')
  try {
    $body = @{build_type='legacy'; source=@{branch='main';path='/'}} | ConvertTo-Json -Depth 4
    [IO.File]::WriteAllText($request,$body,(New-Object System.Text.UTF8Encoding($false)))
    if ($pages.OK) {
      $existing = $pages.Text | ConvertFrom-Json
      if ($existing.build_type -ne 'legacy' -or $existing.source.branch -ne 'main' -or $existing.source.path -ne '/') {
        throw 'GitHub Pages already uses a different configuration. It was not overwritten; review Settings > Pages.'
      }
    } else {
      Run 'gh' @('api',"repos/$slug/pages",'--method','POST','--input',$request)
    }
  } finally { if (Test-Path -LiteralPath $request) { Remove-Item -LiteralPath $request } }
  $startBuild = Probe 'gh' @('api',"repos/$slug/pages/builds",'--method','POST')
  Write-Host 'Waiting for GitHub Pages. Closing this window does not undo the upload.'
  $live = $false
  $website = ''
  for ($attempt=0; $attempt -lt 36; $attempt++) {
    $status = Probe 'gh' @('api',"repos/$slug/pages")
    if ($status.OK) {
      $info = $status.Text | ConvertFrom-Json
      $website = [string]$info.html_url
      if ($info.status -eq 'errored') { throw "Source was pushed, but the Pages build failed. Review https://github.com/$slug/actions" }
      if ($info.status -eq 'built' -and $website) {
        try { $response = Invoke-WebRequest -Uri $website -Method Head -UseBasicParsing -TimeoutSec 12; $live = ($response.StatusCode -ge 200 -and $response.StatusCode -lt 400) } catch { $live = $false }
        if ($live) { break }
      }
    }
    Start-Sleep -Seconds 5
  }
  if ($live) {
    Write-Host "`nWebsite verified online: $website" -ForegroundColor Green
    Start-Process $website
  } else {
    Write-Host "`nSource upload and Pages setup completed. The public website is not yet verified live." -ForegroundColor Yellow
    if ($website) { Write-Host "GitHub's assigned URL: $website" }
    Write-Host "Build status: https://github.com/$slug/actions"
  }
} catch {
  Write-Host "`nStopped: $($_.Exception.Message)" -ForegroundColor Red
  Write-Host 'No force push, repository deletion, or credential export was performed.'
  Write-Host 'The local website files are intact. Keep this error text for troubleshooting.'
  exit 1
}
