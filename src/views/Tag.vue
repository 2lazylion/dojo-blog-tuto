<template>
  <div class="contenu">
      <h1>#{{ tag  }}</h1>
      <!-- if error, show it -->
      <div v-if="error">
          <p> {{ error }} </p>
      </div>

      <!-- is filteredPost contient quelque chose afffiche la liste des postes -->
      <div v-if="filteredPosts.length">
          <PostList :posts="filteredPosts"/>
      </div>

      <!-- sinon, affiche le spinner-->
      <div v-else>
        <Spinner />
      </div>
  </div>
</template>

<script>
// les imports
import { computed } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import PostList from '../components/PostList.vue'
import Spinner from '../components/Spinner.vue'
import getPosts from '../composables/getPosts' 

export default {
    // la liste des components utilisees
    components: { PostList, Spinner },
    setup() {
        // obtient le route
        const route = useRoute()

        // obtient le tag dans le route
        const tag = route.params.tag

        // appel la methode getPosts et conserve son retour
        // dans des const
        const {posts, error, load} = getPosts()

        // appel la methode laod pour qu'elle load les posts
        load()

        // computed fonction qui retourne les posts contenant le tag choisis 
        const filteredPosts = computed(() => {
            return posts.value.filter( (post) => {
                return post.tags.includes(tag)
            })
        })

        // retourne ce qui sera utiliser dans le template
        return { tag, filteredPosts, error }
    }
}
</script>

<style>
.filteredTags {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>