<template>
<div>
  <div class="container">
    <ol>
      <li v-for="(item,index) in itemdata" v-bind:key='index'>
        <div class="title">
          {{ item.title }}
        </div>
        <div class="subtitle">
          {{ item.score }} points by {{ item.by }}
        </div>
      </li>
    </ol>
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
      list:'',
      itemdata:[],
      stories:'',
    }
  },
  created() {
    this.getNewStories();

  },
  methods: {
    getNewStories() {
      axios.get(baseApi + 'newstories.json')
      .then(response => {
      this.list = response.data;
      console.log(this.list)
      var newlist = this.list;
      
      for(var i=0; i < newlist.length; i++) {

        axios.get(baseApi + 'item/' + newlist[i] + '.json')
        .then(response => {
        this.itemdata.push(response.data);
      })
      }
       
    })
    }
}
}
</script>
