<template>
  <Navbar />
  <router-view/>
</template>

<script>
import  Navbar  from './components/Navbar.vue'

export default ({
  components: { Navbar },
  setup() {
    
  }
})
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.contenu {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
