https://stackoverflow.com/questions/36782467/set-subdirectory-as-website-root-on-github-pages

pnpm app:build
git add app/dist -f
git commit -m "msg"
git subtree push --prefix app/dist origin gh-pages
