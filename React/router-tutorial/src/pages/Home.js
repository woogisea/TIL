import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>홈</h1>
      <p>가장 먼저 보여지는 페이지</p>
      <ul>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles/jaewook">재욱</Link>
        </li>
        <li>
          <Link to="/profiles/jaewook1">재욱1</Link>
        </li>
        <li>
          <Link to="/profiles/jaewook2">재욱2</Link>
        </li>
        <li>
          <Link to="/articles">게시글 목록</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
