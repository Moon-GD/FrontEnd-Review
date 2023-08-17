# presets & plugins

<br>

## babel 실행 방법 (Webpack 기준)
- babel을 불러오는 babel-loader 등의 필요 패키지 설치
- webpack의 config 파일에서 babel-loader 활용을 위한 설정

```javascript
// webpack.config.js
module.exports = {
  entry: './src/index.js',
  output: {
    path: '트랜스파일링 완료가 된 파일이 저장될 경로',
    filename : '트랜스파일링 완료된 파일의 이름'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  // ... some config code ...
}
```

- 위에까지 설정해도 babel 결과 값은 동일하게 나옴!
- 트랜스파일링하길 원하는 문법과 관련된 패키지를 설치하고 **'이거 이용해줘!'** 라고 설정해줘야 함 <br>
  → ⭐️ 이 때, 이용되는 패키지를 plugin이라고 함

<br>

## presets
- 비교적 최신 문법이 활용되거나 새로운 문법이 추가될 때마다 plugin을 설치해야 함!
- 이는 소모적인 과정이 될 수 있기에 babel 관련 공식 단체에서 제공하는 plugin의 집합이 몇 가지가 있음 <br>
  → ⭐️ 이 때, plugin의 집합을 preset이라고 함

- preset 종류

|name|
|:-|
| <a href="https://babeljs.io/docs/babel-preset-env">@babel/preset-env</a> |
| <a href="https://babeljs.io/docs/babel-preset-flow">@babel/preset-flow</a> |
| <a href="https://babeljs.io/docs/babel-preset-react">@babel/preset-react</a> |
| <a href="https://babeljs.io/docs/babel-preset-typescript">@babel/preset-typescript</a> |

<br>

<hr>

updated : 2023.08.18 (Fri)
