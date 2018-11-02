<template>
  <div class="hello">
    <div class="title"></div>
    <div class="signUp" @click="signUp()"></div>
    <div class="inquery" @click="inquery()"></div>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  methods: {
    signUp() {
      this.$router.push('complete');
    },
    inquery() {
      this.$router.push('inquery');
    },
  },
};
</script>

<style scoped>
.hello {
  height: 100vh;
  width: 100vw;
  background: url(../assets/background1.png) no-repeat bottom;
  background-size: 100% 100%;
}

.title {
  padding-top: 10vh;
  width: 100vw;
  height: 25vh;
  background: url(../assets/welcome/title.png) no-repeat center;
  background-size: contain;
}

.signUp {
  width: 40vw;
  height: 15vh;
  background: url(../assets/welcome/signUp.png) no-repeat center;
  background-size: contain;
  margin: 0 auto;
}

.inquery {
  width: 40vw;
  height: 15vh;
  background: url(../assets/welcome/inquery.png) no-repeat center;
  background-size: contain;
  margin: 0 auto;
}
</style>
