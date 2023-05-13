<template>
  <div class="seckill-container">
    <div class="seckill-inner">
      <div class="seckill-countdown">
        <span class="countdown-title">京东秒杀</span>
        <span class="countdown-desc">10:00点 距离结束还有</span>
        <span class="countdown-main">00：00：02</span>
      </div>
      <div class="seckill-list" ref="seckillListRef">
        <div class="seckill-item">
          <img class="seckill-item-image" src="http://sph.atguigu.cn/img/today01.png" alt="">
        </div>
        <div class="seckill-item">
          <img class="seckill-item-image" src="http://sph.atguigu.cn/img/today02.png" alt="">
        </div>
        <div class="seckill-item">
          <img class="seckill-item-image" src="http://sph.atguigu.cn/img/today02.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SeckillInner',
  mounted() {
    this.$refs.seckillListRef.addEventListener('mousewheel', function(event) {
      // 禁止事件默认行为（此处禁止鼠标滚轮行为关联到"屏幕滚动条上下移动"行为）
      event.preventDefault()
      // 设置鼠标滚轮滚动时屏幕滚动条的移动步长
      const step = 120
      if (event.deltaY < 0) {
        // 向上滚动鼠标滚轮，屏幕滚动条左移
        this.scrollLeft -= step
      } else {
        // 向下滚动鼠标滚轮，屏幕滚动条右移
        this.scrollLeft += step
      }
    })
  }
}
</script>

<style scoped lang='less'>
.seckill-container {
  background-color: var(--background-color);
}
.seckill-inner {
  width: 1200px;
  margin: 0 auto;
  height: 260px;
  background-color: #fff;
}

.seckill-inner .seckill-countdown {
  width: 190px;
  height: 260px;
  background-size: contain;
  background: url(//storage.360buyimg.com/channel2022/jd_home/0.0.16/assets/img/613f39ecb60e42dfec798a4ffc0bc012.png) 50% no-repeat;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
  float: left;
  .countdown-title {
    margin-top: 31px;
    font-size: 30px;
  }
  .countdown-desc {
    margin-top: 90px;
    font-size: 14px;
  }
  .countdown-main {
    margin-top: 10px;
    font-size: 20px;
  }
}

.seckill-inner .seckill-list {
  float: left;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  width: 1010px;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  .seckill-item {
    //width: 200px;
    height: 260px;
    .seckill-item-image {
      height: 260px;
      //width: auto;
    }
  }
}
</style>