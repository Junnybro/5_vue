<template lang="">
  <div>
    <InputPopName @inputCompleted='changeHandler' />
  </div>

  <h3>수신 결과 : {{popName}}</h3>

</template>
<script>
import InputPopName from './components/InputPopName2.Vue';

export default {
  name : 'App',
  components : {InputPopName},

  data() {
    return {
      popName : ''
    }
  },

  methods: {
    changeHandler(e){
      this.popName = e.name;
    }
  },
}
</script>
<style lang="">
  
</style>