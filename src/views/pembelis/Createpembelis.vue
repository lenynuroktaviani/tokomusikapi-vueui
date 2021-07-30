<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Tambah Data Pembeli</h5>
     <form class="row g-3" @submit.prevent="store">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Nama User</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="pembelis.nama_user" />
      <div class="alert alert-danger" v-if="validation.nama_user">
        {{ validation.nama_user[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">No Telepon</label>
    <input type="text" class="form-control" id="inputPassword4"
    v-model="pembelis.no_tlp"/>
    <div class="alert alert-danger" v-if="validation.no_tlp">
        {{ validation.no_tlp[0] }}
      </div>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">alamat</label>
    <input type="text" class="form-control" id="inputAddress" 
    v-model="pembelis.alamat" />
    <div class="alert alert-danger" v-if="validation.alamat">
        {{ validation.alamat[0] }}
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
    const pembelis = reactive({
      nama_user: '',
      no_tlp: '',
      alamat: ''
      
    })
    const validation = ref([])
    const router = useRouter()
    function store(){
      let nama_user = pembelis.nama_user
      let no_tlp = pembelis.no_tlp
      let alamat = pembelis.alamat
      axios.post('http://127.0.0.1:8000/api/pembelis', {
        nama_user: nama_user,
        no_tlp: no_tlp,
        alamat: alamat
        
      }).then(() => {
        router.push({
          name:'pembeli'
        })
      }).catch(error => {
        console.log(error)
      })
    }
    return {
      pembelis,
      validation,
      router, 
      store
    }
  },
}
</script>