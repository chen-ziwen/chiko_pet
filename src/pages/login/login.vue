<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">宠物服务管理系统</div>
            <el-form ref="login" class="ms-content">
                <el-form-item prop="number">
                    <el-input placeholder="请输入账号" v-model="num">
                        <el-button slot="prepend" icon="el-icon-user"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="请输入密码" v-model="paw">
                        <el-button slot="prepend" icon="el-icon-view"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="enter">登录</el-button>
                </div>
            </el-form>
        </div>
    </div>
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
                if (this.num == '123456' && this.paw == 'chenziwen') {
                    // alert('登陆成功')
                    this.$message({
                        // showClose: true,
                        message: '恭喜您，登陆成功',
                        type: 'success',
                        duration : 2000,
                    });

                    this.$router.push('/FirstPage/pet1')

                } else {
                    this.$message({
                        // showClose: true,
                        message: '账号密码出错，请重新输入',
                        type: 'error',
                        duration : 1500,
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