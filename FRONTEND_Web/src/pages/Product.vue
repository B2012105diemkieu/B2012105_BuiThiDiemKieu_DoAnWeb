<template>
    <div class="menu-section">
        <div class="heading">
            <span>Sản phẩm</span>
            <h3>Tất cả các mẫu giày</h3>
        </div>

        <div class="row">
            <div class="col-sm-4 col-12 filter-box">
                <div class="row search-box">
                    <input type="text" class="search-input"  placeholder="Search.." />
                </div>

                <div class="row filter-drop-down">
                    <p >Filter<span v-if="showDropDown">x</span><span v-else>v</span></p>
                </div>

                <div class="row filter-heading">
                    <h1>Trạng thái</h1>
                </div>

                <div class="row filter-section">
                    <ul class="filter-option">
                        <li>
                            <input type="button" name="cbStatus" id="bsStatus" value="Best Seller" hidden
                                 />
                            <label for="bsStatus" class="d-flex justify-content-between">Sale off 20%
                                <button class="unselect-btn" 
                                    value="Best Seller">X</button></label>
                        </li>


                        <li>
                            <input type="button" name="cbStatus" id="ooStatus" value="Online Only" hidden
                                 />
                            <label for="ooStatus" class="d-flex justify-content-between">Sale 10% <button
                                    class="unselect-btn" 
                                    value="Online Only">X</button></label>
                        </li>


                    </ul>
                    <hr />
                </div>

                <div class="row filter-heading">
                    <h1> Giá</h1>
                </div>

                <div class="row filter-section">
                    <ul class="filter-option">
                        <li>
                            <input type="button" name="rPrice" id="rtfPrice" value="100000" hidden
                                />
                            <label for="rtfPrice" class="d-flex justify-content-between">dưới 100.000VNĐ <button
                                    class="unselect-btn" >X</button></label>
                        </li>

                        <li>
                            <input type="button" name="rPrice" id="rftPrice" value="100000,300000" hidden
                                 />
                            <label for="rftPrice" class="d-flex justify-content-between">100.000VNĐ - 300.000VNĐ <button
                                    class="unselect-btn">X</button></label>
                        </li>

                        <li>
                            <input type="button" name="rPrice" id="rttPrice" value="300000,600000" hidden
                                 />
                            <label for="rttPrice" class="d-flex justify-content-between">300.000VNĐ - 600.000VNĐ <button
                                    class="unselect-btn" >X</button></label>
                        </li>

                        <li>
                            <input type="button" name="rPrice" id="mtPrice" value="600000" hidden
                                 />
                            <label for="mtPrice" class="d-flex justify-content-between">{{ ">" }} 600.000VNĐ <button
                                    class="unselect-btn">X</button></label>
                        </li>

                    </ul>
                    <hr />
                </div>


                <div class="row filter-heading">
                    <h1>Loại</h1>
                </div>

                <div class="row filter-section">
                    <ul class="filter-option">
                        <li>
                            <input type="button" name="rType" id="mType" value="meat" hidden
                                />
                            <label for="mType" class="d-flex justify-content-between">Giày nữ<button class="unselect-btn"
                                   >X</button></label>
                        </li>

                        <li>
                            <input type="button" name="rType" id="vType" value="vegan" hidden
                                />
                            <label for="vType" class="d-flex justify-content-between">Giày nam<button class="unselect-btn"
                                   >X</button></label>
                        </li>

                    </ul>
                </div>
            </div>

            <div class="col-sm-8">
                <div class="row">
                    <div class="menu-tabs">
                        <input type="button" id="allFilterFoodBtn" name="allFilterFoodBtn" value="Tất cả"
                            class="menu-tab-item" />  
                            <!-- filterFoodBtn($event) -->
                        <input type="button" id="tacoFilterFoodBtn" name="tacoFilterFoodBtn" class="menu-tab-item"
                            value="Thể thao nữ" />
                        <input type="button" id="burritoFilterFoodBtn" name="burritoFilterFoodBtn" class="menu-tab-item"
                            value="Cao gót" />
                        <input type="button" id="nachosFilterFoodBtn" name="nachosFilterFoodBtn" class="menu-tab-item"
                            value="Boot nữ"  />
                        <input type="button" id="sidesFilterFoodBtn" name="sidesFilterFoodBtn" class="menu-tab-item"
                            value="Búp bê nữ" />
                        <input type="button" id="dessertFilterFoodBtn" name="dessertFilterFoodBtn" class="menu-tab-item"
                            value="Thể thao nam" />
                        <input type="button" id="drinkFilterFoodBtn" name="drinkFilterFoodBtn" class="menu-tab-item"
                            value="Giày tây nam"  />
                    </div>
                </div>

                <div class=" row box-container">
                    <div id="page-wrap"  >
                        <div class="grid-wrap">
                        <div
                            v-for= "product in products" 
                            class="product-item"
                            v-bind:key="product.id"
                            >
                            <img v-bind:src="product.imageUrl"/>
                            <h3 class="product-name">{{ product.name }}</h3>
                            <p class ="product-price">{{ product.price }}VNĐ</p>
                            <router-link v-bind:to="'/product/'+product.id">
                            <button>Xem chi tiết</button>
                        </router-link>
                        </div>
                    </div>
                        
                     </div>
                   
                </div>
                
            </div>
        </div>

    </div>
</template>

<script>
//import QuickView from "@/components/QuickView.vue";
//import ProductsGrid from '../components/ProductsGrid.vue';
import { products } from '@/fake-data';
//import axios from 'axios';
//import { mapState } from "vuex";
export default {
    name: "Product",
    // components: {
    //   ProductsGrid,
    // },
    data() {
      return {
        products,
      };
    },
    // async created() {
    //   const result = await axios.get('/product/get-all');
    //   const products = result.data;
    //   this.products = products;
    // }
    
};
</script>

<style scoped>
input[type="button"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
}

.product-item {
    align-items: center;
    border-radius: 8px;
    box-shadow: 0px 2px 5px #888;
    display: flex;
    flex-direction: column;
    margin-bottom: 2%;
    padding: 20px;
    position: relative;
    width: 32%;
  }

  .product-name {
    margin-bottom: 0;
  }

  img {
    height: 200px;
    width: 200px;
  }

  a {
    width: 100%;
  }

  button {
    width: 100%;
    height: 40px;
    font-size: 20px;
    align-content: center;
  }

  .grid-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 16px;
  }




.unselect-btn:active,
.unselect-btn:focus,
.action-btn:active,
.action-btn:focus {
    border: none;
    outline: none;
}

hr {
    border-top: 3px solid #057835fa;
    width: 100%;
}

.unselect-btn {
    background: transparent;
    padding-right: 10px;
    cursor: pointer;
    color: inherit;
    display: none;
}


.filter-section {
    width: inherit;
}

.filter-heading {
    padding-top: 30px;
}

.filter-heading h1 {
    color: #27ae60;
}

.filter-option {
    list-style-type: none;
    width: inherit;
}

.filter-option label {
    width: 100%;
    font-size: 15px;
    padding: 3px 0px;

}

.filter-option label:hover {
    color: white;
    background-color: #f38609 !important;
    transition: all 0.5s ease;
}

.search-box {
    width: 100%;
    justify-content: center;
    position: relative;
    display: flex;
}

.search-input {
    margin: 0;
    width: 100%;
    height: 40px;
    font-size: 20px;
    color: white;
    background: #27ae60;
}

::placeholder {
    color: white;
}

.menu-section {
    padding: 2rem 9%;
}

.menu-section .menu-tabs {
    margin-bottom: 30px;
    flex: 0 0 100%;
    max-width: 100%;
    text-align: center;
    background-color: #27ae60;
}

.menu-section .menu-tabs .menu-tab-item {
    display: inline-block;
    cursor: pointer;
    padding: 5px 30px;
    border-radius: 30%;
    font-size: 20px;
    color: whitesmoke;
    font-weight: 500;
    text-transform: capitalize;
    transition: all 0.3s ease;
    margin: 0;
}

.menu-section .menu-tabs .menu-tab-item:hover {
    background-color: #f38609 !important;
}

.menu-section .menu-tabs .menu-tab-item p {
    padding: none;
    margin: none;
}

.menu-section .box-container {
    
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    gap: 1.5rem;
}

.menu-section .box-container .box {
    border-radius: 0.5rem;
    position: relative;
    background: #f7f7f7;
    padding: 2rem;
    text-align: center;
}

.menu-section .box-container .box .fa-heart {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    font-size: 2.5rem;
    color: #666;
    cursor: pointer;
}

.menu-section .box-container .box .fa-heart:hover {
    color: #27ae60;
}

.menu-section .box-container .box .image {
    margin: 1rem 0;
}

.menu-section .box-container .box .image img {
    height: 15rem;
}

.menu-section .box-container .box .content h3 {
    font-size: 2rem;
    color: #130f40;
}

.menu-section .box-container .box .content .stars {
    padding: 1rem 0;
    font-size: 1.7rem;
}

.menu-section .box-container .box .content .stars i {
    color: gold;
}

.menu-section .box-container .box .content .stars span {
    color: #666;
}

.menu-section .box-container .box .content .desc p {
    font-size: 14px;
    margin: 0;
}

.menu-section .box-container .box .content .price {
    font-size: 2rem;
    color: #130f40;
}

.menu-section .box-container .box .content .price span {
    font-size: 1.5rem;
    color: #666;
    text-decoration: line-through;
}

.menu-section .action-row {
    padding-top: 30px;
    width: 100%;
    text-align: center;
    font-size: 20px;
}

.menu-section .action-row .action-btn {
    background-color: #27ae60;
    padding: 3px;
    border: 2px solid #27ae60;
    border-radius: 30%;
    color: white;
}

.menu-section .action-row span {
    margin-right: 15px;
}

.menu-section .action-row span:hover {
    cursor: pointer;
}

.menu-section .action-row span.highlight {
    color: #f38609;
}

.menu-section .action-row span:first-of-type {
    margin-left: 15px;
}

.filter-drop-down {
    display: none;
}

@media (min-width: 576px) {

    .filter-heading,
    .filter-section {
        display: block !important;
    }
}

@media (max-width: 768px) {
    .menu-section .box-container {

        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
        gap: 1rem;
    }

    .menu-section .box-container .box .content h3 {
        height: 4rem;
    }
}

@media (max-width: 576px) {

    .search-box,
    .filter-heading,
    .filter-section {
        width: auto;
    }

    .filter-option {
        width: 100%;
    }

    .filter-drop-down {
        display: block;
        background-color: #27ae60;
        color: white;
        font-weight: 400;
        margin-bottom: 15px;
        margin-top: 15px;

    }

    .filter-drop-down p {
        font-size: 20px;
        padding: 5px 0px;
        margin: 0;
        display: flex;
        justify-content: space-between;
    }

    .filter-drop-down p span {
        font-size: 20px;
        padding-right: 10px;
        text-transform: lowercase;
        font-weight: 300;
    }

    .filter-heading,
    .filter-section {
        display: none;
    }

    .menu-tabs .menu-tab-item {
        font-size: 12px !important;
        padding: 5px 20px !important;
    }

    .menu-section .action-row {
        font-size: 16px !important;
    }

    .menu-section .action-row span {
        margin-right: 5px;
    }

    .menu-section .box-container .box .image img {
        height: 10rem;
    }

    .menu-section .box-container .box .desc p,
    .menu-section .box-container .box .content .stars {
        font-size: 10px !important;
    }

    .menu-section .box-container .box .content h3 {
        font-size: 14px !important;
        height: 28px;
    }
}
</style>
