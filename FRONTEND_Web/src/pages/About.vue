<template>
    <section class="about-section">
        <div class="heading">
            <span>Thông tin cửa hàng</span>
            <h3>Giày Style</h3>
        </div>

        <div class="row">
            <div class="about-content">
                <img src="../assets/images/about2.jpg" alt="">
                <div class="about-content-text">
                    <p>Sản phẩm của cửa hàng luôn đảm bảo chất lượng, đa dạng mẫu và giá tiền phù hợp. Nhân viên luôn tư vấn, giải đáp 
                    tất cả thắc mắc của khách hàng, được đổi size nếu không vừa. Tất cả các sản phẩm mua từ cửa hàng đều được bảo hành 6 tháng.</p>
                    <p>Chúng tôi cung cấp đa dạng mẫu giày với đủ các kích cỡ. Khách hàng có thể đến mua trực tiếp, thử giày tại cửa hàng hoặc 
                        đặt hàng trên website của chúng tôi. Khách hàng có thể liên hệ với cửa hàng để nhân viên tư vấn size phù hợp. 
                    </p>
                    <p>Thường niên, cửa hàng chúng tôi đều có các khuyến mãi đặc biệt tri ân khách hàng. Hãy theo dõi chúng tôi để biết thêm chi tiết các khuyến mãi
                        sắp tới.
                    </p>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="about-article">
                <h3>Hãy đến cửa hàng để có những lựa chọn tuyệt vời</h3>
            </div>
        </div>

        <div class="row gallery">
            <div class="wrapper">
                <img src="../assets/images/giaythethaonu1.jpg" alt="">
                <img src="../assets/images/giaycaogotnu2.jpg" alt="">
                <img src="../assets/images/giaybupbenu1.jpg" alt="">
                <img src="../assets/images/bootnu1.jpeg" alt="">
                <img src="../assets/images/giaythethaonam1.png" alt="">
                <img src="../assets/images/giaytaynam1.jpg" alt="">
                <img src="../assets/images/giaythethaonam2.png" alt="">
                <img src="../assets/images/boot2.jpg" alt="">
                <img src="../assets/images/giaycaogot3.png" alt="">
                <img src="../assets/images/giaythethaonu3.jpg" alt="">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "About",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");

.about-section {
    padding: 2rem 9%;
}

.about-section .about-content {
    display: flex;
    width: 100%;

}

.about-section .about-content img {
    background-color: rgb(249, 249, 249);
}

.about-section .about-content .about-content-text {
    font-size: 16px;
    padding-left: 50px;
}

.about-section .about-article {
    margin-top: 50px;
    padding: 10px;
    text-align: center;
    background-color: #27ae60;
    width: 100%;
}

.about-section .about-article h3 {
    font-family: 'Satisfy', cursive;
    font-size: 32px;
    color: white;
}


.about-section .gallery {
    overflow: hidden;
    padding: 100px;
}

.about-section .gallery .wrapper {
    position: relative;
    flex-grow: 1;
    margin: auto;
    max-width: 1200px;
    max-height: 1200px;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 2vmin;
    justify-items: center;
    align-items: center;
}

.about-section .gallery .wrapper img {
    z-index: 1;
    grid-column: span 2;
    max-width: 100%;
    margin-bottom: -52%;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    transform: scale(1);
    transition: all .25s;
}

.about-section .gallery .wrapper img:nth-child(7n + 1) {
    grid-column: 2 / span 2;
}

.about-section .gallery .wrapper img:hover {
    z-index: 2;
    transform: scale(2);
}

@media (max-width: 768px) {
    .about-section .about-content img {
        width: 250px;
    }

    .about-section .gallery .wrapper img:hover {
        transform: scale(2.5);
    }
}

@media (max-width: 576px) {
    .about-section .about-content img {
        width: inherit;
    }

    .about-section .about-content {
        display: block;
    }

    .about-section .about-content .about-content-text {
        padding-left: 0px;
    }

    .about-section .gallery {
        padding: 50px 0px;
    }

    .about-section .gallery .wrapper img {
        max-width: 100%;

    }

    .about-section .gallery .wrapper {
        grid-gap: 2vmin;
    }

    .about-section .gallery .wrapper img:hover {
        transform: scale(2);
    }

}
</style>