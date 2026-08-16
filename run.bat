@echo off
setlocal

if not exist "%~dp0back-end\server.js" (
    echo ERRO: server.js nao foi encontrado.
    pause
    exit /b 1
)

start "Whim Bottle - Servidor" /D "%~dp0back-end" cmd /k npm start
timeout /t 2 /nobreak >nul
start "" "http://localhost:8083/index.html"
exit /b 0
