const http = require('http')
const server = http.createServer((req,res)=> {
    if (req.url === "/"){
        res.end('welcome to our home page')
    }
    else if (req.url === "/about") {
        res.end('Here is our short story')
    }
    else {
        res.end(`
        <h1> OOOPS</h1>
        `)
    }
    
})

server.listen(5000)