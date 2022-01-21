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
