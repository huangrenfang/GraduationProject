const Koa = require('koa');
const app = new Koa();



// 解决跨域问题
const cors = require('koa2-cors');
app.use(cors({
    origin: '*',
    credentials: true
}));

const bodyParser = require('koa-bodyparser')
app.use(bodyParser())

//为了通过http://localhost:3000/(imgurl)直接访问后端静态图片（不然访问不了，省去了生成图片url的步骤）
app.use(require('koa-static')(__dirname + '/upload'))

const Router = require("koa-router");
let router = new Router();
let main = require('./controller/main.js')
router.use('/main',main.routes())

app.use(router.routes());
app.use(router.allowedMethods());





const {connect} = require('./init.js');
connect();


app.use(async (ctx)=>{
    ctx.body = 'hello world'
})

app.listen(3000,()=>{
    console.log("启动成功");
})