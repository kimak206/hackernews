<template>
<div>
  
  <div class="container">
    <ul>
      <li v-for="(item,index) in itemdata" v-bind:key='index'>
        <div class="title">
            {{ index+1 }}.  <a class="title">{{ item.title }}</a>
        </div>
        
        <div class="subtitle">
          {{ item.score }} points by '{{ item.by }}' | <div class="subtitle-comment">{{ item.descendants }} Comments</div>
        </div>
      </li>
    </ul>
  </div>

  
</div>

</template>

<script>
// @ is an alias to /src
import axios from 'axios'

const baseApi = 'https://hacker-news.firebaseio.com/v0/';

export default {
  name: 'Home',
  data() {
    return {
      itemdata:[],
    }
  },  
  mounted() {
    this.getNewAsk();
  },
  methods: {
    getNewAsk() {
      axios.get(baseApi + 'askstories.json')
      .then(response => {
      var newlist = response.data;
      // console.log(this.list)
      for(var i=0; i < 50; i++) {

        axios.get(baseApi + 'item/' + newlist[i] + '.json')
        .then(response => {
          if( response.data.title !== null ) {
            this.itemdata.push(response.data);

          }
      }).catch(error => console.log(error))
      }
       
    })
    }
}
}
</script>
