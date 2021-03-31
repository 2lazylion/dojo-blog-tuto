<template>
  <Navbar />
  <!-- :key="$route.fullPath" va remount a chaque fois qu'un composant est remount. Pratique pour le view Tag -->
  <router-view :key="$route.fullPath"/>
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

.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
