set -e
npm run build
cd dist
echo > .nojekyll
git init
git checkout main
git add -A
git commit -m 'deploy'
git push -f git@github.com:Samina-tenso/Tic-tac-toe.git main:gh-pages
cd -
