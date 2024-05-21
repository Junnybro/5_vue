<template lang="">
    <input type='checkbox' :checked='user.checked'>{{user.number}}-{{user.name}}
    <br>
</template>
<script>
    export default {
        name : 'CheckboxItem2',
        props : ['user']
    }
</script>
<style lang="">
    
</style>