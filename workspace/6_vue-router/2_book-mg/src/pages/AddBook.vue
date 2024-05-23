<template lang="">
    <div>
        <h1>책 추가하기</h1>
        <br>
        <BookForm />
    </div>
</template>
<script>
import BookForm from '@/components/BookForm.vue'

export default {
    name : 'AddBook',
    components : {BookForm}
}
</script>
<style lang="">
    
</style>