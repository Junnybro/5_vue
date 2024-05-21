<template lang="">
    <div>
        노래제목 : <input type='text' v-model='name'>
        <button @click='$emit('inputCompleted')'> 
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>