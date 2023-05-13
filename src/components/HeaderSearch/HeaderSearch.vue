<template>
  <div class="search-container">
    <div class="search-logo clearfix">
      <img
          src="https://yt3.googleusercontent.com/xDCwk0HNMEE5p8xGdMUVCWhE_TKcolLy6L_sMvQOZghsDvRgNHpgc0edW6lwUawmGMtwdc-1DA=s176-c-k-c0x00ffffff-no-rj"
          alt="">
    </div>
    <div class="search-section">
      <div>
        <input class="search-input" type="text" placeholder="搜索框"/>
        <button class="search-button">搜索</button>
        <button class="search-button">我的购物车</button>
      </div>
      <div class="search-associative">
       <span class="search-associative-item">美容</span>
       <span class="search-associative-item">玩具</span>
       <span class="search-associative-item">动物</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderSearch'
}
</script>

<style scoped lang='less'>
@color: var(--theme-color);
@item-right-border: var(--item-right-border);
@navigator-color: var(--navigator-color);
@theme-font-color: var(--theme-font-color);
.search-container {
  width: 1200px;
  height: 110px;
  margin: 0 auto;

  .search-logo {
    width: 190px;
    height: 110px;
    float: left;
    text-align: center;
    padding: 10px;

    img {
      height: 100%;
    }
  }

  .search-section {
    float: right;
    height: 110px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 130px;
    .search-input {
      width: 420px;
      padding: 8px 10px;
      //background-color: @color;
      //color: @theme-font-color;
      border: 2px solid @color;
      &::placeholder{
        //color: @theme-font-color;
      }
    }

    .search-button {
      padding: 8px 16px;
      background-color: @color;
      border: 2px solid @color;
      color: @theme-font-color;
      box-sizing: content-box;
      cursor: pointer;

      &:last-child{
        margin-left: 3px;
      }
    }

    .search-associative {
      .search-associative-item {
        margin:2px 4px;
      }
    }
  }
}
</style>