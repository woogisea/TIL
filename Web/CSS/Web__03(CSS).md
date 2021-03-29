## 연결 선택자
---
|||
|--|--|
|하위 선택자|부모요소에 포함된 "모든" 하위 요소를 선택|
|자식 선택자 (">") | 자식 선택자는 하위선택자와는 다르게 바로 한단계 밑의 요소에만 적용|
|인접 형제 선택자 ("+")|형제 요소 중에서 첫 번째 동생요소만!|
|형제 선택자 ("~") | 인접 형제 선택자와는 다르게 모든 형제 요소에 적용|

<br>

ex) 인접 형제 선택자
```html
<style>
    h1 + p { color : blue};
</style>

......

<h1>blahblahblah</h1>
<p>hahahahahah</p>         <--- h1의 첫 번째 형제인 부분에만 적용된다.
<p>hello world!</p>
```
<br>

ex) 형제 선택자
```html
<style>
    h1 ~ p { color : blue};
</style>

......

<h1>blahblahblah</h1>
<p>hahahahahah</p>         <--- 
<p>hello world!</p>        <---     h1의 모든 형제 요소에 적용된다.     
```