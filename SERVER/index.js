const Koa = require('koa');
const app = new Koa();

// 解决跨域问题
const cors = require('koa2-cors');
app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
}));

const Router = require("koa-router");
let router = new Router();
let main = require('./controller/main.js')
router.use('/main',main.routes())

app.use(router.routes());
app.use(router.allowedMethods());




// 接收前端post请求
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());


const {connect} = require('./init.js');
connect();


app.use(async (ctx)=>{
    ctx.body = 'hello world'
    ctx.append('Access-Control-Allow-Origin','http://localhost:8080')
})

app.listen(3000,()=>{
    console.log("启动成功");
})