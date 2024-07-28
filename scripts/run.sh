# 引数として章番号を受け取る
CHAPTER=$1

# コンパイル
npx tsc src/$CHAPTER/index.ts

# 実行
node src/$CHAPTER/index.js