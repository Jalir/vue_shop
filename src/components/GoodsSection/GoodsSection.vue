<template>
  <div class="goods-section">
    <div class="goods-fs">
      <div class="goods-section-container">
        <GoodsMenu></GoodsMenu>
      </div>
      <div class="right">
        <UserInner></UserInner>
      </div>
      <div class="main">
        <GoodsCarousel></GoodsCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import GoodsMenu from '@/components/GoodsSection/GoodsMenu/GoodsMenu'
import GoodsCarousel from '@/components/GoodsSection/GoodsCarousel/GoodsCarousel'
import UserInner from '@/components/GoodsSection/UserInner/UserInner'

export default {
  name: 'GoodsSection',
  components: { UserInner, GoodsCarousel, GoodsMenu }
}
</script>

<style scoped lang='less'>
@color: var(--theme-color);
@item-right-border: var(--item-right-border);
@background-color: var(--background-color);

.goods-section {
  background-color: @background-color;
  padding: 10px 0;
}

.goods-fs {
  //overflow: hidden;
  position: relative;
  width: 1200px;
  margin: 0 auto;
}

.goods-section-container {
  float: left;
  width: 190px;
  height: 470px;
}

.main {
  margin-left: 205px;
  margin-right: 190px;
  height: 470px;
}

.right {
  float: right;
  height: 470px;
  width: 190px;
  //margin-right: 10px;
}
</style>