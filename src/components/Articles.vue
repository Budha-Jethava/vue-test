<template>
  <div class="hello">
    <div class="row">
       <div class="col-md-3"></div>
      <div class="col-md-6" >
      <div class="card" v-for="(data, index) in apiData" :key="`article-${index}`">
      <div class="card-header">
        {{data.title}}
      </div>
      <div class="card-body">
        <h5 class="card-title">{{data.status}}</h5>
      </div>
       </div>
</div>
 <div class="col-md-3"></div>
    </div>
    
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: 'Articles',
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
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
