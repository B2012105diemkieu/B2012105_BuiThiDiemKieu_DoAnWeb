<template>
    <div class="register-container">
        <div class="register-form-container">
            <form id="registerForm" @submit="handleSubmit" novalidate autocomplete="off">
                <h3>Đăng ký tài khoản</h3>
                <div class="form-group">
                    <label for="uName">Nhập tên:
                    </label>
                    <input type="text" name="uName" placeholder="Họ tên" id="uName" class="form-control"
                        v-model="registerObj.name" />
                    <p class="error-mess" v-if="errorObj.nameErr.length > 0">{{ errorObj.nameErr[0] }}</p>
                </div>

                <div class="form-group">
                    <label for="uEmail">Nhập email:
                    </label>
                    <input type="email" name="uEmail" placeholder="PTWeb@gmail.com" id="uEmail" class="form-control"
                        v-model="registerObj.email" />
                    <p class="error-mess" v-if="errorObj.emailErr.length > 0">{{ errorObj.emailErr[0] }}</p>
                </div>

                <div class="form-group">
                    <label for="uPass">Nhập password:
                    </label>
                    <input type="password" name="uPass" placeholder="Nhập password" id="uPass"
                        class="form-control" v-model="registerObj.pass" />
                    <p class="error-mess" v-if="errorObj.passErr.length > 0">{{ errorObj.passErr[0] }}</p>
                </div>

                <div class="form-group">
                    <label for="uPassConfirm">Nhập lại password:
                    </label>
                    <input type="password" name="uPassConfirm" placeholder="Nhập lại password" id="uPassConfirm"
                        class="form-control" v-model="registerObj.confirm" />
                    <p class="error-mess" v-if="errorObj.confirmErr.length > 0">{{ errorObj.confirmErr[0] }}</p>
                </div>

                <div class="form-group">
                    <label for="uPhone">Nhập số điện thoại:
                    </label>
                    <input type="tel" name="uPhone" placeholder="Nhập SĐT" id="uPhone"
                        class="form-control" v-model="registerObj.phone" />
                    <p class="error-mess" v-if="errorObj.phoneErr.length > 0">{{ errorObj.phoneErr[0] }}</p>
                </div>

               

                <div class="form-group">
                    <input type="submit" value="Đăng ký" class="btn" />
                    <p>Bạn đã có tài khoản? <router-link @click="scrollToTop()" to="/login">Đăng nhập</router-link>
                    </p>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "Register",

    data() {
        return {
            registerObj: { name: "", email: "", pass: "", confirm: "", phone: ""},
            errorObj: { nameErr: [], emailErr: [], passErr: [], confirmErr: [], phoneErr: [] },
           matchUser: undefined,

        }
    },

    methods: {
        async getMatchUser(email) {
            let data = await axios.get('/user/get-details-email/' + email);
            this.matchUser = data.data;
        },

        scrollToTop() {
            window.scrollTo(0, 0);
        },

        
        resetCheckErr: function () {
            this.errorObj.nameErr = [];
            this.errorObj.emailErr = [];
            this.errorObj.passErr = [];
            this.errorObj.confirmErr = [];
            this.errorObj.phoneErr = [];
           
        },

        checkEmptyErr: function () {
            for (var typeErr in this.errorObj) {
                if (this.errorObj[typeErr].length != 0) {
                    return false;
                }
            }
            return true;
        },

        checkForm: function () {
            this.resetCheckErr();

            // Name validate
            if (!this.registerObj.name) {
                this.errorObj.nameErr.push("Entering a name is required");
            }
            else {
                if (!/^[A-Za-z]+$/.test(this.registerObj.name.replace(/\s/g, ""))) {
                    this.errorObj.nameErr.push('A name can only contain letters');
                }
            }

            // Email validate
            if (!this.registerObj.email) {
                this.errorObj.emailErr.push("Entering a email is required");
            }
            else {
                if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.registerObj.email)) {
                    this.errorObj.emailErr.push('Email must be valid');
                }
            }

            // Pass validate
            if (!this.registerObj.pass) {
                this.errorObj.passErr.push('Password is required');
            }
            else {
                if (!/[!@#$%^&*]/.test(this.registerObj.pass)) {
                    this.errorObj.passErr.push('Password must contain at least 1 special character');
                }

                if (this.registerObj.pass.length < 8) {
                    this.errorObj.passErr.push('Password must be more than or equal 8 characters');
                }
            }

            // Confirm Pass validate
            if (!this.registerObj.confirm) {
                this.errorObj.confirmErr.push('Confirm password is required');
            }
            else {
                if (this.registerObj.pass !== this.registerObj.confirm) {
                    this.errorObj.confirmErr.push('Confirm password must be match with password');
                }
            }


            // Phone validate
            if (!this.registerObj.phone) {
                this.errorObj.phoneErr.push('Entering phone number is required');
            }
            else {
                if (!this.registerObj.phone.startsWith('0')) {
                    this.errorObj.phoneErr.push('Phone numbers must start with 0');
                }

                if (this.registerObj.phone.length != 10) {
                    this.errorObj.phoneErr.push('Phone numbers must have exactly 10 digits');
                }

                if (!/[0-9]{10}/.test(this.registerObj.phone)) {
                    this.errorObj.phoneErr.push('Phone numbers can only contain numbers');
                }
            }

            // Birth validate
           

            // Gender validate
            
        },

        async handleSubmit(e) {
            this.checkForm();

            if (!this.checkEmptyErr()) {
                e.preventDefault();
            } else {
                e.preventDefault();
                await this.getMatchUser(this.registerObj.email);
                if (!this.matchUser) {
                    this.errorObj.emailErr.push("Account already exist")
                }
                else {
                    let data = {
                        user_name: this.registerObj.name,
                        user_email: this.registerObj.email,
                        user_phone: this.registerObj.phone,
                        user_password: this.registerObj.pass,
                        confirmPassword: this.registerObj.confirm,
                    }
                    await axios.post("/user/sign-up", data);
                    
                    alert("Đăng ký thành công!");
                    this.$router.push("/login");
                }
                    // let data = {
                    //     name: this.registerObj.name,
                    //     email: this.registerObj.email,
                        
                    //    password: this.registerObj.pass,
                    //    confirmPassword: this.registerObj.confirm,
                    //    phone: this.registerObj.phone
                        
                    // }
                    // // console.log("name", this.registerObj.name);
                    // // console.log("email",this.registerObj.email);
                    // // console.log("password", this.registerObj.pass);
                    // // console.log("phone", this.registerObj.phone);

                    // await axios.post("/user/sign-up", data);
                    //  alert("Đăng ký thành công!");
                    // this.$router.push("/login");
                    // // alert("add");
            }
        }
    },

};
</script>


<style scoped>
.register-container {
    padding: 2rem 9%;
}

.register-container .register-form-container {
    background: #fff;

}

.register-container .register-form-container form {
    position: relative;
    left: 50%;
    transform: translate(-50%, 0%);
    max-width: 70rem;
    width: 100%;
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.05);
    border: 0.1rem solid rgba(0, 0, 0, 0.2);
    padding: 2rem;
    border-radius: 0.5rem;
    animation: fadeUp 0.4s linear;
}

.register-container .register-form-container form h3 {
    padding-bottom: 1rem;
    font-size: 2rem;
    text-transform: uppercase;
    color: #130f40;
    margin: 0;
}

.register-container .register-form-container form .form-control {
    margin: 0.7rem 0;
    border-radius: 0.5rem;
    background: #f7f7f7;
    padding: 2rem 1.2rem;
    font-size: 1.6rem;
    color: #130f40;
    text-transform: none;
    width: 100%;
    border: none;
}

.register-container .register-form-container form label {
    font-size: 2rem;
    margin: 0;
    padding: 0;
}

.register-container .register-form-container form span {
    font-size: 18px;
    padding-left: 5px;
    padding-right: 40px;
}

.register-container .register-form-container form .btn {
    margin: 1rem 0;
    width: 100%;
    text-align: center;
}

.register-container .register-form-container form p {
    padding-top: 1rem;
    font-size: 1.5rem;
    color: #666;
    margin: 0;
}

.register-container .register-form-container form p a {
    color: #27ae60;
}

.register-container .register-form-container form p a:hover {
    color: #130f40;
    text-decoration: underline;
}

.register-container .register-form-container form .form-group {
    margin: 0;
}

.register-container .register-form-container form .form-group .error-mess {
    font-size: 1.5rem;
    position: relative;
    color: rgb(243, 47, 47);
    margin: 0;
    padding: 0;
}
</style>
