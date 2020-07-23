<template>
  
  <div class="card col-sm-2">
    <div class="card-body">     
      <h5 class="card-title"> {{title}}</h5>
      <img img :src="require('@/assets/img/' + title + '.png')">
      <p class="card-text"> Gana entre {{min}} a {{max}} oros</p>
      <a href="#" class="btn btn-warning" @click="Puntaje">Busca Oro!</a>
    </div>
  </div>
  
</template>

<script>

import store from '@/store.js'

export default {
  name: 'ninjagold',
  props: {
    title: String,
    min: Number,
    max: Number,
  },
  methods: {
    Puntaje: function(event){
      event.preventDefault();
      const ganaoro = Math.floor(Math.random() * (this.max - this.min)) + this.min;  //genero número al azar
      let momento = hoy();
      function hoy() {
        var fecha= new Date();
        let dd=fecha.getDate();
        let mm=fecha.getMonth()+1;
        const yyyy=fecha.getFullYear();
        let hh=fecha.getHours();
        let min=fecha.getMinutes();

          if(dd<10){
            dd=`0${dd}`;
          }
          if(mm<10){
            mm=`0${mm}`;
          }
          if(min<10){
            min=`0${min}`;
          }
        fecha=`${dd}/${mm}/${yyyy} a las ${hh}:${min} horas`;
        return fecha
      }
      store.update_puntaje(ganaoro); // sumo oros
      if (ganaoro > 0){
        store.new_activity({texto:`Ganaste ${ganaoro} oros el ${momento}`, valor:ganaoro});  //genero actividad (ganancia)
        
      } else {
        if (ganaoro == '0'){
        store.new_activity({texto:`Sin suerte. No ganaste oro el ${momento}`, valor:ganaoro}); //Neutra
        } else if (ganaoro < '0'){
        store.new_activity({texto:`Cielos! Perdiste ${ganaoro} oros el ${momento}`, valor:ganaoro}); // Pierdo
        
        }
      }

      const historia = document.querySelector('.historia');
        historia.scrollTo(0, historia.scrollHeight);
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
