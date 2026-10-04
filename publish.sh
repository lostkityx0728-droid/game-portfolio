#!/usr/bin/env bash
# macOS / Linux. Install Git and the official GitHub CLI before using this script.
set -euo pipefail
cd -- "$(dirname -- "${BASH_SOURCE[0]}")"
[[ -e .git ]] || { echo 'Copy this revision into a fresh checkout of the existing game-portfolio repository before publishing.'; exit 1; }
repo="${1:-game-portfolio}"
[[ "$repo" =~ ^[A-Za-z0-9][A-Za-z0-9._-]{0,80}$ ]] || { echo 'Invalid repository name.'; exit 1; }
command -v git >/dev/null || { echo 'Install Git first: https://git-scm.com/install/'; exit 1; }
command -v gh >/dev/null || { echo 'Install official GitHub CLI first: https://cli.github.com'; exit 1; }
gh auth status --hostname github.com >/dev/null 2>&1 || gh auth login --hostname github.com --git-protocol https --web
owner=$(gh api user --jq .login)
[[ "$owner" == lostkityx0728-droid ]] || { echo "Unexpected account: $owner. Log into lostkityx0728-droid first."; exit 1; }
slug="$owner/$repo"
printf 'Publish %s as PUBLIC? Source code, screenshots and clips will be public.\n' "$slug"
read -r -p 'Type PUBLISH to confirm: ' confirmation
[[ "$confirmation" == PUBLISH ]] || { echo 'Cancelled.'; exit 0; }
gh auth setup-git --hostname github.com
id=$(gh api user --jq .id)
git config user.name "$owner"
git config user.email "$id+$owner@users.noreply.github.com"
files=(index.html wonderwebby.html moon-vagrant.html fanworks.html ancient-courtyard.html jiangnan-water-town.html styles.css collection.css site-data.js projects-data.js app.js render.js experience.js .nojekyll .gitignore README.md SOURCES.md CHECKS.md PUBLISH.cmd publish.ps1 publish.sh ASSET-NOTICE.md)
media=(favicon.svg greenhouse-shadow.webp orb-texture.webp slide5_web_forming.mp4 slide5_web_forming.webp slide6_hunting_feeding.mp4 slide6_hunting_feeding.webp slide7_final_reveal.mp4 slide7_final_reveal.webp wonderwebby-climbing.webp wonderwebby-cover.webp wonderwebby-web.webp moon-vagrant-title.webp moon-vagrant-comic.webp moon-vagrant-gameplay.webp fanworks-overview.webp fanworks-intake.webp fanworks-turbines.webp fanworks-cascade.webp ancient-courtyard-route.svg ancient-courtyard-route-mobile.svg jiangnan-water-town-cover.webp jiangnan-water-town-altar.webp jiangnan-water-town-bridge.webp jiangnan-water-town-gate.webp jiangnan-water-town-layout.webp)
for asset in "${media[@]}"; do files+=("assets/$asset"); done
git add -- "${files[@]}"
git diff --cached --quiet || git commit -m 'Update interactive game portfolio'
[[ $(git branch --show-current) == main ]] || { echo 'Expected main branch.'; exit 1; }
if git remote | grep -qx origin; then
  remote=$(git remote get-url origin)
  [[ "$remote" == "https://github.com/$slug.git" || "$remote" == "https://github.com/$slug" || "$remote" == "git@github.com:$slug.git" ]] || { echo 'Origin points elsewhere; stopped.'; exit 1; }
  git push -u origin main
else
  echo 'The checkout has no origin remote. Use a fresh checkout of the existing game-portfolio repository.'; exit 1
fi
request=$(mktemp)
trap 'rm -f "$request"' EXIT
printf '%s\n' '{"build_type":"legacy","source":{"branch":"main","path":"/"}}' > "$request"
if gh api "repos/$slug/pages" >/dev/null 2>&1; then
  config=$(gh api "repos/$slug/pages" --jq '.build_type + ":" + .source.branch + ":" + .source.path')
  [[ "$config" == 'legacy:main:/' ]] || { echo 'Pages has a different configuration; it was not changed.'; exit 1; }
else
  gh api "repos/$slug/pages" --method POST --input "$request"
fi
gh api "repos/$slug/pages/builds" --method POST >/dev/null 2>&1 || true
echo "Source pushed: https://github.com/$slug"
echo 'Pages is configured. Its assigned URL (build may still be pending):'
gh api "repos/$slug/pages" --jq .html_url
echo "Check publication status at https://github.com/$slug/actions"
