<template>
  <div class="hello">
    <div class="title"></div>
    <div class="signIn" @click="signIn"></div>
    <div class="inquery" @click="inquery"></div>
    <div>{{errorMsg}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: 0,
      errorMsg: '',
    };
  },
  mounted() {
    this.config();
  },
  name: 'welcome',
  methods: {
    config() {
      this.axios.post('api/init', {// checkLogin 检查是否登录
        check: 1,
      }).then((receive) => {
        const data = JSON.parse(receive);
        if (data.errno === 0) {
          this.status = data.status;
          this.global.userStatus.status = data.status;
          this.global.userStatus.login = data.login;
          this.global.userStatus.reg = data.reg;
        } else {
          this.errorMsg = data.errmsg;
        }
      });
    },
    signIn() {
      if (this.status === 0 && this.global.userStatus.reg === true) {
        this.$router.push({ name: 'signIn' });
      } else if (this.status === 5) {
        this.errorMsg = '活动已过期';
      } else if (this.global.userStatus.login === false) {
        this.errorMsg = '请先授权登录';
      } else {
        this.$router.push({ name: 'prevent' });
      }
    },
    inquery() {
      if (this.status === 5) {
        this.errorMsg = '活动已过期';
      } else if (this.global.userStatus.reg === false) {
        this.errorMsg = '你还没有报名';
      } else if (this.global.userStatus.login === false) {
        this.errorMsg = '请先授权登录';
      } else {
        this.get('api/query').then((response) => {
          const data = JSON.parse(response);
          if (data.errno === 0) {
            this.global.inqueryMsg = data;
            this.$router.push({ name: 'inquery' });
          } else {
            this.errorMsg = data.errmsg;
          }
        });
      }
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
  color: #fefdfb;
}

.title {
  padding-top: 10vh;
  width: 100vw;
  height: 25vh;
  background: url(../assets/welcome/title.png) no-repeat center;
  background-size: contain;
}

.signIn {
  width: 40vw;
  height: 15vh;
  background: url(../assets/welcome/signIn.png) no-repeat center;
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
