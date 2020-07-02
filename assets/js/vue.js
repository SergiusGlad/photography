app = new Vue ({
  el: '#app',
  data() {
    return {
      search: '',
      todos: [],
      currentPage: 1,
      catalogLists: [
        {
          link: 'https://www.elmeh.ru/catalog/railway-transport/?view=catalog',
          name: 'Продукция для железнодорожного транспорта'
        },
        {
          link: 'https://www.elmeh.ru/catalog/traffic-control/?view=catalog',
          name: 'Средства регулирования дорожного движения'
        },
        {
          link: 'https://www.elmeh.ru/catalog/traffic-control/?view=catalog',
          name: 'Прочая продукция'
        },
        {
          link: 'https://www.elmeh.ru/catalog/previous-products/?view=catalog',
          name: 'Снятая с производства продукция'
        },
        {
          link: 'https://www.elmeh.ru/catalog/Illiquid-assets/?view=catalog',
          name: 'Неликвиды'
        }
      ],
      specialists: [
        {
          napr: 'Продукция для ж/д транспорта',
          name: 'Венц Роман Владимирович',
          phone: '+7 (8412) 209-077',
          mail: 'orpgt1@elmeh.ru'
        },
        {
          napr: 'Продукция для управления дорожным движением',
          name: 'Бирюченко Борис Викторович',
          phone: '+7 (8412) 204-993',
          mail: 'biriuchenkobv@elmeh.ru'
        }
      ]
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