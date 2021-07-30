<template>
  <div class="kategoris">
    <!--<img alt="Vue logo" src="../assets/logo.png"> -->
    <Slider />
    <hr class="my-3">
      <router-link class="btn btn-primary" to="/createkategoris">Add kategori</router-link>

      <Cardkategoris :kategoris="kategoris" />

    <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Aksi</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(kategori, index) in kategoris" :key="index">
      <td>{{ kategori.name }}</td>
      <td>{{ kategori.description }}</td>
      <td>
        <router-link class="btn btn-success" :to="{name:'Editkategoris', params:{id:kategori.id}}">Edit</router-link>
        <button @click.prevent="kategoriDelete(kategori.id)" class="btn btn-danger">Delete</button>
      </td>
    </tr>
  </tbody>
</table>
  </div>
</template>
<script>
import axios from 'axios'
// @ is an alias to /src
import Slider from "@/components/Slider.vue";
import Cardkategoris from "@/components/Cardkategoris.vue";
import { ref, onMounted } from 'vue';
export default {
  name: "Kategoris",
  components: {
    Slider,
    Cardkategoris,
  },
  setup(){
    let kategoris = ref([])
    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/kategoris')
      .then(response => {
        kategoris.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })
    function kategoriDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/kategoris/${id}`)
      .then(()=>{
        let z = this.kategoris.map(kategoris => kategoris.id).indexOf(id);
        this.kategoris.splice(z, 1)
      }).catch(error => {
        console.log(error)
      })
    }
      return {
      kategoris,
      kategoriDelete
    }
  }
};
</script>