## DOM 요소에 접근하고 속성 가져오기
---
> HTML 요소만 저장됨
1. id 선택자로 접근
   ```js
   요소명.getElementById("id명")
   ```
2. class값으로 접근
   ```js
   요소명.getElementByClassName("class명")
   ```
3. 태그 이름으로 접근(class 또는 id를 지정하지 않은 DOM 요소)
    ```js
    요소명.getElementByTagName("태그명(ex/"p")")
    ```
---

<br>

>DOM 트리의 텍스트, 속성 노드까지 자유롭게 제어 + Node list로 반환

즉 배열의 형식으로 처리할 수 있다!
1. 반환값이 하나
   ```js
   요소명.querySelector(선택자)
   ```
2. 반환값이 여러개
   ```js
    요소명.querySelectorAll(선택자 또는 태그)
   ```



