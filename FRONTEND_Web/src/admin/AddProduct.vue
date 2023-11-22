<template>
    <div class="addproduct-container">
        <div class="addproduct-form-container">
            <form id="addproductForm" @submit="handleSubmit" novalidate autocomplete="off">
                <h3>Thêm sản phẩm</h3>
                <div class="form-group">
                    <label for="name">Nhập tên:
                    </label>
                    <input type="text" name="name" placeholder="" id="name" class="form-control"
                        v-model="productObj.name" />
                    <p class="error-mess" v-if="errorObj.nameErr.length > 0">{{ errorObj.nameErr[0] }}</p>
                </div>

                <div class="form-group">
                    <label for="stype">Loại giày:
                    </label>
                    <input type="text" name="stype" placeholder="" id="stype" class="form-control"
                        v-model="productObj.type" />
                    <p class="error-mess" v-if="errorObj.stypeErr.length > 0">{{ errorObj.stypeErr[0] }}</p>
                </div>

                <div class="form-group">
                    <label for="price">Giá tiền:
                    </label>
                    <input type="number" name="price" placeholder="" id="price"
                        class="form-control" v-model="productObj.price" />
                    <p class="error-mess" v-if="errorObj.priceErr.length > 0">{{ errorObj.priceErr[0] }}</p>
                </div>

                <div class="form-group">
                    <label for="image">Hình ảnh:
                    </label>
                    <input type="url" name="image" placeholder="" id="image"
                        class="form-control" v-model="productObj.image" />
                    <p class="error-mess" v-if="errorObj.imageErr.length > 0">{{ errorObj.imageErr[0] }}</p>
                </div>

                <div class="form-group">
                    <label for="countInStock">Số lượng:
                    </label>
                    <input type="number" name="countInStock" placeholder="" id="countInStock"
                        class="form-control" v-model="productObj.countInStock" />
                    <p class="error-mess" v-if="errorObj.countInStockErr.length > 0">{{ errorObj.countInStockErr[0] }}</p>
                </div>
                <div class="form-group">
                    <label for="rating">Đánh giá sao:
                    </label>
                    <input type="number" name="rating" placeholder="4.8" id="rating"
                        class="form-control" v-model="productObj.rating" />
                    
                </div>

                <div class="form-group">
                    <label for="discount">Khuyến mãi:
                    </label>
                    <input type="number" name="discount" placeholder="" id="discount"
                        class="form-control" v-model="productObj.discount" />
                    <p class="error-mess" v-if="errorObj.discountErr.length > 0">{{ errorObj.discountErr[0] }}</p>
                </div>

                <div class="form-group">
                    <label for="description">Mô tả:
                    </label>
                    <input type="text" name="description" placeholder="" id="description"
                        class="form-control" v-model="productObj.description" />
                    <p class="error-mess" v-if="errorObj.descriptionErr.length > 0">{{ errorObj.descriptionErr[0] }}</p>
                </div>

               

                <div class="form-group">
                    <input type="submit" value="Thêm sản phẩm" class="btn" />
                    <!-- <div class="cancelh"> -->
                    <router-link to="/admin/home">  Hủy </router-link>
                <!-- </div> -->
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "AddProduct",

    data() {
        return {
            productObj: { name: "", type: "", price: "", image: "", countInStock: "", description: "", discount: "", rating: ""},
            errorObj: { nameErr: [], stypeErr: [], priceErr: [], imageErr: [], countInStockErr: [], descriptionErr: [], discountErr: [] },
           

        }
    },

    methods: {
        
        scrollToTop() {
            window.scrollTo(0, 0);
        },

        
        resetCheckErr: function () {
            this.errorObj.nameErr = [];
            this.errorObj.stypeErr = [];
            this.errorObj.passErr = [];
            this.errorObj.priceErr = [];
            this.errorObj.imageErr = [];
            this.errorObj.countInStockErr = [];
            this.errorObj.descriptionErr = [];
            this.errorObj.discountErr = [];
           
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
            if (!this.productObj.name) {
                this.errorObj.nameErr.push("Entering a name is required");
            }

            //  
            if (!this.productObj.type) {
                this.errorObj.stypeErr.push("Entering a type is required");
            }
            

            // 
            if (!this.productObj.price) {
                this.errorObj.passErr.push('Price is required');
            }
            

            //  
            if (!this.productObj.image) {
                this.errorObj.imageErr.push('image is required');
            }
            


            // 
            if (!this.productObj.countInStock) {
                this.errorObj.countInStockErr.push('countInStock is required');
            }


            // Birth validate
            if (!this.productObj.description) {
                this.errorObj.descriptionErr.push('description is required');
            }

            // Gender validate
            // if (!this.productObj.discount) {
            //     this.errorObj.discountErr.push('discount is required');
            // }
        },

        async handleSubmit(e) {
            this.checkForm();

            if (!this.checkEmptyErr()) {
                e.preventDefault();
            } else {
                e.preventDefault();
                //await this.getMatchUser(this.addproductObj.email);
                
                    let data = {
                        name: this.productObj.name,
                        type: this.productObj.type,
                        price: this.productObj.price,
                        image: this.productObj.image,
                        countInStock: this.productObj.countInStock,
                        description: this.productObj.description,
                        discount: this.productObj.discount,
                        rating: this.productObj.rating,
                    }
                    await axios.post("http://localhost:3001/api/product/create", data);
                    
                    alert("Thêm sản phẩm mới thành công!");
                    this.$router.push("/admin/home");
                
                  
            }
        },
        // handleCancel: function () {
           
        //     //alert("Đăng xuất thành công!")
        //     this.$router.push("/admin/home");
        // }
    },

};
</script>


<style scoped>


.cancelh{
    width: 10%;
    font-size: 20px;
    justify-content: center;
    position: relative;
    display: flex;
}
.addproduct-container {
    padding: 2rem 9%;
}

.addproduct-container .addproduct-form-container {
    background: #fff;

}

.addproduct-container .addproduct-form-container form {
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

.addproduct-container .addproduct-form-container form h3 {
    padding-bottom: 1rem;
    font-size: 2rem;
    text-transform: uppercase;
    color: #130f40;
    margin: 0;
}

.addproduct-container .addproduct-form-container form .form-control {
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

.addproduct-container .addproduct-form-container form label {
    font-size: 2rem;
    margin: 0;
    padding: 0;
}

.addproduct-container .addproduct-form-container form span {
    font-size: 18px;
    padding-left: 5px;
    padding-right: 40px;
}

.addproduct-container .addproduct-form-container form .btn {
    margin: 1rem 0;
    width: 100%;
    text-align: center;
}

.addproduct-container .addproduct-form-container form p {
    padding-top: 1rem;
    font-size: 1.5rem;
    color: #666;
    margin: 0;
}

.addproduct-container .addproduct-form-container form p a {
    color: #27ae60;
}

.addproduct-container .addproduct-form-container form p a:hover {
    color: #130f40;
    text-decoration: underline;
}

.addproduct-container .addproduct-form-container form .form-group {
    margin: 0;
}

.addproduct-container .addproduct-form-container form .form-group .error-mess {
    font-size: 1.5rem;
    position: relative;
    color: rgb(243, 47, 47);
    margin: 0;
    padding: 0;
}
</style>
