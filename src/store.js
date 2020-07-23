export default {

    state: {
        golds: 0,
        eventos: []
    },
    update_puntaje(ganaoro){
        this.state.golds += ganaoro;
    },
    new_activity(actividad){
        this.state.eventos = [...this.state.eventos, actividad];
    },
    
}


