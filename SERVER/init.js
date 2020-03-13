const mongoose = require("mongoose");
const db = 'mongodb://localhost:27017/server';


const global = require("global");
const path = require("path");



exports.connect = ()=>{
    //连接数据库
    mongoose.connect(db,{useNewUrlParser: true,useUnifiedTopology: true});
    //监听数据库连接
    mongoose.connection.on('disconnected',()=>{
        mongoose.connect(db);
    })
    //报错
    mongoose.connection.on('error',err=>{
        console.log(err);
        mongoose.connect(db);
    });
    mongoose.connection.once('open',()=>{
        console.log('数据库连接成功') 
    })
}
