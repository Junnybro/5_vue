<template lang="">
    <div class="row mb-3">
        <div class="col">
            <div class="input-group">
                <input
                    id="msg"
                    type="text"
                    class="form-control"
                    name="msg"
                    placeholder="할일을 여기에 입력!"
                    v-model.trim="todo"
                    @keyup.enter="addTodoHandler"
                />
                <span class="btn btn-primary input-group-addon" @click="addTodoHandler"
                    >추가</span
                >
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'InputCom',

    data() {
        return {
            todo : ''
        }
    },

    methods: {
        addTodoHandler(){
            if(this.todo && this.todo.length >= 3){
                this.emitter.emit('add', this.todo)   
                this.todo = ''
            }
            else {
                alert('3글자 이상만 추가 가능!')
            }
        }
    },
};
</script>
<style lang=""></style>