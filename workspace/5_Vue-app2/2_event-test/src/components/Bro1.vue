<template lang="">
    <div>
        <h1>잘 받아 브로~~</h1>
        <input type='text' v-model='data'>
        <button @click='sendData'>전송</button>
    </div>
</template>
<script>
export default {
    name : 'Bro1',
    data() {
        return {
            data : ''
        }
    },
    methods: {
        sendData(){
            this.emitter.emit('message', this.data);
        }
    },
}
</script>
<style lang="">
    
</style>