#!/usr/bin/env sh

set -e

npm run build

cd build

git checkout gh-pages

git init
git add -A
git commit -m 'deploy'
git push origin gh-pages

cd -