<template>
  <div>
    <div class="row">row 1</div>
    <div class="row">row 2</div>
    <div class="row">row 3</div>
    <form>
      <div class="row">
        <input type="text" >
      </div>
      <div class="row">
        <button type='button' class='bt btn-primary'  @mouseup="searchYelp" >Search</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Search',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      term: '',
      zip: '',
      radius: '',
      limit:10
    }
  }, methods: {
        searchYelp() {
          axios.get("http://whereforlunch.herokuapp.com/api/search?zip=07927&term=food&limit=3")
              .then((response)  =>  {
                console.log(response.data.value);
                //this.jokes = response.data.value;
              }, (error)  =>  {
                console.log(error);
              })          
        },
        signOut() {

        }
    }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
