const app = Vue.createApp({
    //date, functions
   /*  template: '<h2>I am the template</h2>' */

   data(){
       return {
           showBooks: true,
           title: 'The Final Empire',
           author: 'Gamze Umac',
           age: 31
       }
   },
   methods: {
    toggleShowBooks() {
        this.showBooks = !this.showBooks
    }
   }
})

app.mount('#app')