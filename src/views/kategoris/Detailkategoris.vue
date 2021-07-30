<template>
    <div class="card text-center mt-4">
  <div class="card-header">
    Detail kategori
  </div>
  <div class="card-body">
    <h5 class="card-title">{{kategori.name}}</h5>
    <p class="card-text">{{kategori.description}}</p>
  </div>
  <div class="card-footer">
    <router-link class="btn btn-success" :to="{name:'Editkategoris', params:{id:kategori.id}}">Edit</router-link>
        <button @click.prevent="kategoriDelete(kategori.id)" class="btn btn-danger">Delete</button>
  </div>
</div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
export default {
  setup() {
      let kategori = ref([]);
    const router = useRouter();
    const route = useRoute()
    onMounted(()=>{
      axios.get(`http://127.0.0.1:8000/api/kategoris/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.nama);
        kategori.value = response.data.data;
        
      }).catch(error =>{
        console.log(error.response.data);
      });
    });
    function kategoriDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/kategoris/${id}`)
      .then(()=>{
        router.go(-1);
      }).catch(error => {
        console.log(error)
      })
    }
    
    return {
      kategori,
      router, 
      kategoriDelete,
      route
    }
  },
}
</script>
