<template>
  <div id="page-wrap" >
    <div id="img-wrap">
      <img v-bind:src="product.imageUrl" />
    </div>
    <div id="product-details">
      <h1>{{ product.name }}</h1>
      <h3 id="price">{{ product.price }}VNĐ</h3>
      <p>Average rating: {{ product.averageRating }}</p>
      <button
        id="add-to-cart"
      >Thêm vào giỏ hàng</button>
      
      <h4>Mô tả</h4>
      <p>{{ product.description }}</p>
    </div>
  </div>
  
</template>

<script>
import { products } from '@/fake-data';


export default {
    name: 'ProductDetailPage',
    
    data() {
      return {
        product: products.find((p)=> p.id === this.$route.params.id),
        
      };
    },
    
   
};
</script>

<style scoped>
  #page-wrap {
    position: relative;
    top: 50%;
    left: 25%;
    /* margin-top: 16px;
    padding: 16px; */
    max-width: 600px;
  }

  #img-wrap {
    text-align: center;
  }

  img {
    width: 400px;
  }

  #product-details {
    padding: 16px;
    position: relative;
  }

  #add-to-cart {
    width: 100%;
  }

  #price {
    position: absolute;
    top: 24px;
    right: 16px;
  }

  .green-button {
    background-color: green;
    
  }
  button {
    width: 100%;
    height: 40px;
    font-size: 20px;
    align-content: center;
  }
  .grey-button {
    background-color: #888;
  }
</style>
