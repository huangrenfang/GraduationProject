<template>
    <div class="my-nav">
        <el-steps :active="this.active" finish-status="success" simple class="top-step">
            <el-step title="样式配置" >
            </el-step>
            <el-step title="上传图片" >
                <span>this is step two</span>
            </el-step>
            <el-step title="Finished" >
                <span>this is step three</span>
            </el-step>
        </el-steps>
        <div class="content " v-if="this.active == 2">
            <div id="upload-img">
                <span>背景图片</span>
                <el-upload
                    class="avatar-uploader"
                    action="http://localhost:3000/main/upload"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                    method="post"
                    enctype=multipart/form-data
                    :data="this.message">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <el-button-group style="position:absolute;right:-920px;top:415px;">
                    <el-button type="normal" icon="el-icon-arrow-left" @click="stylePre">上一页</el-button>
                    <el-button type="normal" @click="imgNext">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
                </el-button-group>
                
            </div>
        </div>
        <div class="content" v-if="this.active == 1">
            <div>
                <span>输入框:</span>
                <div>
                    input_default<el-input v-model="input_default" placeholder="请输入内容" name="input_default"></el-input>
                </div>
                <div>
                    input_hover<el-input v-model="input_hover" placeholder="请输入内容" name="input_hover"></el-input>
                </div>
                <div>
                    input_active<el-input v-model="input_active" placeholder="请输入内容" name="input_active"></el-input>
                </div>
            </div>
            <div>
                <span>按钮:</span>
                <div>
                    button_default<el-input v-model="button_default" placeholder="请输入内容" name="button_default"></el-input>
                </div>
                <div>
                    button_hover<el-input v-model="button_hover" placeholder="请输入内容" name="button_hover"></el-input>
                </div>
                <div>
                    button_active<el-input v-model="button_active" placeholder="请输入内容" name="button_active"></el-input>
                </div>
            </div>
            <div>
                <span>导航栏:</span>
                <div>
                    nav_background_color<el-input v-model="nav_background_color" placeholder="请输入内容" name="nav_background_color"></el-input>
                </div>
                <div>
                    nav_text_color<el-input v-model="nav_text_color" placeholder="请输入内容" name="nav_text_color"></el-input>
                </div>
                <div>
                    nav_text_active_color<el-input v-model="nav_text_active_color" placeholder="请输入内容" name="nav_text_active_color">n</el-input>
                </div>      
            </div> 
            <el-button-group class="style-button">
                <el-button type="normal" @click="styleNext">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
            </el-button-group>
        </div>
        <div class="content" v-if="this.active == 3">
            <el-button type="normal" icon="el-icon-arrow-left" @click="stylePre">上一页</el-button>
            <el-button type="primary" @click="finish">皮肤替换</el-button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            imageUrl: '',
            uid:'',
            active: 1,
            input_default:'',
            input_hover:'',
            input_active:'',
            button_default:'',
            button_hover:'',
            button_active:'',
            nav_background_color:'',
            nav_text_color:'',
            nav_text_active_color:'',
            styleList:[],
            inputList:['input_default','input_hover','input_active'],
            ipt: window.document.getElementsByTagName("input"),
            message: {
                msg:"test"
            }
        }
    },
    mounted() {
        let newArr = [];
        for(let item in this.ipt){
            newArr.push(this.ipt[item])
        }
        newArr.splice(9)
        // console.log(newArr)
        for(let item of newArr){
            item.addEventListener("change",()=>{
                let key = item.name,value = item.value;
                let newObj = {[key]:value}
                this.styleList.push(newObj)
            },false)
        }
    },
    created() {
        
    },
    watch: {
        // input_default(ne,ol){
        //     console.log(ne+ol)
        // }
    },
    methods: {
        finish(){
            console.log("finsh")
            axios({
                method: 'post',
                url: 'http://localhost:3000/main/final',
                data:{
                    styleList: this.styleList,
                    msg: "this is final test"
                }
            }).then((res)=>{
                console.log(res)
            })
            
            
            axios({
                method:"get",
                url: "http://localhost:3000/newSkin.css"
            }).then((res)=>{
                let skin1 = document.createElement('style');
                let mainApp = window.document.getElementById("app");
                console.log(res.data)
                skin1.innerHTML = res.data
                // let dom = window.document.getElementsByTagName("link")[4]
                // document.head.appendChild(style1);
                mainApp.appendChild(skin1)
                console.log(window.document.getElementsByTagName("link"))
            })
            
            
            
        },
        change(){
            console.log(111)
        },
        stylePre(){
            --this.active;
        },
        styleNext(){
            //newArr存放所有放在styleList里对象的key
            let newArr = [];
            for(let item of this.styleList){
                for(let host in item){
                    newArr.push(host)
                }
            }
            // 下面两个for循环为数组去重，把重复的数据，优先级由最先输入的数据（重复）删除为最高，最后得到最新无重复的input.value
            let i=0,j=newArr.length-1;
            let num = [];
            //第一个循环找出需要删除的重复数据的数组下标index，之所以不在一个循环内执行是因为执行的时候改变了数组，数组的内容发生改变，原本的逻辑就不再适用
            for(j;i<j;j--){
                if(newArr.indexOf(newArr[j]) != j){
                    num.push(newArr.indexOf(newArr[j]))
                }
            }
            //第二个循环执行删除操作
            for(let p=0;p<num.length;p++){
                this.styleList.splice(num[p],1)
            }

            //正则表达式检测输入规范问题
            let reg = /^#[0-9a-z]{6}/;
            
            if(typeof  this.styleList[8] !== "object"){
                this.$message.error("请填写完整")
                return
            }
            for(let item of this.styleList){
                for(let host in item){
                    if(!reg.test(item[host])){
                        this.$message.error(`${host}填写不规范`)
                        return
                    }
                }
            }
            ++this.active
        },
        imgNext(){
            if(this.uid != ''){
                this.active = 3
            }else{
                this.$message.error("请上传图片再操作")
                return
            }
        },
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
            this.$message({
                type: 'success',
                message: '上传成功'
            })
            console.log(res)
            this.uid = file.uid
            let imgName = {"imgName":file.name};
            this.styleList.push(imgName)
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        }
    }
}
</script>

<style>
.style-button{
    position: absolute;
    right: 50px;
    bottom: -100px;
}
#upload-img{
    position: relative;
    top:-150px;
    left: -450px;
    margin-top: 60px;
}
.el-input__inner{
    width: 150px;
    margin-bottom: 20px;
}
.top-step{
    position: relative;
    top: -130px;
}
.content{
    width: 100%;
    position: relative;
    top:0px;
    display: flex !important;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}
.my-nav{
    height: 100%;
    width: 100%;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>