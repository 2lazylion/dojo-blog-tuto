import { ref } from "@vue/reactivity"

const postPost = () => {
    // va contenir une erreur s'il y en a une et la retourner
    const error = ref(null)
    //console.log('postPost called')
    // fonction qui sera appeler. elle prend en entree
    // un 'post' et il va le charger dans la db
    const upload = async (post) => {
        console.log('upload called')
        console.log(post)
        
        await fetch('http://localhost:3000/posts',{
            method:'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(post)
        }).catch(err => {
            error.value = err.message
            console.log(error.value)
        })
        
    }

    return{ upload, error }
}

export default postPost