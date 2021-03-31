<template>
  <div class="contenu">
    <h1>Home</h1>

    <!-- fetching data -->
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="posts.length" class="layout">
      <PostList v-if="showPosts" :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
    
    <br>
    <button @click="showPosts = !showPosts">toggle posts</button>
    <button @click="posts.pop()">delete a post</button>
    <!-- <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update ninja one</button>
    
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update ninja two</button>
    
    <br>
    <br>
    <input type="text" v-model="search" >
    
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>

    <button @click="stopWatches">stop watching</button>
    <p ref="p">My name is {{ ninjaOne.name }} and my age is {{ ninjaOne.age }}</p>
    <button @click="handleClick">click me</button>
    <button @click="age++"> add 1 to age</button>
    <input type="text" v-model="name"> -->
 </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPosts'
import Spinner from '../components/Spinner.vue'
import TagCloud from '../components/TagCloud.vue'
import { ref, reactive, computed, watch, watchEffect } from 'vue'

export default {
  name: 'Home',
  components: { PostList, Spinner, TagCloud },
  setup() {
    const {posts, error, load} = getPosts()

    load()
    
    const showPosts = ref(true)

    
    return { 
      posts, showPosts, error
    }


    /* const names = ref(['mario', 'luigi', 'peach', 'bowser'])
    const search = ref('')
    const matchingNames = computed(() => {
      return names.value.filter(name => name.includes(search.value))
    })
    
    const ninjaOne = ref({ name: 'Mario', age: 30 })
    const ninjaTwo = reactive({ name: 'Luigi', age: 29 })
    
    const stopWatch = watch(search, () => {
      console.log('watch function run')
    })

    const stopEffect = watchEffect(() => {
      console.log('watchEffect function ran', search.value)
    })

    const updateNinjaOne = () => {
      ninjaOne.value.age++
    }
    
    const updateNinjaTwo = () => {
      ninjaTwo.age++
    }
    */

    /* const updateSearch = () => {
      console.log(search.value)
      filteredNames.value = names.value.filter(name => name === search.value)
    } */

    /* const stopWatches = () => {
      stopWatch()
      stopEffect()
    } */

    /* const handleClick = () => {
      console.log(p, p.value)
      p.value.classList.add('test')
      p.value.textContent = 'hello, ninjas' */
      /* name.value = 'Luigi'
      age.value = 25
    } */

   /*  return {
      ninjaOne, ninjaTwo, updateNinjaOne, 
      updateNinjaTwo, names, search, matchingNames, stopWatches
    } */
  }
  
}
</script>

<style >
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}

</style>