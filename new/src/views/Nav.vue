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
        <el-menu-item class="el-menu-demo-skin" index="skin">皮肤配置</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
// import axios from 'axios';
export default {
    data(){
        return{
            activeIndex2:"showcard",
        }
    },
    methods: {

    }
}
</script>

<style>
#main{
    display: flex;
    justify-content: center;
}
#Nav{
    position: fixed !important;
    top: 0px !important;
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
    margin:0 200px !important;
}
</style>