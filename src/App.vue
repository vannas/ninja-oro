<template>
  <div id="app">
    <nav class="navbar"> 
      <img src="@/assets/img/goldbann.png" alt="player" id="banner">
    </nav>

    <img src="@/assets/img/goldbarr.png" alt="gold"><h3>Oro Ganado: {{golds}} </h3> 
    
    <ninjagold title="Granja" :min="10" :max="20" /> 
    <ninjagold title="Cueva" :min="5" :max="10" /> 
    <ninjagold title="Casa" :min="2" :max="5" /> 
    <ninjagold title="Casino" :min="-50" :max="50" /> 

    <h4 class="col-8">Actividades</h4>
    <div class="historia" >
    <ul>
      <li v-for="(evento, i) in eventos" v-bind:key="i"> {{evento}}</li>
    </ul>
    </div>
  </div>
</template>

<script>

import ninjagold from './components/ninjagold.vue'
import store from './store.js'

export default {
  name: 'App',
  components: {
    ninjagold
  },
  data: () => {
    return store.state
  }
}
</script>

<style >

 html, #app, .historia {
  background: rgb(241,202,2);
  background: radial-gradient(circle, rgba(241,202,2,1) 31%, rgba(250,255,122,1) 100%);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  
}

</style>
<style scoped>
h3 {
  margin: 10px 10px;
}
h4 {
  margin: 20px 200px;
}

img{
  max-width: 80px;
}

#banner{
  display:inline-block;
  position:fixed;
  margin-top:160px;
  max-width: 100px;

}

li {
	list-style: none;
	background-image: url('assets/img/adventurer.png');
	background-repeat: no-repeat;
	background-position: left center;
	background-size: 40px;
  padding: 20px 10px 2px 50px;
  margin-left: 12em;
  margin-top:0.8em;
  text-align: justify;
}
ul{
  list-style: none;
  margin-top:0.4em;  
}

.historia {  
  display:flexbox;
  flex-direction:column-reverse;
  overflow:auto;
  min-height:0px;
  margin-left: 13em;
  margin-top: 1em;
  height:80px;
  width:70%;
  border: 2px solid white;  
}

</style>