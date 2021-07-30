<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Edit Pembeli</h5>
     <form class="row g-3" @submit.prevent="update">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Tanggal Pembelian</label>
    <input type="time" class="form-control" id="inputEmail4" 
    v-model="pembelis.waktu_pembeli" />
      <div class="alert alert-danger" v-if="validation.waktu_pembeli">
        {{ validation.waktu_pembeli[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Nama User</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="pembelis.nama_user" />
      <div class="alert alert-danger" v-if="validation.nama_user">
        {{ validation.nama_user[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Nama Matakuliah</label>
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
    const pembelis = reactive({
      waktu_pembeli: '',
      nama_user: '',
      no_tlp: '',
      alamat: ''
    })
    const validation = ref([]);
    const router = useRouter();
    const route = useRoute()
    onMounted(()=>{
      axios.get(`http://127.0.0.1:8001/api/pembelis/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.nama_user)
        pembelis.waktu_pembeli = response.data.data.waktu_pembeli
        pembelis.nama_user = response.data.data.nama_user
        pembelis.no_tlp = response.data.data.no_tlp
        pembelis.alamat = response.data.data.alamat
      }).catch(error =>{
        console.log(error.response.data)
      })
    })
    function update(){
      let waktu_pembeli = pembelis.waktu_pembeli
      let nama_user = pembelis.nama_user
      let no_tlp = pembelis.no_tlp
      let alamat = pembelis.alamat
      axios.put(`http://127.0.0.1:8001/api/pembelis/${route.params.id}`, {
        waktu_pembeli: waktu_pembeli,
        nama_user: nama_user,
        no_tlp: no_tlp,
        alamat: alamat
      })
      .then(() => {
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
      update,
      route
    }
  },
}
</script>