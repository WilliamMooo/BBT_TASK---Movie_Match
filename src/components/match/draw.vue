<template>
  <div class="draw">
    <div class="title">请在左边画出一半爱心</div>
    <div class="canvas">
      <canvas class="drawArea" id="drawArea"
      @touchstart="drawStart($event)"
      @touchmove="drawing($event)"
      @touchend="drawEnd($event)"></canvas>
      <div class="right"></div>
    </div>
    <div class="tips">{{tips}}</div>
    <div v-if="!flag">
      <div class="done" @click="save"></div>
      <div class="restart" @click="clear"></div>
    </div>
  </div>
</template>

<script>
let draw;
class Draw {
  constructor() {
    this.canvas = document.getElementById('drawArea');
    this.context = this.canvas.getContext('2d');
    this.borderbox = this.canvas.getBoundingClientRect();
    this.lastPoint = '';
    this.dragging = false;
    this.path = {
      beginX: 0,
      beginY: 0,
      endX: 0,
      endY: 0,
    };
  }
}
export default {
  name: 'draw',
  data() {
    return {
      flag: true,
      tips: '',
    };
  },
  mounted() {
    draw = new Draw();
    draw.canvas.width = 120;
    draw.canvas.height = 240;
  },
  methods: {
    drawStart(e) {
      e.preventDefault();
      draw.context.strokeStyle = '#f1eff5';
      draw.context.lineWidth = 3;
      draw.context.lineCap = 'round';
      draw.context.lineJoin = 'round';
      draw.context.beginPath();
      this.tips = '';
    },
    drawing(e) {
      e.preventDefault();
      if (this.flag === true) {
        draw.context.lineTo(
          e.changedTouches[0].clientX - draw.borderbox.left,
          e.changedTouches[0].clientY - draw.borderbox.top,
        );
        draw.path.endX = e.changedTouches[0].clientX - draw.borderbox.left;
        draw.path.endY = e.changedTouches[0].clientY - draw.borderbox.top;
        draw.context.stroke();
      } else {
        this.tips = '只能画一笔哦';
      }
    },
    drawEnd(e) {
      e.preventDefault();
      this.lastPoint = e;
      draw.context.closePath();
      this.flag = false;
    },
    save() {
      const data = draw.canvas.toDataURL('image/png');
      this.global.signIn.imgdata = data;
      this.$router.push({ name: 'success' });
    },
    clear() {
      draw.context.clearRect(0, 0, 120, 240);
      this.flag = true;
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 1.5em;
  padding: 8vh 0 2vh 15vw;
  width: 70vw;
  display: flex;
}

.canvas {
  width: 240px;
  height: 240px;
  margin: 0 auto;
  border: 1px solid #9b9b9b;
  border-radius: 10px;
  display: flex;
}

.right {
  width: 40vw;
  border-left: 1px solid #9b9b9b;
}

.done, .restart {
  position: relative;
  top: 8vh;
}

.tips {
  height: 2vh;
  font-size: 2vh;
}

.done {
  width: 40vw;
  height: 12vh;
  background: url(../../assets/match/done.png) no-repeat center;
  background-size: contain;
  margin: 0 auto;
}

.restart {
  width: 40vw;
  height: 12vh;
  background: url(../../assets/match/restart.png) no-repeat center;
  background-size: contain;
  margin: 0 auto;
}
</style>
