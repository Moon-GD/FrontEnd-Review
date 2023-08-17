# React.memo

<br>

## 용도
- 컴포넌트 정보를 기억함으로써, 불필요한 리렌더링을 방지

<br>

## 문법
```jsx

function SomeComponent () {
  return (
    // ... some JSX code ... 
  )
}

// 기억하고자 하는 컴포넌트를 wrapping 해주면 됨
export default React.memo(SomeComponent)
```

<br>

## 활용
- 리렌더링이 빈번한 컴포넌트
- props 전달이 잦지만, 리렌더링이 필요하지 않은 컴포넌트

<br>

## 유의 사항
- React.memo()는 얕은 비교를 수행. → 객체 간의 깊은 비교, 혹은 특정 속성 비교를 원한다면 커스텀한 함수 전달을 통해 구현 가능!

```jsx
// customCompareFunction : 비교 함수
React.memo(SomeComponent, [customCompareFunction(prevProps, nextProps)]);
```

<br>

- 비교 함수가 존재한다는 것은, 해당 컴포넌트가 리렌더링될 때마다 비교 함수가 호출되는 것을 의미 <br>
    → 의미있는 성능 최적화가 아닌 경우, 비교 함수의 반복 호출로 인한 비용이 추가됨도 고려해야 한다

- 함수 비교를 하는 경우 동일한 함수 인스턴스를 비교하는지 확인하기 <br>
    → 같은 의미를 가지는 함수라도 다른 인스턴스로 전달되는 경우 불필요한 리렌더링 발생 <br>
    → 동일한 함수 인스턴스라면 useCallBack 활용도 한 가지 방법!
   


<br>

<hr>

updated : 2023.08.17 (Thr)
