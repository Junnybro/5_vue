<template lang="">
  <div>
    <Bro1 />
    <br>
    <br>
    <br>
    <Bro2 />
  </div>

  <h3>수신 결과 : {{popName}}</h3>

</template>
<script>
import Bro1 from './components/Bro1.Vue';
import Bro2 from './components/Bro2.Vue';

export default {
  name : 'App2',
  
  comments :  {Bro1, Bro2}
}
</script>
<style lang="">
  
</style>