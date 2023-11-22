<template>
    <div id="admin">
        <div>
             <AdminNavBar /> 

                    
                        <div class="col-sm-4 col-12 filter-box">
                            <div class="row search-box">
                                <router-link to="/admin/addproduct"> <i class="fas fa-arrow-right"></i> Thêm sản phẩm
                                </router-link>
                            
                        
                    
                </div>
            </div>
            <!-- <FooterComponent />  -->
        </div>
    </div>
</template>

<script>
 import AdminNavBar from './AdminNavBar.vue';
// import FooterComponent from '../components/FooterComponent.vue';

// import { mapState } from 'vuex';
export default {
    name: 'AdminHome',
    components: {
         AdminNavBar,
        // FooterComponent
    },

    // computed: {
    //     ...mapState(["admin"])
    // },


}
</script>

<style>
@import "../assets/css/global_style.css";
.search-box {
    width: 40%;
    font-size: 20px;
    justify-content: center;
    position: relative;
    display: flex;
}
</style>

