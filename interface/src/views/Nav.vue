<template>
  <div id="main">
    <el-menu
    :default-active="activeIndex2"
    router=true
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
        <el-menu-item class="el-menu-demo-disp" index="/card">展示大厅</el-menu-item>
        <el-submenu index="2" class="el-menu-demo-skin el-menu-demo-disp">
            <template slot="title" >皮肤制作</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
    data(){
        return{
            activeIndex2:"/card"
        }
    }
    // methods: {
    //   handleOpen(key, keyPath) {
    //     // console.log(key, keyPath);
    //   },
    //   handleClose(key, keyPath) {
    //     // console.log(key, keyPath);
    //   }
    // }
}
</script>

<style>
#main{
    display: flex;
    justify-content: center;
}
.el-menu-demo{
    width: 100%;
    text-align: center !important;
}
.el-menu-demo-disp{
    text-align: center;
    margin: 0 200px !important;
}
.el-menu-demo-skin{
    float: right !important;
}
</style>