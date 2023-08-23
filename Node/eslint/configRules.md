# .eslintrc rule properties

<br />

| property name                                     | 역할                                                | 참고                                                                                                        |
| :------------------------------------------------ | :-------------------------------------------------- | :---------------------------------------------------------------------------------------------------------- |
| eqeqeq                                            | 삼항 비교 연산자 활용 여부                          |
| one-var                                           | 여러 변수를 한 번에 선언하도록 할 것인지 여부       |                                                                                                             |
| no-undef                                          | 정의되지 않은 변수 활용 여부                        |                                                                                                             |
| no-new-object                                     | 객체 생성 방식 → 생성자 vs 객체 리터럴              |                                                                                                             |
| react/no-unknown-property                         | 정의되지 않은 속성 사용 여부                        |                                                                                                             |
| @typescript-eslint/explicit-module-boundary-types | 함수 반환에서 타입 명시 여부                        |                                                                                                             |
| @typescript-eslint/consistent-type-imports        | TS에서 type import할 때 일관성 유지 여부            |                                                                                                             |
| @typescript-eslint/no-namespace                   | namespace 활용 여부                                 | ES2015 이후부터는 네임 스페이스보단 자체 모듈 시스템 활용                                                   |
| import/order                                      | groups, pathGroups 등의 속성으로 import 규칙을 설정 | 내부 내용이 많기 때문에 <a href="https://github.com/import-js/eslint-plugin-import">공식 문서</a> 참조할 것 |

<br />

<hr />

updated : 2023.08.23 (Wed)
