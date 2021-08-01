const http = require('http');
http.createServer((req,res) => {
    //쿠키는 req.headers.cookie에 담겨 있다.
    console.log(req.url, req.headers.cookie);
    //응답의 헤더에 mycookie=test(쿠기의 형태임)를 저장한다.
    res.writeHead(200, {'Set-Cookie' : 'mycookie=test'});
    res.end('Hello Cookie');
})
    .listen(8080, () => {
        console.log('8080번 포트에서 대기중');
    })