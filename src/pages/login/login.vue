<template>
    <main class="login-wrap">
        <div class="ms-login">
            <div class="ms-title"><span>Chiko 千子宠物</span></div>
            <el-form ref="login" class="ms-content">
                <el-form-item prop="number">
                    <el-input placeholder="请输入账号" v-model="num">
                        <el-button slot="prepend" disabled icon="el-icon-user"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="请输入密码" v-model="paw">
                        <el-button slot="prepend" disabled icon="el-icon-view"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="enter">登录</el-button>
                </div>
            </el-form>
        </div>
    </main>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                num: '',
                paw: '',

            }
        },
        methods: {
            enter() {
                if (this.num == 'chenziwen' && this.paw == '123456') {
                    // alert('登陆成功')
                    let login = { number: this.num,password : this.paw}
                    console.log(this.$refs.login)
                    //将账号密码保存到localstorage中
                    sessionStorage.setItem('login',JSON.stringify(login))
                    this.$message({
                        // showClose: true,
                        message: ' 恭喜您，登陆成功',
                        type: 'success',
                        duration : 2000,
                        showClose: true,
                    });
                     
                    this.$router.push('/FirstPage/pet1')

                } else {
                    this.$message({
                        // showClose: true,
                        message: ' 账号密码出错，请重新输入',
                        type: 'error',
                        duration : 1500,
                        showClose: true,
                    });
                }
            },

        },

    }
</script>

<style scoped>
    .login-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        /* vh:表示显示窗口的高度，具体的请百度，这个单位会自适应变化； */
        background-image: url(../../assets/熊猫.jpg);
        /* background-size: 100% 100%; */
        background-size: cover;
        /* background-attachment:fixed; */

    }

    /* .login-wrap::after {

            content: "";
            display: block;
            
            padding:25%;

        } */

    .ms-title {
        width: 100%;
        line-height: 50px;
        text-align: center;
        font-size: 20px;
        color: black;
        border-bottom: 1px solid #ddd;
    }
   .ms-title span {
       font-weight: 600;
       text-shadow: 3px 3px 3px rgba(100, 100, 100, 1);
       letter-spacing: 1px;
   }
    .ms-login {
        width: 500px;
        border-radius: 5px;
        background: rgba(255, 255, 255, 0.3);
        overflow: hidden;
    }

    .ms-content {
        padding: 50px 40px;
        background: transparent;
    }

    .login-btn {
        text-align: center;
    }

    .login-btn button {
        width: 100%;
        height: 36px;
        margin-bottom: 10px;
    }

    .el-input-group__prepend {
        border: hotpink 5px solid;
    }
</style>