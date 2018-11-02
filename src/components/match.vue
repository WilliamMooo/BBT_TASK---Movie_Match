<template>
  <div class="match">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'match',
  data() {
    return {
      picked: '',
    };
  },
  methods: {
    handleSubmit() {
      this.$router.push('draw');
    },
  },
};
</script>

<style scoped>
.match {
  height: 100vh;
  width: 100vw;
  background: url(../assets/background2.png) no-repeat bottom;
  background-size: cover;
  color: #fefdfb;
  font-family: 'Microsoft YaHei';
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

button {
  margin: 1vh 0;
}
</style>
