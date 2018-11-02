<template>
  <div class="success">
    <div class="msg">配对结果将在11月7日公布，<br>请自行查询</div>
    <div>//报名资料{{msg}}</div>
  </div>
</template>

<script>
export default {
  name: 'success',
  data() {
    return {
      msg: this.global.signIn,
    };
  },
};
</script>

<style scoped>
.msg {
  width: 70vw;
  padding: 30vh 15vw 5vh 15vw;
  display: flex;
  text-align: start;
  line-height: 2.5em;
  font-size: 1.2em;
}
</style>
