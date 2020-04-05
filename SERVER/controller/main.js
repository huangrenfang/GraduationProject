const Router = require('koa-router');
const router = new Router();
const multer = require('koa-multer');
let fs = require('fs')
let path = require('path')




// 使用硬盘存储模式设置存放接收到的文件的路径以及文件名
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // 接收到文件后输出的保存路径（若不存在则需要创建）
        cb(null, 'upload/');    
    },
    filename: function (req, file, cb) {
        // 将保存文件名设置为 时间戳 + 文件原始名，比如 151342376785-123.jpg
        cb(null, file.originalname);  
    }
});

// 创建文件夹
let createFolder = function(folder){
    try{
        // 测试 path 指定的文件或目录的用户权限,我们用来检测文件是否存在
        // 如果文件路径不存在将会抛出错误"no such file or directory"
        fs.accessSync(folder); 
    }catch(e){
        // 文件夹不存在，以同步的方式创建文件目录。
        fs.mkdirSync(folder);
    }  
};

let uploadFolder = './upload/';
createFolder(uploadFolder);

// 创建 multer 对象
let upload = multer({ storage: storage });

/* POST upload listing. */
router.post('/upload', upload.single('file'), async (res)=> {
    // req.response.status = 200;
    // req.response.message = "upload is worked"
    res.body = "upload successed"
});

// router.post('/',async (ctx)=>{
//     console.log("koa-router 成功")
//     ctx.body = {
//         code:200,
//         msg:"It's work!"
//     }
// })

router.post('/final',async (req,res)=>{
    let styleList = req.request.body.styleList
    let list = "";

    fs.readFile('upload/skin.css',{encoding:"utf-8"},(err,data)=>{
        if(err){
            console.log(err)
        }else{
            list = data;
            
            //循环上传的样式，每次匹配到对应到key值后，全局替换对应css样式值
            for(let item of styleList){
                for(let host in item){
                    let reg = new RegExp(host,"g")
                    // console.log(host,"host")
                    // console.log(item[host],"item[host]")
                    list = list.replace(reg,item[host])
                    // console.log(list,'list')

                }
                // console.log(list,"list")
            }

            fs.writeFile('upload/newSkin.css',list,{encoding:"utf-8"},(err)=>{
                if(err){
                    console.log("writeFile failed")
                }else{
                    console.log("writeFile successed")
                }
            })
        }
    })
    let newFile = await(new Promise((res,rej)=>{
        fs.readFile('upload/skin.css',{encoding:"utf-8"},(err,data)=>{
            if(err){
                rej(err)
            }else{
                res(data)
            }
        })
    }))
    res = req.response
    res.message= 'final router'
    res.type = 'html'
    res.body = newFile
})
module.exports = router;