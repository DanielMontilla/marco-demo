https://stackoverflow.com/questions/36782467/set-subdirectory-as-website-root-on-github-pages

git add app/dist -f
git commit -m "msg"
git subtree push --prefix app/dist origin gh-pages
