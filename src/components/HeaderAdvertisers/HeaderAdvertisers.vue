<template>
  <div class="advertisers">
    <div class="advertisers-container">
      <div class="advertisers-describe">
        <p>全部商品分类</p>
      </div>
      <div class="advertisers-section">
        <ul class="advertisers-list">
          <li class="advertisers-items">
            <a href="#">服装城</a>
          </li>
          <li class="advertisers-items">
            <a href="#">美妆馆</a>
          </li>
          <li class="advertisers-items">
            <a href="#">尚品汇超市</a>
          </li>
          <li class="advertisers-items">
            <a href="#">全球购</a>
          </li>
          <li class="advertisers-items">
            <a href="#">闪购</a>
          </li>
          <li class="advertisers-items">
            <a href="#">团购</a>
          </li>
          <li class="advertisers-items">
            <a href="#">有趣</a>
          </li>
          <li class="advertisers-items">
            <a href="#">秒杀</a>
          </li>
        </ul>
      </div>
      <Transition name="sort">
        <div class="goods-section-container" v-if="isSearch">
          <GoodsMenu></GoodsMenu>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script>
import GoodsMenu from '@/components/GoodsSection/GoodsMenu/GoodsMenu'

export default {
  name: 'HeaderAdvertisers',
  components: { GoodsMenu },
  data() {
    return {
      isSearch: false
    }
  },
  mounted() {

    if (this.$route.path.indexOf('search') !== -1) {
      this.isSearch = true
    }
  },
  methods: {}
}
</script>

<style scoped lang='less'>
@theme-color: var(--theme-color);
@color: var(--theme-font-color);
@border-color: var(--border-color);

.advertisers {
  //box-shadow: 0 5px 12px -5px rgba(0,0,0,.5);
  position: relative;
  border-bottom: 1px solid rgba(221, 221, 221, 0.72);

  .advertisers-container {
    width: 1200px;
    margin: 0 auto;

    .advertisers-describe {
      float: left;
      width: 190px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background-color: @theme-color;
      color: @color;
      font-size: 16px;
    }

    .advertisers-section {
      margin-left: 190px;

      .advertisers-list {
        display: flex;
        margin-left: 20px;

        .advertisers-items {
          text-align: center;
          font-size: 16px;
          margin: 0 20px;

          a {
            display: inline-block;
            height: 40px;
            line-height: 40px;
          }
        }
      }
    }
  }
}

.goods-section-container {
  position: absolute;
  left: 0;
  top: 40px;
  display: none;
  width: 190px;
  height: 470px;
  &:hover {
    display: block;
  }
}

.advertisers-describe:hover ~ .goods-section-container {
  display: block;
}

.sort-enter {

}
.sort-leave {

}
</style>