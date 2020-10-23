<template>
    <div class="container">
        我是第一个子组件

    </div>
</template>
<script>
    export default {
        name: 'FirstComponent',
        data(){
            return {
                
            }
        },
    }
</script>
<style lang="scss" scoped>
    .container {
        width: 750px;
        height: auto;
        background: red;
    }
</style>