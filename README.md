# Lesson Tailwind with Next.js

v2.x と v3.x のバージョンではいろいろ異なるので注意

## setup

使い方も含めて基本ここ見る
https://tailwindcss.com/docs/installation

### Next.js の プロジェクトの作成

- npm

```sh
npx create-next-app my-project
```

- yarn

```sh
yarn create next-app my-project
```

- typescript

```sh
yarn create next-app --typescript my-project
```

### TailWindCSS の 初期設定

https://tailwindcss.com/docs/guides/nextjs

install

```sh
yarn add -D tailwindcss postcss autoprefixer
```

設定ファイルを自動生成

```sh
npx tailwindcss init -p
```

`postcss.config.js`と`tailwind.config.js`が作成される

`tailwind.config.js`内の content を以下のように変更編集
※src を使用しない場合は`./components/**/*.{js,ts,jsx,tsx}`とかで OK

```js
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

`styles/globals.css`に

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

を追記

## その他

### className の sort

https://tailwindcss.com/docs/adding-custom-styles

### Tailwind にないスタイルを使いたい場合

https://tailwindcss.com/docs/adding-custom-styles#adding-custom-utilities

TailWind CSS のスタイル層には
base > components > utilities があるので意識しておくとよい
