<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Edit items</h5>
     <form class="row g-3" @submit.prevent="update">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">nama_barang</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="item.nama_barang" />
      <div class="alert alert-danger" v-if="validation.nama_barang">
        {{ validation.nama_barang[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">No Tlp</label>
    <input type="number" class="form-control" id="inputPassword4"
    v-model="item.merk"/>
    <div class="alert alert-danger" v-if="validation.merk">
        {{ validation.merk[0] }}
      </div>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">harga</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Masukkan harga"
    v-model="item.harga" />
    <div class="alert alert-danger" v-if="validation.harga">
        {{ validation.harga[0] }}
      </div>
  </div>
  
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Edit</button>
  </div>
</form>
  </div>
</div>
 
</template>
<script>
import { onMounted, ref } from 'vue';
import { reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
export default {
  setup() {
    const item = reactive({
      nama_barang: '',
      merk: '',
      harga: ''
    })
    const validation = ref([]);
    const router = useRouter();
    const route = useRoute()
    onMounted(()=>{
      axios.get(`http://127.0.0.1:8000/api/items/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.nama_barang)
        item.nama_barang = response.data.data.nama_barang
        item.merk = response.data.data.merk
        item.harga = response.data.data.harga
      }).catch(error =>{
        console.log(error.response.data)
      })
    })
    function update(){
      let nama_barang = item.nama_barang
      let merk = item.merk
      let harga = item.harga
      axios.put(`http://127.0.0.1:8000/api/items/${route.params.id}`, {
        nama_barang: nama_barang,
        merk: merk,
        harga: harga
      })
      .then(() => {
        router.push({
          name:'Home'
        })
      }).catch(error => {
        console.log(error)
      })
    }
    return {
      item,
      validation,
      router, 
      update,
      route
    }
  },
}
</script>