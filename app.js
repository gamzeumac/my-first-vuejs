const app = Vue.createApp({
    //date, functions
   /*  template: '<h2>I am the template</h2>' */

   data(){
       return {
           title: 'The Final Empire',
           author: 'Gamze Umac',
           age: 31
       }
   },
   methods: {
       changeTitle(title){
           /* this.title = 'Word of Randiance' */

           this.title = title
       }
   }
})

app.mount('#app')