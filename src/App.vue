<template>
  <div id="app">
    <HeaderNav></HeaderNav>
    <HeaderSearch></HeaderSearch>
    <router-view></router-view>
    <FooterSection></FooterSection>
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav/HeaderNav'
import FooterSection from '@/components/FooterSection/FooterSection'
import HeaderSearch from '@/components/HeaderSearch/HeaderSearch'

export default {
  name: 'App',
  components: {
    HeaderSearch,
    FooterSection,
    HeaderNav
  }
}
</script>

<style scoped lang="less">

.goods-menu-hover-list {
  position: sticky;
  top: 0;
  left: 210px;
  width: 800px;
  height: 490px;
  background-color: #ffffff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
}

</style>
