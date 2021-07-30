<template>
<div class="row">
    <div class="col-lg-4 mt-3" v-for="(kategori, index) in kategoris" :key="index">
<div class="card">
  <div class="card-header">{{kategori.name}}</div>
  <div class="card-body">
    <h5 class="card-title">{{kategori.description}}</h5>
  </div>
  <div class="card-footer text-muted">
    <router-link class="btn btn-primary" :to="{name:'Detailkategoris', params:{id:kategori.id}}">Detail</router-link>
  </div>
</div>
</div>
</div>
</template>

<script>
export default {
    props: ["kategoris"],
};
</script>
