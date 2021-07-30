<template>
<div class="row">
    <div class="col-lg-4 mt-3" v-for="(pembeli, index) in pembelis" :key="index">
<div class="card">
  <div class="card-header">{{pembeli.nama_user}}</div>
  <div class="card-body">
    <h5 class="card-title">{{pembeli.no_telp}}</h5>
    <p class="card-text">{{pembeli.alamat}}</p>
  </div>
  <div class="card-footer text-muted">
    <router-link class="btn btn-primary" :to="{name:'Detailpembelis', params:{id:pembeli.id}}">Detail</router-link>
  </div>
</div>
</div>
</div>
</template>

<script>
export default {
    props: ["pembelis"],
};
</script>
