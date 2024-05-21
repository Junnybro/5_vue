<template lang="">
    <input type='checkbox' :checked='checked'>{{number}} {{name}}
    <br>
</template>
<script>
    export default {
        name : 'CheckboxItem',
        props : ['name', 'checked', 'number']
    }
</script>
<style lang="">
    
</style>