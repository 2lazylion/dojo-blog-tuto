
import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getPosts = () => {
    // fetching data
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            // simulate delay
            /* await new Promise(resolve => {
                setTimeout(resolve, 2000)
            }) */
            
            /* let data = await fetch('http://localhost:3000/posts')

            if (!data.ok) {
                throw Error('no data available')
            }

            posts.value = await data.json() */

            // attend la reponse du get sur la collection dans Firestore
            const res = await projectFirestore.collection('posts')
                .orderBy('createdAt', 'desc')
                .get()

            /* mets dans le value de posts les posts pris du des docs dans la response
            pour chacun des doc dans docs, retourne un object contenant
            les pair key: value du doc et son id vu que doc.data()
            ne retourne pas le id */
            posts.value = res.docs.map(doc => {
                // retourne un object
                return {...doc.data(), id: doc.id }
            })
        }

        catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return {posts, error, load}
}

export default getPosts