# zod introduction

<br />

## 1️⃣ zod 학습 계기

- <a href="https://www.react-hook-form.com/">react hook form</a>을 공부하며 input 관련 컴포넌트들의 유효성 체크가 필요 <br/>
  → 직관적이고 type 중복 발생 우려가 적은 zod를 활용하게 됨!
- 아래의 것들이 장점이라고 하는데... 쓰면서 느껴봐야지 ㅎㅎ
  - 의존성 ❌
  - 폭 넓은 실행 환경 호환성 👍 (Node, modern browser)
  - 작은 패키지 크기

<br />

## 2️⃣ 설치

- 필수 요건
  - TypeScript 4.5 버전 이상
  - tsconfig.json에서 strict 모드를 강제해두는 것이 권장됨

<br />

```bash
$ npm i zod

# carany version
$ npm i zod@canary
```

<br />

## 3️⃣ 간단 문법 활용해보기

- <a href="./src/basic.ts">간단한 코드 바로 보기</a>
- zod primitive types

| 메소드        | type             |
| :------------ | :--------------- |
| z.string()    | 문자열           |
| z.number()    | 숫자             |
| z.boolean()   | 불리언           |
| z.undefined() | undefined        |
| z.null()      | null             |
| z.any()       | accepts all      |
| z.unknown()   | accepts all      |
| z.never()     | accept no values |

<br />

## 4️⃣ 원시 값의 형 강제 변환 (Coercion)

- 개인적으로는 좋은 방법이라고 생각하지는 않지만, 상황에 따라 형 변환이 강제로 필요할 경우 활용 가능
- type checking에서도 강제로 형 변환을 통해 통과시킬 수도 있음!
- <a href="./src/coericon.ts">소스 코드</a>에 한 번 끄적여보면 충분할 듯하다.

<br />

## 5️⃣ 추가 검증

- refine, min, max 등의 체이닝을 통해서 추가 검증 조건을 검증할 수 있다 → <a href="./src/additionalTest.ts">예제 파일</a>
- optional()을 통해 property가 선택적으로 필요함도 작성할 수 있다 → <a href="./src/optionalTest.ts">예제 파일</a>

<br />

## 6️⃣ 잠깐 살펴보니 이런 장점이 있네? 🤩

- type과 유효성을 직관적으로 검증할 수 있도록 스키마 구성 가능
- 그래도 정말 강력한 기능을 꼽자면 타입 추론 같은걸?
  - 타입을 직접 작성하지 않으니 Human error가 적어질 것이고,
  - 유지 보수 용이한게 크지 않을까?
  - 타입을 지정하는 곳과 유효성을 점검하는 곳이 따로 있으면 코드가 전체적으로 지저분해질 텐데 그것도 예방해 줌!

<br />

<hr />

updated : 2023.09.05 (Mon)
