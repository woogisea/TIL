const http = require('http');
const fs = require('fs').promises;

//http 모듈의 createServer 매서드
http.createServer(async(req,res) => {
    try{
        //fs 모듈을 통해서 HTML파일을 읽음.
        const data = await fs.readFile('./server2.html');
        res.writeHead(200, { 'Content-type' : 'text/html; charset = utf-8'});
        //data에 포함된 버퍼를 서버로 그대로 전송
        res.end(data);
    }catch(err){
        console.log(err);
        //에러 메세지는 plain 형태
        res.writeHead(200, { 'Content-type' : 'text/plain; charset = utf-8'});
        res.end(err.message);
    }
})
    .listen(8080, () => {   //서버 연결,8080(포트 번호), 포트 연결 완료 후 실행 될 콜백 함수
        console.log('8080번 포트에서 서버 대기 중입니다!');
    });