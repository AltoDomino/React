const http = require("http") 
const fs = require("fs/promises")

const getfiles =async()=>{
    const indexhtml = await fs.readFile("./index.html")
    const indexjs = await fs.readFile("./dist/r.bundle.js")
    return [indexhtml,indexjs]
}


http.createServer(async(req,res) => {
    const [indexhtml,indexjs] = await getfiles()
    const url = req.url;
        if (url === "/") {
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write(indexhtml);
        res.end();
       }if(url === "/js"){
        res.writeHead(200, {"Content-Type": "text/javascript"})
        res.write(indexjs);
        res.end();
       }
}).listen(8008)