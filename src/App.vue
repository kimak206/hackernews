<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">New</router-link> 
      <router-link to="Comments">Comment</router-link>
      <router-link to="Ask">Ask</router-link>
      <router-link to="Show">Show</router-link>
      <router-link to="Jobs">Jobs</router-link>
    </div>
    <router-view/>
  </div>
</template>


<script>


export default {
  name: 'app'
}
</script>
