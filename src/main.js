import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex)

const store= new Vuex.Store({
  state: {
    golds: 0,
    eventos: []
  },
  
  mutations:{
    Puntaje(state, ganaoro){
      
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

      store.state.golds += ganaoro;
      
      function new_activity(actividad){
          return state.eventos = [...state.eventos, actividad];
      }

      if (ganaoro > 0){
        new_activity({texto:`Ganaste ${ganaoro} oros el ${momento}`, valor:ganaoro});  //genero actividad (ganancia)
      } else if (ganaoro == 0){
          new_activity({texto:`Sin suerte. No ganaste oro el ${momento}`, valor:ganaoro}); //Neutra
      } else{
          new_activity({texto:`Cielos! Perdiste ${ganaoro} oros el ${momento}`, valor:ganaoro}); // Pierdo
      }
      const historia = document.querySelector('.historia');
      historia.scrollTo(0, historia.scrollHeight);
    },  

    resetear_todo(state){
      var y=confirm("¿Verdaderamente quieres empezar de cero? Se borrará todo tu progreso");
      if(y==true){
        state.golds=0;
        state.eventos=[];
      }
      else return;
    }
  }
})

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
