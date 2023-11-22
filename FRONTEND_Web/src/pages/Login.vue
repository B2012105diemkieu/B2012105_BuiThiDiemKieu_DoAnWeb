<template>
    <div class="login-container">
        <div class="login-form-container">
            <form id="loginForm" @submit="handleSubmit" novalidate autocomplete="off">
                <h3>Đăng nhập</h3>

                <div v-if="errors.length" class="error-box">
                    <ul>
                        <li v-for="error in errors" :key="error">{{ error }}</li>
                    </ul>
                </div>

                <div class="form-group">
                    <input type="email" id="uEmail" name="uEmail" class="form-control" placeholder="Nhập email"
                        v-model="loginObj.email" />
                </div>

                <div class="form-group">
                    <input type="password" id="uPass" name="uPass" class="form-control"
                        placeholder="Nhập password" v-model="loginObj.pass" />
                </div>

                <div class="form-group">
                    <input type="submit" value="Đăng nhập" class="btn">
                    <p>Bạn chưa có tài khoản? <router-link @click="scrollToTop()" to="/register">Đăng ký tài khoản
                        </router-link>
                    </p>
                </div>
            </form>
        </div>
    </div>
</template>


<script>
import axios from "axios";
import { mapMutations } from "vuex";
export default {
    name: 'Login',

    data() {
        return {
            loginObj: { email: "", pass: "" },
            //matchUser: undefined,
            errors: [],
            
        }
    },

    methods: {
       
        ...mapMutations(["setUser"]),
        scrollToTop() {
            window.scrollTo(0, 0);
        },

        // async getMatchUser(email) {
        //     let data = await axios.get('/user/get-details-email/' + email);
        //     this.matchUser = data.data;
        //     alert(this.matchUser.user)
        // },


        async handleSubmit(e) {
            this.errors = [];

            if (!this.loginObj.email) {
                this.errors.push("Entering a email is required");
            }
            else {
                if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.loginObj.email)) {
                    this.errors.push('Email must be valid');
                }
            }


            if (!this.loginObj.pass) {
                this.errors.push('Password is required');
            }

            if (!this.errors.length == 0) {
                e.preventDefault();
            }
            else {
                e.preventDefault();
                // await this.getMatchUser(this.loginObj.email);
                // if (!this.matchUser) {
                //     this.errors.push("Incorrect email or password!")
                //     alert("fff")

                // }
                // else {
                //     if (this.matchUser.user === this.loginObj.pass) {
                        
                //         this.setUser(this.matchUser);

                //         let data = {
                //         email: this.registerObj.email,
                        
                //         password: this.registerObj.pass,
                       
                //     }
                //     await axios.post("/user/sign-up", data);
                //         alert("Đăng nhập thành công");
                //         this.$router.push("/");
                //     }
                //     else {
                //         this.errors.push("Incorrect email or password!")
                //         alert(this.matchUser.user_password)
                //     }
                // }
                let data = {
                      
                        email: this.loginObj.email,
                        
                       password: this.loginObj.pass,
                       
                        
                    }
                    // console.log("name", this.registerObj.name);
                    // console.log("email",this.registerObj.email);
                    // console.log("password", this.registerObj.pass);
                    // console.log("phone", this.registerObj.phone);

                    var result = await axios.post("/user/sign-in", data);
                    //  alert("Đăng nhập thành công");
                    // this.$router.push("/");
                    if (result.data != false) {
                        
                        this.setUser(this.matchUser);
               
                //this.onCloseFormLogin();
                // this.$emit("showLogout");
               // this.$store.state.isLogin=true;
                // alert(this.Login)
                alert("Đăng nhập thành công");
                 this.$router.push("/");
            }
            else {
                alert("Nhập sai tài khoản hoặc mật khẩu");
            }
               
                }}

    }

}
</script>

<style scoped>
.login-container {
    padding: 2rem 9%;
}

.login-container .login-form-container {
    background-color: #fff;
    height: 90vh;
}

.login-container .login-form-container form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 40rem;
    width: 100%;
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.05);
    border: 0.1rem solid rgba(0, 0, 0, 0.2);
    padding: 2rem;
    border-radius: .5rem;
    animation: fadeUp .4s linear;
}

.login-container .login-form-container form h3 {
    padding-bottom: 1rem;
    font-size: 2rem;
    font-weight: bolder;
    text-transform: uppercase;
    color: #130f40;
    margin: 0;
}

.login-container .login-form-container form .form-control {
    margin: .7rem 0;
    border-radius: .5rem;
    background: #f7f7f7;
    padding: 2rem 1.2rem;
    font-size: 1.6rem;
    color: #130f40;
    text-transform: none;
    width: 100%;
    border: none;
}

.login-container .login-form-container form .btn {
    margin-bottom: 1rem;
    margin-top: 1rem;
    width: 100%;
}

.login-container .login-form-container form p {
    padding-top: 1rem;
    font-size: 1.5rem;
    color: #666;
    margin: 0;
}

.login-container .login-form-container form p a {
    color: #27ae60;
}

.login-container .login-form-container form p a:hover {
    color: #130f40;
    text-decoration: underline;
}

.login-container .login-form-container form .error-box {
    background-color: #fff9fa;
    box-sizing: border-box;
    border: 2px solid rgba(255, 66, 79, .2);
    border-radius: 2px;
    font-size: 12px;
    margin-bottom: 20px;
}

.login-container .login-form-container form .error-box ul {
    list-style-type: none;
    margin: 0;
    padding: 10px 0px;
}

.login-container .login-form-container form .error-box ul li {
    padding-left: 10px;
    color: rgb(182, 0, 0);
}
</style>