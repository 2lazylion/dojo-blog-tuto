import { ref } from 'vue'

const useTags = (posts) => {
    const tags = ref([])
    const tagSet = new Set()

    //pour chaque post
    posts.forEach(item => {
        // rajoute chacun des tags dans le Set. Un Set ne peut pas contenir de doublons
        // donc le Tous les tags seront unique dans le Set
        item.tags.forEach(tag => tagSet.add(tag))
    })

    // converti le Set de tag en array
    tags.value = [...tagSet]

    // retourne le array de tags
    return { tags }
}

export default useTags