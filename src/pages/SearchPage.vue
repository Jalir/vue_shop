<template>
  <div class="SearchContainer">
    <HeaderAdvertisers></HeaderAdvertisers>
    <p>{{ k }}</p>
  </div>
</template>

<script>

import HeaderAdvertisers from '@/components/HeaderAdvertisers/HeaderAdvertisers'

export default {
  name: 'SearchPage',
  components: { HeaderAdvertisers },
  data () {
    return {
      k: ''
    }
  },
  methods: {
  },
  mounted() {
    const { k } = this.$route.query
    this.k = k
  }
}
</script>

<style scoped lang='less'>
.SearchContainer {
  width: 1200px;
  margin: 0 auto;
  position: relative;
}

.goods-section-container {
  position: absolute;
  //float: left;
  left: 0;
  top: 0;
  display: none;
  width: 190px;
  height: 470px;
}
</style>