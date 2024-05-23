<template lang="">
    <h1>책 목록</h1>
    <div>
        <ul>
            <li v-for="book in books" :key='book.id'>
                <p>{{book.title}}</p>
                <hr>
                <p>{{book.autor}}</p>
                <br>
                <button @click></button>
            </li>
        </ul>
    </div>
</template>
<script>
let i = 2;

export default {
    name : 'BookList',

    created(){
        emitter.on('add', this.addBook)
    },

    data() {
        return {
            books : []
        }
    },
    methods: {
        addBook(book){
            let newBook = {id : i++, title : book.title, autor : book.autor}
            this.books.push(newBook)
            this.saveBook()
        },

        removeBook(id){
            this.books = this.books.filter(book => book.id != id)
            this.saveBook()
        }

        // 로컬 스토리지에 저장!
        saveBook(){
            localStorage.SetItem('books', JSON.stringify(this.books))
        },
        localBook(){
            this.books = JSON.parse
        }
    },
}
</script>
<style lang="">
    
</style>