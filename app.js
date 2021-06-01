const app = Vue.createApp({
    //date, functions
   /*  template: '<h2>I am the template</h2>' */

   data(){
       return {
           showBooks: true,
           title: 'The Final Empire',
           author: 'Gamze Umac',
           age: 31,
           x: 0,
           y: 0
       }
   },
   methods: {
    toggleShowBooks() {
      this.showBooks =  !this.showBooks
    },
    handleEvent(e, data) {
      console.log(e.type, e)
      if (data) {
        console.log(data)
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    }
  }
})

app.mount('#app')
