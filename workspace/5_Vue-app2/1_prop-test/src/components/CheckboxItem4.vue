<template lang="">
    <input type='checkbox' :checked='user.checked'>{{user.number}} {{user.name}}
    <br>
</template>
<script>

import User from '../user.js';

    export default {
        name : 'CheckboxItem',
        props : {
            user : User
        }
    }
</script>
<style lang="">
    
</style>