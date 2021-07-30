<template>
    <div class="card text-center mt-4">
  <div class="card-header">
    Detail Pembeli
  </div>
  <div class="card-body">
    <h5 class="card-title">{{pembeli.nama_user}}</h5>
    <p class="card-text">{{pembeli.no_telp}}</p>
    <p class="card-text">{{pembeli.alamat}}</p>
  </div>
  <div class="card-footer">
    <router-link class="btn btn-success" :to="{name:'Editpembelis', params:{id:pembeli.id}}">Edit</router-link>
        <button @click.prevent="pembeliDelete(pembeli.id)" class="btn btn-danger">Delete</button>
  </div>
</div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
export default {
  setup() {
      let pembeli = ref([]);
    const router = useRouter();
    const route = useRoute()
    onMounted(()=>{
      axios.get(`http://127.0.0.1:8000/api/pembelis/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.nama);
        pembeli.value = response.data.data;
        
      }).catch(error =>{
        console.log(error.response.data);
      });
    });
    function pembeliDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/pembelis/${id}`)
      .then(()=>{
        router.go(-1);
      }).catch(error => {
        console.log(error)
      })
    }
    
    return {
      pembeli,
      router, 
      pembeliDelete,
      route
    }
  },
}
</script>
