<template lang="">
    <li
        class="list-group-item"
        :class="{ 'list-group-item-success': item.completed }"
    >
        <span
            class="pointer"
            :class="item.completed ? 'todo-done' : ''"
            @click="emitter.emit('toggle', item.id)"
            >{{ item.plan }} {{ item.completed ? "(완료)" : "" }}</span
        >
        <span
            class="float-end badge bg-secondary pointer"
            @click="emitter.emit('delete', item.id)"
            >삭제</span
        >
    </li>
</template>
<script>
export default {
    name : 'Item',
    props : {
        item : {
            type : Object,
            required : true
        }
    }
};
</script>
<style lang=""></style>