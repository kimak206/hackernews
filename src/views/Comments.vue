<template>
<div>
  <div class="container">
    <ul>
      <li class="w-listtyle" v-for="(item,index) in itemdata" v-bind:key='index'>
        <div class="comment-subtitle">
          {{ item.by }} {{ item.time }} | on: comment parent
        </div>
        <div v-html="item.text" class="title-comment"></div>
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
    this.getComments(); //try to get last 50 comments
    this.timeStamp();
  },
  methods: {
    getComments() {
      axios.get(baseApi + 'maxitem.json')
        .then(response => {
        var maxitem = response.data;
        // console.log(maxitem);
        for(var i=maxitem; i > (maxitem - 40); i--) {
        // console.log(i);
          axios.get(baseApi + 'item/' + i + '.json')
          .then(response => {
            var comments = response.data.type;
            var items = response.data;
            if( comments == "comment" ) {
              this.itemdata.push(items);
            }
          })
        }
    })
    },
    timeStamp() {
      const currentTime = new Date().getTime();
      console.log(currentTime);
    }
  }   
}
</script>
