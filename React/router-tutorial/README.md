# React Router V6

- useSearchParams를 이용해서 쿼리스트링을 쉽게 파싱 가능

```js
// http://localhost:3000/about?detail=true&mode=1
const [searchParams, setSearchParams] = useSearchParams();
const detail = searchParams.get('detail');
const mode = searchParams.get('mode');
```

- 중첩라우트와 Outlet <br>
  Outlet를 통해서 children의 JSX 엘리먼트를 보여주는 역활을 할 수 있음 <br>
  header,footer 등 공통 레이아웃 컴포넌트의 경우에도 Outlet를 통해서 사용 가능

```js
//Article 컴포넌트가 Articles에 중첩라우트 된 상황
import { Link, Outlet } from 'react-router-dom';

const Articles = () => {
  return (
    <div>
      {/*Artcle 컴포넌트가 보이게 된다. */}
      <Outlet />
      <ul>
        <li>
          <Link to="/articles/1">게시글 1</Link>
        </li>
        <li>
          <Link to="/articles/2">게시글 2</Link>
        </li>
        <li>
          <Link to="/articles/3">게시글 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default Articles;
```

- NavLink <br>
  이동하는 링크가 현재 라우트 경로와 일치하는 경우에 특정 스타일 또는 CSS 적용 가능

```js
<NavLink
  to="/articles/1"
  style={({ isActive }) => (isActive ? activeStyle : undefined)}
>
  게시글 1
</NavLink>
```

```js
//*는 wildcard문자, 즉 아무 텍스트나 매칭이 가능, 일치하는 라우트가 없을 때 화면에 나타나게 됨(ex. NotFound)
<Route path ="*">
```

- Navigate 컴포넌트 <br>
  페이지 리다이렉트 <br>
  로그인이 필요한 페이지에서 로그인 정보가 없을 경우 바로 /login으로 리다이렉트 <br>

```js
import { Navigate } from 'react-router-dom';

const MyPage = () => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }

  return <div>마이 페이지</div>;
};

export default MyPage;
```
