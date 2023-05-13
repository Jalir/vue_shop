<template>
  <div class="goods-menu-carousel">
    <div class="carousel-left">
      <div class="carousel-left-main">
          <img src="@/assets/img/dog.jpeg" alt="main_pic">
          <img src="https://pic.616pic.com/bg_w1180/00/00/44/3CAilr8hPe.jpg" alt="main_pic">
          <img src="https://img-qn.51miz.com/preview/element/00/01/27/06/E-1270611-121F7F85.jpg" alt="main_pic">
        <img src="@/assets/img/dog.jpeg" alt="main_pic">
      </div>
      <button class="carousel-button carousel-left-button">&langle;</button>
      <button class="carousel-button carousel-right-button">&rangle;</button>
    </div>

    <div class="carousel-right">
      <div class="carousel-right-item">
        <div class="carousel-right-item-img">
          <img src="@/assets/img/images.jpeg" alt="animals">
        </div>
      </div>
      <div class="carousel-right-item">
        <div class="carousel-right-item-img">
          <img src="@/assets/img/images.jpeg" alt="animals">
        </div>
      </div>
      <div class="carousel-right-item">
        <div class="carousel-right-item-img">
          <img src="@/assets/img/images.jpeg" alt="animals">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsCarousel'
}
</script>

<style scoped lang='less'>
.goods-menu-carousel {
  width: 790px;
  height: 470px;
  background-color: #ffffff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
  display: flex;

  .carousel-left {
    width: 590px;
    height: 470px;
    margin-right: 10px;
    overflow: hidden;
    position: relative;

    .carousel-left-main {
      //position: absolute;
      //left: 0;
      //top: 0;
      width: 2360px;
      height: 470px;
      display: flex;
      //animation: imageCarousel 5s infinite linear;

      img {
        width: 590px;
        //height: 100%;
        object-fit: cover;
      }

    }

    .carousel-button,
    .carousel-button {
      width: 30px;
      height: 70px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      background-color: transparent;
      transition: all linear 0.2s;

      &:hover {
        background-color: rgba(255, 255, 255, 0.54);
      }
    }

    .carousel-left-button {
      left: 0;
    }

    .carousel-right-button {
      right: 0;
    }
  }

  .carousel-right {
    width: 190px;
    height: 470px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .carousel-right-item {
      .carousel-right-item-img {
        width: 190px;
        height: 150px;
        overflow: hidden;

        img {
          object-fit: cover;
          height: 100%;
          width: 100%;
          overflow: hidden;
        }
      }
    }
  }

}

@keyframes imageCarousel {

  0%,10% {
    transform: translateX(calc(0 * 590px));
  }
  22%,32% {
    transform: translateX(calc(-1 * 590px));
  }
  47%,57% {
    transform: translateX(calc(-2 * 590px));
  }
  95%,100%{
    transform: translateX(calc(-3 * 590px));
  }
  //100% {
  //  transform: translateX(calc(0 * 590px));
  //}
}
</style>