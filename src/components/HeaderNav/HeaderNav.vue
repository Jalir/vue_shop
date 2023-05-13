<template>
  <div class="nav">
    <div class="navigator-container">
      <div class="left-container">
        <div class="nav-title">
          <span>购物网欢迎您！</span>
        </div>
        <div class="navigator-user">
          <span>请登录 | </span>
          <router-link to="/register" class="nav-router-link">免费注册</router-link>
        </div>
      </div>
      <div class="right-container">
        <div>
          <ul class="serve-section">
            <li class="serve-item"><a href="#">我的订单</a></li>
            <li class="serve-item"><a href="#">我的尚品汇</a></li>
            <li class="serve-item"><a href="#">尚品汇会员</a></li>
            <li class="serve-item"><a href="#">企业采购</a></li>
            <li class="serve-item"><a href="#">关注尚品汇</a></li>
            <li class="serve-item"><a href="#">客户服务</a></li>
            <li class="serve-item"><a href="#">合作招商</a></li>
            <li class="serve-item"><a href="#">商家后台</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderNav'
}
</script>

<style scoped lang='less'>
@color: var(--theme-color);
@item-right-border: var(--item-right-border);
@navigator-color: var(--navigator-color);

.nav {
  width: 100%;
  margin: 0 auto;
  background-color: @navigator-color;
}

.navigator-container {
  width: 1200px;
  height: 30px;
  line-height: 30px;
  display: flex;
  align-items: center;
  justify-content:space-between;
  margin: 0 auto;
}

.navigator-container .left-container{
  display: flex;
  .nav-title {
    margin-right: 10px;
  }
  .nav-router-link {
    color: @color;
  }
}

.navigator-container .right-container .serve-section{
  width: 635px;
  height: 30px;

  .serve-item {
    float: left;
    text-align: center;
    &:last-child a{
      border-right: none;
    }
    a {
      padding: 0 12px;
      border-right: 1px solid @item-right-border;
    }
  }
}
</style>