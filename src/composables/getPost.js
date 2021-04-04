import {ref} from 'vue'
import { projectFirestore } from '../firebase/config'

const getPost = (id) => {
    // fetching data
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
        try {
            // simulate delay
            /* await new Promise(resolve => {
                setTimeout(resolve, 2000)
            }) */

            /* let data = await fetch('http://localhost:3000/posts/' + id)

            if (!data.ok) {
                throw Error('no data available')
            }
            
            post.value = await data.json() */

            // attend la response du firestore.
            // appel get sur le doc choisi par le id
            let res = await projectFirestore.collection('posts').doc(id).get()

            if(!res.exists) {
                throw Error('That post does not exist')
            }
            // mets dans le value de post un objet avec le data de la response et le id
            post.value = {...res.data(), id: res.id}
        }

        catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return {post, error, load}
}

export default getPost