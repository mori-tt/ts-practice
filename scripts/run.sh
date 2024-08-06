# # 引数として章番号を受け取る
# CHAPTER=$1

# # コンパイル
# npx tsc src/$CHAPTER/index.ts

# # 実行
# node src/$CHAPTER/index.js


# # 引数として章番号を受け取る
# CHAPTER=$1

# # コンパイル
# npx tsc src/$CHAPTER/index.ts --outDir dist/$CHAPTER

# # 実行
# node dist/$CHAPTER/index.js

# 引数として章番号を受け取る
CHAPTER=$1

# コンパイル（tsconfig.jsonの設定を使用）
npx tsc --project tsconfig.json

# 実行
node dist/$CHAPTER/index.js