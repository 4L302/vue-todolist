/*
Fare una lista della spesa per Pasquetta, 
inserire un campo di input dove poter 
inserire gli elementi della spesa,
aggiungere un btn per invio elementi,
per ogni elemento della lista aggiungere un btn canc
e un btn conferma e un btn con spunta.
*/

const { createApp } = Vue;

createApp({
    data(){
        return{
            listaSpesa: 
            [
                'pane', 'acqua', 'uova', 'latte'
            ],
            text: ''

        }
    },
    methods: {
        inserisci(){
            this.listaSpesa.push(this.text)
        },
        deleteList(index){
            this.lista.splice(index, 1)
        }
    }
}).mount('#app')