<template lang="">
    <input type='checkbox' :checked='checked'>{{number}} {{name}}
    <br>
</template>
<script>
    export default {
        name : 'CheckboxItem',
        props : {
            number : [Number, String],
            name : {
                type : String,
                required : true
            },
            checked : {
                type : Boolean,
                required : true
            }
        }
    }
</script>
<style lang="">
    
</style>