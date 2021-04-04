<template>
  <h1>real-time data</h1>

  <!-- fetching data -->
  <div v-if="posts.length" class="layout">
    <PostList :posts="posts" />
    <TagCloud :posts="posts" />
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import { projectFirestore } from "../firebase/config";
import { ref } from "vue";
import PostList from '../components/PostList.vue'
import TagCloud from '../components/TagCloud.vue'

export default {
    components: { PostList, TagCloud },
  setup() {
    const posts = ref([]);

    projectFirestore
      .collection("posts")
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let docs = snap.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        console.log(docs);
        posts.value = docs;
      });

    return { posts };
  },
};
</script>

<style>
</style>