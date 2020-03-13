const Router = require('koa-router');
const router = new Router();

router.post('/test',async (ctx)=>{
    console.log("koa-router 成功")
    ctx.body = {
        code:200,
        msg:"It's work!"
    }
})

module.exports = router;