<template>
  <div class="hello">
    <div class="row">
     
       <div class="col-md-3"></div>
      <div class="col-md-6">
      <div class="card" v-if="status=='published'">
      <div class="card-header">
        {{title}}
      </div>
      <div class="card-body">
        <h5 class="card-title">{{status}}</h5>
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
  name: 'Home',
  props: {
    id:Number,
    title:String,
    status:String,
    type:String
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
