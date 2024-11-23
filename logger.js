//make simple logger

//take http in variable
const httpserver = require('http');

//take fs modules in variable
const fsmodules = require('fs');

//create http server
httpserver.createServer((req,res)=>{
   
    //take date in variable
    const currentdate = new Date().toLocaleDateString();
    const currenttime = new Date().toLocaleTimeString();

    //take date,time,url in variable
    const storedata = `${currentdate},${currenttime},${req.url}\n`;

    //console storedata 
    console.log(storedata);

    //append file
    fsmodules.appendFile('logger.html',storedata,(err)=>{
        if(err){
            console.log("Something went wrong",err);
        }
       res.writeHead(200,{'Content-Type':'text/html'})
       switch(req.url){
        case "/":
        res.write("<h1>This is Home Page.</h1>")
       break;
       case '/about':
         res.write("<h1>This is About Page.</h1>")
         break;
        case "/contact":
            res.write('<h1>This is Contact Page.</h1>')
            break;
            default:
                res.write("<h1>Page UnAvailable.</h1>")
       }
    })
}).listen(8080,()=>{
    console.log("Your Logger runs successfully.....")
})