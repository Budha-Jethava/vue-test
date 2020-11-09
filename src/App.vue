<template>
  <div id="app">
    PUblished Article
  <Home v-for="(data, index) in apiData" :key="`article-${index}`" 
    :id="data.id" 
    :title="data.title"
    :status="data.status"
    ></Home>
    <br/>
All Article
     <Articles v-for="(data, index) in apiData" :key="`article-${index}`" 
    :id="data.id" 
    :title="data.title"
    :status="data.status"
    ></Articles>

  </div>
</template>

<script>
import Articles from './components/Articles.vue'
import Home from './components/Home.vue'
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Home,
    Articles
      },
  data () {
    return {
      apiData:'',
      apiUrl:'https://strapi.lakritsroten.se/articles'
    }
  },
  mounted: function(){
     if (localStorage.getItem('apiData')) {
        this.apiData = JSON.parse(localStorage.getItem('apiData'));
     }else{
        axios.get(this.apiUrl).then((response) => {
          localStorage.setItem('apiData', JSON.stringify(response.data));
          this.apiData = JSON.parse(localStorage.getItem('apiData'));
        })
     }
  },
  methods: {

  },
  computed: {

  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
