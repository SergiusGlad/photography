app = new Vue ({
    el: '#app',
    data() {
      return {
        search: '',
        todos: [],
        currentPage: 1,
      };
    },
    computed: {
      todosByTitle() {
        return this.todos.filter(item => item.keywords.toLowerCase().indexOf(this.search.toLowerCase()) !== -1)
      },
      todosByShow() {
        return this.todosByTitle.slice(0, this.currentPage * 7);
      },
      totalPages() {
        return Math.ceil( this.todosByTitle.length / 7);
      }
    },
    methods: {
      nextPage(){
        if(this.currentPage < this.totalPages) this.currentPage++
      },
    },
    beforeMount() {
      fetch('../tech-document.json')
        .then(response => response.json())
        .then(json => {
          this.todos = json;
        })
    }
    
  })