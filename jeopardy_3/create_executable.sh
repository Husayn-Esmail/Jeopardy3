#!/bin/zsh
source ../venv/bin/activate
pyinstaller cli.py --onefile --hiddenimport="jeopardy_app" --additional-hooks-dir=extra-hooks --name test