"%USERPROFILE%\AppData\Roaming\npm\ng.cmd" build --base-href /pinupload/ && ^
git add -f dist && ^
git commit -m %1 && ^
git subtree push --prefix=dist/pinupload origin gh-pages