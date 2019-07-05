git add *
git commit -m %1
git push 
cd my-app
call yarn run deploy
cd ..
.\open_chrome.bat