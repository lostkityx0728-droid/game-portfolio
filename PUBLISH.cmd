@echo off
setlocal
chcp 65001 >nul
cd /d "%~dp0"
echo This runs the included, readable publish.ps1 script.
echo It uses official GitHub sign-in and asks before public publishing.
echo.
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0publish.ps1"
echo.
pause
