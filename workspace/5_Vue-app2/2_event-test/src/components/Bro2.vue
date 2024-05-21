<template lang="">
    <div>
        <h1>받았어 브로~~</h1>
        <h3>받은 데이터 : {{gotData}}</h3>
    </div>
</template>
<script>
export default {
    name : 'Bro2',

    created() {
        this.emitter.on('sendData', this.handler)
    },

    data() {
        return {
            gotData : ''
        }
    },
    methods: {
        handler(){
            this.gotData = data;
        }
    },
}
</script>
<style lang="">
    
</style>