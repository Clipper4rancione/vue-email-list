/*
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
*/

const { createApp } = Vue;

createApp({
    data(){
        return{
            emails: ['','','','','','','','','','',],
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
            isLoaded: false
        }
    },
    methods:{
        getApi(){
            this.isLoaded = false;
            for(let i = 0; i < this.emails.length; i++){
                axios.get(this.apiUrl)
                .then( result =>{
                    this.emails[i] = result.data.response;
                    console.log(this.emails);
                    this.isLoaded = true;
                    
                })     
            
            }
        }
    },
    mounted(){
        this.getApi();
    }

}).mount('#app')