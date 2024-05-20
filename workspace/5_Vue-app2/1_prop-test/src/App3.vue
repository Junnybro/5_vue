<template lang="">
  <h1>유저 정보 조회</h1>
</template>
<script>
import CheckboxItem from './components/CheckboxItem3.vue';

export default {
    name : 'App3',
    components : {CheckboxItem}

    data() {
      return {
        user : [
          { number : 1, name:'조용준', checked : true},
          { number : 2, name:'홍길동'},
          { number : 3, name:'성춘향'},
          { number : 4, name:'도라에몽', checked : true}
        ]
      }
    },
}
</script>
<style lang="">
  
</style>