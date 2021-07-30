<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Add items</h5>
     <form class="row g-3" @submit.prevent="store">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">nama barang</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="item.nama_barang" />
      <div class="alert alert-danger" v-if="validation.nama_barang">
        {{ validation.nama_barang[0] }}
      </div>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">merk</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Masukkan merk"
    v-model="item.merk" />
    <div class="alert alert-danger" v-if="validation.merk">
        {{ validation.merk[0] }}
      </div>
       </div>
      <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Harga</label>
    <input type="number" class="form-control" id="inputPassword4"
    v-model="item.harga"/>
    <div class="alert alert-danger" v-if="validation.harga">
        {{ validation.harga[0] }}
      </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Add</button>
  </div>
</form>
  </div>
</div>
 
</template>
<script>
import { ref } from 'vue';
import { reactive } from 'vue';
import { useRouter } from 'vue-router'
import axios from 'axios'
export default {
  setup() {
    const item = reactive({
      nama_barang: '',
      merk: '',
      harga: ''
    })
    const validation = ref([])
    const router = useRouter()
    function store(){
      let nama_barang = item.nama_barang
      let merk = item.merk
      let harga = item.harga
      axios.post('http://127.0.0.1:8000/api/items', {
        nama_barang: nama_barang,
        merk: merk,
        harga: harga
      }).then(() => {
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
      store
    }
  },
}
</script>