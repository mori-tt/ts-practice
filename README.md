# TypeScript Practice Project

このプロジェクトは、TypeScript の練習用プロジェクトです。各章ごとに異なる TypeScript ファイルをコンパイルし、実行するためのスクリプトが含まれています。

## ディレクトリ構造

your-project/
├── scripts/
│ └── run.sh
├── src/
│ └── {chapter}/
│ └── index.ts
├── package.json
├── tsconfig.json
└── .gitignore

## セットアップ

1. リポジトリをクローンします。

   ```bash
   git clone https://github.com/your-repo/your-project.git
   cd your-project
   ```

2. 依存関係をインストールします。

```zsh
npm install
```

3. `scripts/run.sh` スクリプトを実行可能にします。

```zsh
chmod +x scripts/run.sh
```

## 使用方法

### スクリプトの実行

特定の章の TypeScript ファイルをコンパイルし、実行するには、以下のコマンドを使用します：

```zsh
scripts/run.sh {chapter}
```

例：

```zsh
npm run run 2.6
```

## 注意事項

- `src/{chapter}/index.ts` ファイルが存在することを確認してください。

- `tsconfig.json` ファイルがプロジェクトのルートディレクトリに存在することを確認してください。

# ts-practice

さようなら

リモートリポジトリの変更

リモートリポジトリの変更 2

ローカルの変更 3

リモートリポジトリの変更 3

ローカルリポジトリの変更 4
