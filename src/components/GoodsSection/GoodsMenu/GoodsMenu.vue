<template>
  <div class="goods-menu-section">
    <div class="goods-menu-list">
      <ul class="goods-menu-list-detail" @click="goSearch" ref="menuListRef" @mouseover="this.hoverMouseOver">

        <li class='goods-menu-item' v-for="item in this.dataList" :key="item['categoryId']">
          <a :data-categoryName="item['categoryName']">{{ item['categoryName'] }}</a>
          <div class="goods-menu-hover-list" ref="menuListHoverList">
            <div class="cate-part-col1">

              <div class="cate_channel">
                <a class="cate_channel_lk">家电馆 ></a>
                <a class="cate_channel_lk">开店设备一体化 ></a>
              </div>

              <div class="cate_detail">
                <div class="cate_detail_item" v-for="child in item['categoryChild']" :key="child['categoryId']">
                  <dt class="cate_detail_tit">
                    <a class="cate_detail_tit_lk" :data-categoryName="child['categoryName']">
                      {{ child['categoryName'] }}</a>
                    <i class="iconfont icon-jiantouyou"></i>
                  </dt>
                  <div class="cate_detail_con">
                    <div v-for="child_item in child['categoryChild']" :key="child_item['categoryId']">
                      <a class="cate_detail_con_lk"
                         :data-categoryName="child_item['categoryName']">{{ child_item['categoryName'] }}</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div class="cate-part-col2">
              <div class="cate_brand">
                <a href="//pro.jd.com/mall/active/2TPx4gxgmDxdkY9fWWAnPyBKHyfp/index.html" class="cate_brand_lk"
                   target="_blank"><img
                    data-lazy-img="//img30.360buyimg.com/vclist/s166x70_jfs/t1/146714/27/29151/1864/62e0a79fE472bbebd/96c1a06cb8f6f5bb.png.avif"
                    width="83" height="35"
                    src="//img30.360buyimg.com/vclist/s166x70_jfs/t1/146714/27/29151/1864/62e0a79fE472bbebd/96c1a06cb8f6f5bb.png.avif"
                    data-webp="no"></a>
                <a href="//mall.jd.com/index-1000187767.html" class="cate_brand_lk" target="_blank"><img
                    data-lazy-img="//img14.360buyimg.com/vclist/s166x70_jfs/t1/25186/4/18923/2809/62e0a909Eda6e72b7/08019ad3f8ee1e24.png.avif"
                    width="83" height="35"
                    src="//img14.360buyimg.com/vclist/s166x70_jfs/t1/25186/4/18923/2809/62e0a909Eda6e72b7/08019ad3f8ee1e24.png.avif"
                    data-webp="no"></a>
                <a href="//mall.jd.com/index-1000000950.html?from=pc" class="cate_brand_lk" target="_blank"><img
                    data-lazy-img="//img11.360buyimg.com/vclist/s166x70_jfs/t1/106502/32/20236/4442/61c93037Ec1115380/2407c9292c6bb419.jpg.avif"
                    width="83" height="35"
                    src="//img11.360buyimg.com/vclist/s166x70_jfs/t1/106502/32/20236/4442/61c93037Ec1115380/2407c9292c6bb419.jpg.avif"
                    data-webp="no"></a>
                <a href="//mall.jd.com/index-1000000950.html?from=pc" class="cate_brand_lk" target="_blank"><img
                    data-lazy-img="//img11.360buyimg.com/vclist/s166x70_jfs/t1/106502/32/20236/4442/61c93037Ec1115380/2407c9292c6bb419.jpg.avif"
                    width="83" height="35"
                    src="//img11.360buyimg.com/vclist/s166x70_jfs/t1/106502/32/20236/4442/61c93037Ec1115380/2407c9292c6bb419.jpg.avif"
                    data-webp="no"></a>
                <a href="//mall.jd.com/index-1000000950.html?from=pc" class="cate_brand_lk" target="_blank"><img
                    data-lazy-img="//img11.360buyimg.com/vclist/s166x70_jfs/t1/106502/32/20236/4442/61c93037Ec1115380/2407c9292c6bb419.jpg.avif"
                    width="83" height="35"
                    src="//img11.360buyimg.com/vclist/s166x70_jfs/t1/106502/32/20236/4442/61c93037Ec1115380/2407c9292c6bb419.jpg.avif"
                    data-webp="no"></a>
                <a href="//mall.jd.com/index-1000000950.html?from=pc" class="cate_brand_lk" target="_blank"><img
                    data-lazy-img="//img11.360buyimg.com/vclist/s166x70_jfs/t1/106502/32/20236/4442/61c93037Ec1115380/2407c9292c6bb419.jpg.avif"
                    width="83" height="35"
                    src="//img11.360buyimg.com/vclist/s166x70_jfs/t1/106502/32/20236/4442/61c93037Ec1115380/2407c9292c6bb419.jpg.avif"
                    data-webp="no"></a>
                <a href="//pro.jd.com/mall/active/2TPx4gxgmDxdkY9fWWAnPyBKHyfp/index.html" class="cate_brand_lk"
                   target="_blank"><img
                    data-lazy-img="//img30.360buyimg.com/vclist/s166x70_jfs/t1/146714/27/29151/1864/62e0a79fE472bbebd/96c1a06cb8f6f5bb.png.avif"
                    width="83" height="35"
                    src="//img30.360buyimg.com/vclist/s166x70_jfs/t1/146714/27/29151/1864/62e0a79fE472bbebd/96c1a06cb8f6f5bb.png.avif"
                    data-webp="no"></a>
              </div>
              <div class="cate_promotion">
                <a href="//prodev.jd.com/mall/active/Y9FVe619hMoajzqpxky1CQQJAkk/index.html" class="cate_promotion_lk"
                   target="_blank"><img
                    data-lazy-img="//img11.360buyimg.com/vclist/s336x268_jfs/t1/173197/13/29994/10580/6328290bE7a8487ce/c1b931dc51920760.jpg.avif"
                    width="168" height="134"
                    src="//img11.360buyimg.com/vclist/s336x268_jfs/t1/173197/13/29994/10580/6328290bE7a8487ce/c1b931dc51920760.jpg.avif"
                    data-webp="no"></a>
              </div>
            </div>
          </div>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
import data from '@/getBaseCategoryList.json'
import { mapState } from 'vuex'

export default {
  name: 'GoodsMenu',
  data() {
    return {
      timer: null,
      dataList: data.data
    }
  },
  async mounted() {

  },
  methods: {
    hoverMouseOver(e) {
      if (e.target.tagName !== 'LI') return false
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        const rect = this.$refs.menuListHoverList
        const parent = this.$refs.menuListRef.getBoundingClientRect().y
        // const top = rect.getBoundingClientRect().y
        if (parent < 0) {
          rect.map(item => {
            item.style.top = Math.abs(parent) + 10 + 'px'
          })
        } else {
          rect.map(item => {
            item.style.top = 0 + 'px'
          })
        }
      }, 200)
    },
    goSearch(e) {
      if (e.target.tagName === 'A') {

        const { href } = this.$router.resolve({
          path: '/search',
          query: { k: e.target.dataset['categoryname'] }
        })
        window.open(href, '_blank')

      }
    }
  },
  computed: {
    ...mapState(['count'])
  }
}
</script>

<style scoped lang='less'>
// 展示栏部分的结构
.goods-menu-section {
  background-color: #ffffff;
  width: 190px;
  height: 470px;
  position: relative;
  padding: 10px 0;

  .goods-menu-list {
    .goods-menu-item {
      height: 25px;
      line-height: 25px;
      width: 190px;
      padding-left: 18px;
      transition: background-color .2s ease;

      &:hover {
        background-color: beige;
      }
    }
  }
}

.iconfont {
  font-size: 5px;
}

.goods-menu-hover-list {
  position: absolute;
  left: 190px;
  top: 0;
  z-index: 2;
  display: none;
  transition: all 0.2s ease-out;

  width: 1000px;
  min-height: 470px;
  background-color: #ffffff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
  overflow: hidden;

  &:hover {
    display: block;
  }
}

.goods-menu-hover-list .cate-part-col1 {
  float: left;
  width: 800px;
  padding: 12px;

  .cate_channel {
    .cate_channel_lk {
      display: inline-block;
      padding: 4px 16px;
      margin-right: 10px;
      background-color: #363634;
      color: white;
    }
  }

  .cate_detail {
    margin-top: 20px;

    .cate_detail_item {
      display: flex;
      flex-wrap: wrap;
    }

    .cate_detail_tit {
      width: 88px;
      height: 26px;
      line-height: 26px;
      display: inline-block;
      text-align: right;
      margin-right: 28px;
      //padding-right: 20px;
      .cate_detail_tit_lk {
        //display: inline-block;
        margin-right: 12px;
      }
    }

    .cate_detail_con {
      display: flex;
      flex: 1;
      flex-wrap: wrap;

      .cate_detail_con_lk {
        height: 26px;
        line-height: 26px;
        display: inline-block;
        margin-right: 12px;
      }
    }
  }
}

.goods-menu-hover-list .cate-part-col2 {
  float: left;
  width: 198px;
  padding: 10px;

  .cate_brand {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 5px;

    &:after {
      content: '';
      flex: 1;
    }

    .cate_brand_lk {
      width: 82px;
      height: 35px;
      margin: 0 1px 1px;
    }
  }

  .cate_promotion {
    width: 100%;
    text-align: center;
    margin: 10px 1px 0;

    .cate_promotion_lk {
      width: 100%;
      display: inline-block;
    }
  }
}

.goods-menu-item:hover .goods-menu-hover-list {
  display: block;
}
</style>