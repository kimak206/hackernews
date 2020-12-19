<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">New</router-link> 
      <router-link to="/comment">Comment</router-link>
      <router-link to="/ask">Ask</router-link>
      <router-link to="/how">How</router-link>
      <router-link to="/show">Show</router-link>
      <router-link to="/jobs">Jobs</router-link>
      <router-link to="/submit">Submit</router-link>
    </div>
    <router-view/>
  </div>
</template>


<script>


export default {
  name: 'app'
}
</script>
