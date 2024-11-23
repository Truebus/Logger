// const http = require('http');
// // const fs = require('fs');

// const res=http.createServer((req,res)=>{
// //    return res.end("Hello Versha!!");
//   console.log(req.url);
// //   console.log(req)
   
// })

// res.listen(8080,()=>{
//     console.log("first server successfully!!!")
// })

const http = require('http');
http.createServer((req,res)=>{
       switch(req.url){
        case "/":
            return res.end("This is Home Page");
            case "/about":
                return res.end("this is about page");
                case "/help":
                    return res.end("<h1>This is help page</h1>")
                    default:
                        return res.end("404 page not found")
       }
}).listen(8080,()=>{
    console.log("Server Runs successfully");
})
