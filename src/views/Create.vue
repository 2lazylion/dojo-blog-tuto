<template>
  <form class="create" @submit.prevent="handleSubmit">
      <label >Title:</label>
      <input v-model="title" type="text" required>
      <label for="">Content:</label>
      <textarea v-model="body" required></textarea>
      <label for="">Tags (hit enter to add a tag)</label>
      <input v-model="tag" @keydown.enter.prevent="handleKeyDown" type="text">
      <div v-for="tag in tags" :key="tag" class="pill">
        #{{ tag }}
      </div>
      <button >Add Post</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { timestamp } from '../firebase/config'
import postPost from '../composables/postPost'

export default {
    setup() {
        const title = ref('')
        const body = ref('')
        const tag = ref('')
        const tags = ref([])
        
        const router = useRouter()

        const{ upload, error } = postPost()

        const handleSubmit = async () => {
            console.log('handleSubmit called')
            const post = {
                title: title.value, 
                body: body.value,
                tags: tags.value,
                createdAt: timestamp()
                }
            
            upload(post)

            router.push({name: 'Home'})
            console.log(error.message)
        }

        const handleKeyDown = () => {
            // si le array des tags ne contient pas le tag soumis
            if(!tags.value.includes(tag.value)) {
                // enleve les whitespaces
                tag.value = tag.value.replace(/\s/, '')
                tags.value.push(tag.value)
            }

            tag.value = ''
        }

        
        return { title, body, tag, tags, handleKeyDown, handleSubmit }
    }
}
</script>

<style>
form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
  }
  input, textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #eee;
  }
  textarea {
    height: 160px;
  }
  label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
  }
  label::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1.5deg);
  }
  button {
    display: block;
    margin-top: 30px;
    background: #ff8800;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px
  }
  .pill {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
  }
</style>