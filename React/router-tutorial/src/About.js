import React from 'react';
import qs from 'qs';

//Query를 통해서 받아오기
//location 객체에 들어있는 search 값에서 조회할 수 있다.
const About = ( {location} ) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix : true // 문자열 맨 앞의 ? 생략
    });

    const showDetail = query.detail === 'true';   //detail값이 true이면 파싱, 쿼리의 파싱의 결과값은 항상 문자열이다.
    return (
        <div>
            <h1>소개</h1>
            <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트 입니다.</p>
            {showDetail && <p>detail 값이 true</p>}
        </div>
    );
};

export default About;