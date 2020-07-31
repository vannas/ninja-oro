<template>
  
  <div class="card col-sm-2">
    <div class="card-body">     
      <h5 class="card-title"> {{title}}</h5>
      <img img :src="require('@/assets/img/' + title + '.png')">
      <p class="card-text"> Gana entre {{min}} a {{max}} oros</p>
      <a href="#" class="btn btn-warning" @click="update_puntaje">Busca Oro!</a>
    </div>
  </div>
  
</template>

<script>

export default {
  name: 'ninjagold',
  props: {
    title: String,
    min: Number,
    max: Number,
  },
  methods: {
    update_puntaje(ev){
      ev.preventDefault();
      const ganaoro = Math.floor(Math.random() * (this.max - this.min)) + this.min;  //genero número al azar
      this.$store.commit("Puntaje", ganaoro)
    },
  }
}

</script>

<style scoped>

.card {
  display: inline-block;
  background-size: contain;
  color:#3c3b3f;
  margin: 0 10px;
  border-radius:10%;
}

.card img{
  max-width: 50px;
  height: auto;
}

a {
  color: #000000;
}
.btn:hover {
  background-color: rgb(243, 207, 166);
}
</style>
