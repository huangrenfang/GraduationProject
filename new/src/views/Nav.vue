<template>
  <div id="main">
    <meta http-equiv="Access-Control-Allow-Origin" content="*">
    <el-menu
    :default-active="activeIndex2"
    router
    class="el-menu-demo"
    mode="horizontal"
    
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
        <el-menu-item class="el-menu-demo-disp " index="showcard">展示大厅</el-menu-item>
        <el-submenu index="2" class="el-menu-demo-skin">
            <template slot="title" >皮肤制作</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
    </el-menu>
    <button @click="test()">test</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            activeIndex2:"showcard",
            // bool: "true"
        }
    },
    methods: {
    //   handleOpen(key, keyPath) {
    //     // console.log(key, keyPath);
    //   },
    //   handleClose(key, keyPath) {
    //     // console.log(key, keyPath);
    //   }
    test(){
        axios({
            url:'http://localhost:3000/main/test',
            method: 'post'
        }).then((res)=>{
            console.log("后端路由work")
            console.log(res )
        })
    }
    }
}
</script>

<style>
#main{
    display: flex;
    justify-content: center;
}
.el-menu-demo{
    /* width: 100%; */
    height: 9.8%;
}
.el-menu-demo-disp{
    text-align: center;
    margin-left: 200px  !important;
}
.el-menu-demo-skin{
    float: right !important;
    margin:0 200px;
}
</style>