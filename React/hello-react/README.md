- ### const [현재 상태, Setter 함수] = useState(기본값) <br> <br>

- ### const <변수명> = useRef() 통해서 특정 DOM을 선택할 수 있음 <br>

  ```JS
    //ref가 설정된 input에 focus가 설정
    //current === 통해서 우리가 원하는 DOM
    const InputFocus = useRef();

    const onReset = () => {
        InputFocus.current.focus();
    }

    <input type = "text" ref = {InputFocus} />
  ```

  - useRef를 통해서 변수를 관리하면 설정 후 바로 조회가 가능하다(리렌더링이 없음)

  ```JS
  const nextId = { current : 4};      //함수가 호출될 때마다 변수가 초기화 된다. 즉 항상 4부터 시작

  const nextId = useRef(4);           //함수를 재 호출 하더라도 마지막으로 업데이트한 current값이 유지
  ```

  ## <br>

- ### map() : 배열안에 있는 각 원소를 변환해서 새로운 배열로 만들어 준다.
