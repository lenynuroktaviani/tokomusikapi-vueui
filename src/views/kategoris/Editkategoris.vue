<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Edit kategoriss</h5>
     <form class="row g-3" @submit.prevent="update">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">name</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="kategoris.name" />
      <div class="alert alert-danger" v-if="validation.name">
        {{ validation.name[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Description</label>
    <input type="number" class="form-control" id="inputPassword4"
    v-model="kategoris.description"/>
    <div class="alert alert-danger" v-if="validation.description">
        {{ validation.description[0] }}
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
    const kategoris = reactive({
      name: '',
      description: ''
    })
    const validation = ref([]);
    const router = useRouter();
    const route = useRoute()
    onMounted(()=>{
      axios.get(`http://127.0.0.1:8000/api/kategoriss/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.name)
        kategoris.name = response.data.data.name
        kategoris.description = response.data.data.description
      }).catch(error =>{
        console.log(error.response.data)
      })
    })
    function update(){
      let name = kategoris.name
      let description = kategoris.description
      axios.put(`http://127.0.0.1:8000/api/kategoriss/${route.params.id}`, {
        name: name,
        description: description
      })
      .then(() => {
        router.push({
          name:'Kategoris'
        })
      }).catch(error => {
        console.log(error)
      })
    }
    return {
      kategoris,
      validation,
      router, 
      update,
      route
    }
  },
}
</script>