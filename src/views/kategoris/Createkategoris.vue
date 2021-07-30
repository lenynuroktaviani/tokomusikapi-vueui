<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Add kategoris</h5>
     <form class="row g-3" @submit.prevent="store">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">name</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="kategori.name" />
      <div class="alert alert-danger" v-if="validation.name">
        {{ validation.name[0] }}
      </div>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">description</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Masukkan description"
    v-model="kategori.description" />
    <div class="alert alert-danger" v-if="validation.description">
        {{ validation.description[0] }}
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
    const kategori = reactive({
      name: '',
      description: '',
    })
    const validation = ref([])
    const router = useRouter()
    function store(){
      let name = kategori.name
      let description = kategori.description
      axios.post('http://127.0.0.1:8000/api/kategoris', {
        name: name,
        description: description,
      }).then(() => {
        router.push({
          name:'Kategoris'
        })
      }).catch(error => {
        console.log(error)
      })
    }
    return {
      kategori,
      validation,
      router, 
      store
    }
  },
}
</script>