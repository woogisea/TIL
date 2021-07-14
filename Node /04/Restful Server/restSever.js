const http = require('http');
const fs = require('fs').promises;

//데이터 베이스 대용
 const user = {};

http.createServer(async(req,res) => {
    try{
        console.log(req.method, req.url);
        //req.method를 통해서 요청 메서드를 구분
        if(req.method === 'GET') {
            //req.url를 통해서 요청 주소를 구분
            if(req.url === '/') {
                const data = await fs.readFile('./restFront.html');
                res.writeHead(200, {'Content-type' : 'text/html; charset = utf-8'});
                return res.end(data);
            } else if(req.url === './about') {
                const data = await fs.readFile('./about.html');
                res.writeHead(200, {'Content-type' : 'text/html; charset = utf-8'});
                return res.end(data);
            } else if(req.url === '/users') {
                res.writeHead(200, {'Content-type' : 'text/plain; charset = utf-8'});
                return res.end(JSON.stringify(users));
            }
            try {
                const data = await fs.readFile(`.${req.url}`);
                return res.end(data);
            }catch(err){
                console.log(err);
            }
        } else if(req.method === 'POST') {
            if(req.url === './user') {

            }
        }
        //GET 메서드 요청이 아니거나 존재하지 않는 파일을 요청하면 에러코드
        res.writeHead(404);
        return res.end('NOT FOUND');
    }catch(err) {
        console.log(err);
        //응답 과정 중 에러가 발생하면 500에러
        res.writeHead(500, {'Content-type' : 'text/plain; charset = utf-8'});
        console.log(err.message);
    }
})
    .listen(8080, () => {
        console.log('8080번 포트에서 서버 대기 중입니다');
    });