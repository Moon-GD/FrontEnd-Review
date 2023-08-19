# nvmrc

<br />

## 1️⃣ .nvmrc 파일의 역할
- 파일 위치 : 일반적으로 root dir
- 프로젝트에서 사용할 노드 버전을 표현

<br />

## 2️⃣ 필요성
- 협업 관계의 개발자 사이에 **일관성있는 환경을 구축**함으로써 예기치 못한 오류의 가능성을 줄임
- 노드 버전에 따라 package.json / package-lock.json 작성 방식에 변화가 생길 수 있음
- 패키지 의존성이 많은 프로젝트의 경우 상이한 노드 버전으로 인해, 의존성 충돌이 발생할 수 있음


<br />

## 3️⃣ .nvmrc 작성 예시

```javascript
v18.17.0  // 18.17.0 버전의 노드 활용

lts/*  // 최신 LTS 버전의 노드 활용

node  // 최신 노드 버전 활용
```

- 맨 앞에 v 입력은 선택 사항
- 버전 정보를 명시한 뒤에 스페이스 바 등의 추가 입력은 허용 ❌
- 첫 번째 줄에 버전 정보를 입력한 후, 한 줄의 new line 입력이 필요
- 관련 내용은 <a href="https://github.com/nvm-sh/nvm#nvmrc">nvm GitHub 게시글</a> 참조

<br />

## 4️⃣ 노드 버전 변경 방법

```bash
nvm use
```

- .nvmrc 파일에 명시된 노드 버전이 설치되어 있지 않은 경우, nvm은 자동으로 설치해주지 않음 <br />
    → .nvmrc 파일에 명시된 버전을 nvm install을 통해 설치하고 재실행

<br />

## 5️⃣ 참조
- <a href="https://github.com/nvm-sh/nvm#nvmrc">nvm GitHub</a>

<br />

<hr>

updated : 2023.08.19 (Sat)
