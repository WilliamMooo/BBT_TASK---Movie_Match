<template>
  <div id="app">
  <transition name="fade" mode="out-in">
    <router-view/>
  </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.axios.post('https://hemc.100steps.net/2017/wechat/Home/Public/getJsApi',
        `url=${location.href}`).then((receive) => {
        const data = JSON.parse(receive);
        this.global.wechat = data.appId;
      });
    },
  },
};
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}

body {
  background: #443457;
}

@font-face {
  font-family: 'special';
  src: url('./assets/font/special.ttf');
  font-weight: normal;
  font-style: normal;
}

#app {
  text-align: center;
}

a {
  color: #fefdfb;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
