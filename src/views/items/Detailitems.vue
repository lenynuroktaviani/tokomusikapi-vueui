<template>
    <div class="card text-center mt-4">
  <div class="card-header">
    Detail Item
  </div>
  <div class="card-body">
    <h5 class="card-title">{{item.nama}}</h5>
    <p class="card-text">{{item.merk}}</p>
    <p class="card-text">{{item.harga}}</p>
  </div>
  <div class="card-footer">
    <router-link class="btn btn-success" :to="{name:'Edititems', params:{id:item.id}}">Edit</router-link>
        <button @click.prevent="itemDelete(item.id)" class="btn btn-danger">Delete</button>
  </div>
</div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
export default {
  setup() {
      let item = ref([]);
    const router = useRouter();
    const route = useRoute()
    onMounted(()=>{
      axios.get(`http://127.0.0.1:8000/api/items/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.nama);
        item.value = response.data.data;
        
      }).catch(error =>{
        console.log(error.response.data);
      });
    });
    function itemDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/items/${id}`)
      .then(()=>{
        router.go(-1);
      }).catch(error => {
        console.log(error)
      })
    }
    
    return {
      item,
      router, 
      itemDelete,
      route
    }
  },
}
</script>
