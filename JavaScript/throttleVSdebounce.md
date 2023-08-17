# Throttle & Debounce

<br>

## 용도
- 무의미하고 빈번하게 발생하는 요청, 이벤트 등을 개선하기 위해 활용되는 방법
- 유로 API를 활용할 때도 유용하게 활용할 수 있는 방법
- throttle :
    - 일정 시간 동안의 입력을 모아서 한 번씩 출력되도록 제한하는 방법
- debounce :
    - 입력이 끝난 이후, 어느 정도의 시간이 지난 경우에 요청, 이벤트 등을 발생시키는 방법

<br>

## 문법
- throttle
```javascript
let isThrottling = null;

if (!isThrottling) {
    isThrottling = setTimeout(() => {
        // ... some code
        isThrottling = null;
    }, 적당한 시간);
}
```

<br>

- debounce

```javascript
let timer = null;

const searchHandler = () => {
    if (timer) {
        clearTimeout(timer);
    }

    timer = setTimeout(() => {
        // ... some debounce code
    }, 적당한 시간);
}
```

<br>

## 활용
- throttle
    - 무한 스크롤에 필요한 이미지를 100ms 단위로 요청하겠어!

<br>

- debounce
    - 사용자의 입력이 끝난 50ms 이후에 연관 검색어를 띄워주겠어!
 
- 예제를 하나씩 들어봤지만, 같이 활용되는 경우도 많음!

<br>

## 유의 사항
- throttle는 적어도 1번 이상의 실행을 보장

<br>

## 참고 링크
- <a href="https://www.google.com/search?q=throttle+debounce&sca_esv=557654684&sxsrf=AB5stBgxf09X6DdI_E39jov2gyU-RdB51A%3A1692238432388&ei=YILdZOmZF9m74-EPl9WvgAc&ved=0ahUKEwjpyYy1z-KAAxXZ3TgGHZfqC3AQ4dUDCA8&uact=5&oq=throttle+debounce&gs_lp=Egxnd3Mtd2l6LXNlcnAiEXRocm90dGxlIGRlYm91bmNlMgUQABiABDIFEAAYgAQyBxAAGIoFGEMyCBAAGIAEGMsBMggQABiABBjLATIIEAAYgAQYywEyCBAAGIAEGMsBMgUQABiABDIEEAAYHjIEEAAYHkjxIlCvDliRInABeAGQAQCYAZcBoAGlD6oBBDAuMTa4AQPIAQD4AQHCAgoQABhHGNYEGLADwgIHECMYigUYJ8ICCRAAGIoFGAoYQ8ICCxAAGIAEGLEDGIMBwgIIEAAYgAQYsQPCAgoQABiABBgUGIcCwgIHEAAYgAQYCuIDBBgAIEGIBgGQBgo&sclient=gws-wiz-serp">구글링</a>

<br>

<hr>

updated : 2023.08.17 (Thr)
