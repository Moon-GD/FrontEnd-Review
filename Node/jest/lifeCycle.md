# Jest Lifecycle

<br>

## 의미
- Jest에서 Lifecycle이란 테스트 코드가 실행되는 순서를 의미
- 어렵게 생각할 필요없이 아래의 순서로 실행됨

| 순서 | method |
|:-|:-|
| 1️⃣ | all describe() |
| 2️⃣ | beforeAll() |
| 3️⃣ | beforeEach() |
| 4️⃣ | test() |
| 5️⃣ | afterEach() |
| 6️⃣ | afterAll() |

<br>

- 아래의 코드에서 console 출력 순서를 예측해보는 것도 좋은 시도!

```javascript
beforeAll(() => {
  console.log('beforeAll')
})

beforeEach(() => {
  console.log('beforeEach')
})

afterAll(() => {
  console.log('afterAll')
})

afterEach(() => {
  console.log('afterEach')
})

describe('outer', () => {
  console.log('descibe outer')
  describe('inner', () => {
    console.log('descibe inner')
    test('inner', () => {
      console.log('outer.inner test')
    })
  })

  test('outer test', () => {
    console.log('outer test')
  })

  describe('inner 2', () => {
    console.log('descibe inner 2')
    test('inner 2', () => {
      console.log('outer.inner 2 test')
    })
  })
})

// descibe outer
// descibe inner
// descibe inner 2
// beforeAll
// beforeEach
// outer.inner test
// afterEach
// beforeEach
// outer test
// afterEach
// beforeEach
// outer.inner 2 test
// afterEach
// afterAll

```

<br>

## 참고 링크
- <a href="https://noriste.github.io/reactjsday-2019-testing-course/book/jest-101/jest-lifecycle.html">react js day</a>

<br>

<hr>

updated : 2023.08.18 (Fri)
