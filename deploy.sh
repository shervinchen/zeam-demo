#!/usr/bin/env

# checkout to the gh-pages, reset
# and sync the branch with our main
# change here to master if you need
git checkout gh-pages
git reset --hard origin/main

# install dependencies and create
# the react app build
npm install
npm run build

# delete everything on the directory
# except the build folder
find * -maxdepth 0 -name 'build' -prune -o -exec rm -rf '{}' ';'

# move the build folder content
# to the repository root
mv ./build/* .

# deletes the git cache and push
# the new content to gh-pages
git rm -rf --cache .
git add .
git commit -m "deploy"

git push origin gh-pages --force

# go back to main (or master)
git checkout main