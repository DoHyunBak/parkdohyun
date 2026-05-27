@echo off
set "PATH=C:\Program Files\nodejs;%PATH%"
echo [1/2] PATH set, running npm install...
call "C:\Program Files\nodejs\npm.cmd" install
echo [2/2] Done! Exit code: %ERRORLEVEL%
