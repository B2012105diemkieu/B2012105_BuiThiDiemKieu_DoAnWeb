<template>
    <div class="footer">
        <div class="news-letter">
            <h3>Nhận thông báo</h3>
            <form onsubmit="event.preventDefault();">
                <input type="email" name="useremailreceiveinfo" placeholder="enter your email"
                    id="useremailreceiveinfo">
                <input type="submit" value="Đăng ký">
            </form>
        </div>

        <div class="box-container">

            <div class="box">
                <h3>Mẫu giày</h3>
                <router-link @click="scrollToTop()" to="/product"><i class="fas fa-arrow-right"></i> Giày thể thao nữ</router-link>
                <router-link @click="scrollToTop()" to="/product"><i class="fas fa-arrow-right"></i> Giày cao gót nữ</router-link>
                <router-link @click="scrollToTop()" to="/product"><i class="fas fa-arrow-right"></i> Boot nữ</router-link>
                <router-link @click="scrollToTop()" to="/product"><i class="fas fa-arrow-right"></i> Giày búp bê nữ
                </router-link>
                <router-link @click="scrollToTop()" to="/product"><i class="fas fa-arrow-right"></i> Giày thể thao nam</router-link>
                <router-link @click="scrollToTop()" to="/product"><i class="fas fa-arrow-right"></i> Giày tây nam</router-link>
            </div>

            <div class="box">
                <h3>Trang</h3>
                <router-link @click="scrollToTop()" to="/"> <i class="fas fa-arrow-right"></i> Trang chủ  </router-link>
                <router-link @click="scrollToTop()" to="/about"> <i class="fas fa-arrow-right"></i> Thông tin cửa hàng  </router-link>
                <router-link @click="scrollToTop()" to="/promotions"> <i class="fas fa-arrow-right"></i> Khuyến mãi  
                </router-link>
                <router-link @click="scrollToTop()" to="/product"> <i class="fas fa-arrow-right"></i> Sản phẩm  </router-link>
                <router-link @click="scrollToTop()" to="/contact"> <i class="fas fa-arrow-right"></i> Liên hệ
                </router-link>
            </div>

            <div class="box">
                <h3>Liên kết đến</h3>
                <div v-if="user">
                    <router-link @click="scrollToTop()" to="/cart"> <i class="fas fa-arrow-right"></i> Giỏ hàng
                    </router-link>
                    <router-link @click="scrollToTop()" to="/myorder"> <i class="fas fa-arrow-right"></i> Đặt hàng
                    </router-link>
                </div>
                <div v-else>
                    <router-link @click="scrollToTop()" to="/login"> <i class="fas fa-arrow-right"></i> Đăng nhập
                    </router-link>
                    <router-link @click="scrollToTop()" to="/register"> <i class="fas fa-arrow-right"></i> Đăng ký
                    </router-link>
                    <router-link @click="handleLogout" to="/"> <i class="fas fa-arrow-right"></i> Đăng xuất
                    </router-link>
                    
                   
                </div>
            </div>

            <div class="box">
                <h3>Giờ mở cửa</h3>
                <p>Mỗi ngày : 7:00am đến 10:00pm</p>

            </div>

        </div>

        <div class="bottom">

            <div class="share">
                <a href="https://www.facebook.com/" class="fab fa-facebook-f"></a>
                <a href="https://twitter.com/?lang=en" class="fab fa-twitter"></a>
                <a href="https://www.instagram.com/" class="fab fa-instagram"></a>
                <a href="https://www.pinterest.com/" class="fab fa-pinterest"></a>
            </div>

        </div>

    </div>
</template>

<script>

import { mapState, mapMutations } from "vuex";
export default {
    name: 'FooterComponent',

    computed: {
        ...mapState(['user'])
    },

    methods: {
        ...mapMutations(["setUser"]),

        scrollToTop() {
            window.scrollTo(0, 0);
        },
        handleLogout: function () {
            //this.$stor.isLogin=false;
            
            this.setUser("");
            
            //alert(this.$store.isLogin)
            //  await axios.put("/update-user-email/"+email, {"isLogin":false});
            alert("Đăng xuất thành công!")
        }
    }
}
</script>

<style scoped>
/* footer */
.footer {
    background: #f7f7f7;
    padding: 2rem 9%;
}

.footer .news-letter {
    text-align: center;
    margin-bottom: 2rem;
}

.footer .news-letter h3 {
    font-size: 2.5rem;
    color: #130f40;
    padding-bottom: 1rem;
}

.footer .news-letter form {
    max-width: 70rem;
    margin: 1rem auto;
    max-width: 70rem;

    display: flex;
    border-radius: .5rem;
    overflow: hidden;
}

.footer .news-letter form input[type="email"] {
    height: 100%;
    width: 100%;
    padding: 1rem 1.2rem;
    font-size: 1.6rem;
    color: #130f40;
    text-transform: none;
}

.footer .news-letter form input[type="submit"] {
    padding: 0 2rem;
    font-size: 1.6rem;
    color: #fff;
    background: #27ae60;
    cursor: pointer;
}

.footer .news-letter form input[type="submit"]:hover {
    background: #130f40;
}

.footer .box-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 1.5rem;
}

.footer .box-container .box h3 {
    font-size: 2.2rem;
    color: #130f40;
    padding: 1rem 0;
}

.footer .box-container .box p {
    font-size: 1.4rem;
    color: #666;
    padding: 1rem 0;
}

.footer .box-container .box a {
    display: block;
    font-size: 1.4rem;
    color: #666;
    padding: 1rem 0;
}

.footer .box-container .box a:hover {
    color: #27ae60;
}

.footer .box-container .box a:hover i {
    padding-right: 2rem;
}

.footer .box-container .box a i {
    padding-right: .5rem;
    color: #27ae60;
}

.footer .bottom {
    padding-top: 1rem;
    text-align: center;
}

.footer .bottom .share {
    margin: 1.5rem 0;
}

.footer .bottom .share a {
    height: 4.5rem;
    width: 4.5rem;
    line-height: 4.5rem;
    font-size: 2rem;
    border-radius: .5rem;
    margin: 0 .3rem;
    color: #fff;
    background: #27ae60;
}

.footer .bottom .share a:hover {
    background: #130f40;
}

@media (max-width: 576px) {
    .footer .box-container {

        grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));

    }

}
</style>