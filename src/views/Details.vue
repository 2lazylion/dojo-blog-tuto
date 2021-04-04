<template>
<div class="contenu">
    <h1> details </h1>

  <!-- Si erreur -->
  <div v-if="error">
      {{ error }}
  </div>

    <!-- Si le post existe -->
  <div v-if="post" class="post">
      <h3>{{ post.title }}</h3>
      <p class="pre">{{ post.body }}</p>
      <button @click="handleDelete" class="delete">delete post</button>
  </div>

    <!-- Si le post n'a pas encore ete fetch -->
  <div v-else>
      <Spinner />
  </div>
</div>
  
</template>

<script>
import  getPost  from '../composables/getPost'
import Spinner from '../components/Spinner.vue'
import { projectFirestore } from '../firebase/config'
import { useRoute, useRouter } from 'vue-router'

export default {
    components: {
        Spinner
    },
    props: ['id'],
    setup(props) {
        // route va conserver les infos du route
        const route = useRoute()

        // router va etre utiliser pour redirect vers le homepage
        const router = useRouter()

        // la fonction getPost() du dossier composables
        const {post, error, load} = getPost(route.params.id)
        
        // try de loader le post
        try{
            load()
        }
        catch(err) {
            console.log(err)
            let error = err
        }
        
        // handleDelete va delete le post du db
        const handleDelete = async () => {
            await projectFirestore.collection('posts')
                .doc(props.id)
                .delete()

            router.push({ name: 'Home' })
        }
     
        return { post, error, handleDelete }
    }
}
</script>

<style>
    .post {
        max-width: 1200px;
        margin: 0 auto;
    }

    .post p {
        color: #444;
        line-height: 1.5em;
        margin-top: 40px;
    }

    .pre {
        white-space: pre-wrap;
    }

    button.delete {
        margin: 10px auto;
    }
</style>