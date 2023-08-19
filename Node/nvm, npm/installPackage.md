# npm i VS npm ci

<br>

| | npm i | npm ci |
|:-|:-|:-|
| 기준 파일 | package.json | package-lock.json |
| 기준 파일 쓰기 권한 | ⭕️ | ❌ |
| 특징 | 1️⃣ npm ci의 삭제 연산이 오래 수행되는 경우, npm i 가 더 빠르게 설치 가능  | 1️⃣ node_modules를 삭제하고 package-lock.json 기준으로 재설치 <br> 2️⃣ package.json은 버전 매칭을 점검하기 위해 활용 → 버전 정보의 충돌이 생기는 경우, 오류를 발생시킴 <br> 3️⃣ package-lock.json을 기준으로 설치하기 때문에 정확한 버전을 팀원간에 공유 가능 |

<br>

<hr>

updated : 2023.08.17 (Thr)
