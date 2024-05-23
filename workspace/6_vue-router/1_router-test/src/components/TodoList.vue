<template lang="">
    <div class="row">
        <div class="col">
            <ul class="list-group">
                <Item v-for='item in todoList' :key='item.id'
                 :item='item' />
            </ul>
        </div>
    </div>
</template>
<script>
import Item from './Item.vue'

export default {
    name : 'TodoList',
    components : {Item},
    props : {
        todoList : {
            type : Array,
            required : true
        }
    }

};
</script>
<style lang=""></style>