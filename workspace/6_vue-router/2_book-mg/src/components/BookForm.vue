<template lang="">
    <div>
        <from @submit.prevent="addBook">
            <input type="text" v-model="title" placeholder="title" required>
            <input type="text" v-model="autor" placeholder="Autor" required>
            <button type="submit">추가</button>
        </form>
    </div>
</template>
<script>
export default {
    name : 'BookForm'
    data() {
        return {
            title : '',
            autor : ''
        }
    },
    methods: {
        addBook(){
            let book = {
                title : this.title,
                autor : this.autor
            }
            this.emitter.emit('add', book)
            this.title = ''
            this.autor = ''
        }
    },
}
</script>
<style lang="">
    
</style>