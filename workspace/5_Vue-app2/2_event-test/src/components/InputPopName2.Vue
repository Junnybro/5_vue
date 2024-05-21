<template lang="">
    <div>
        노래제목 : <input type='text' v-model='name'>
        <button @click="$emit('inputCompleted', {name})"> 이벤트 발신</button>
    </div>
</template>
<script>
export default {
    name : 'InputPopName',

    data() {
        return {
            name : ''
        }
    },
    methods: {
        checkName(){
            const checkType = typeof this.name === 'string';
            const checklen = this.name.trim().length >= 2;

            if(this.name && checkType && checkLen) {

            }
        }
    },
}
</script>
<style lang="">
    
</style>