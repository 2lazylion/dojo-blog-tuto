<template>
  <h1> details </h1>

  <!-- Si erreur -->
  <div v-if="error">
      {{ error }}
  </div>

    <!-- Si le post existe -->
  <div v-if="post" class="post">
      <h3>{{ post.title }}</h3>
      <p class="pre">{{ post.body }}</p>
  </div>

    <!-- Si le post n'a pas encore ete fetch -->
  <div v-else>
      Loading...
  </div>
</template>

<script>
import  getPost  from '../composables/getPost';

export default {
    props: ['id'],
    setup(props) {
        try{
            const {post, error, load} = getPost(props.id)

            load()

            return {post, error}
        }
        catch(err) {
            console.log(err)
            let error = err
            return { error }
        }
        
        

        
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
</style>