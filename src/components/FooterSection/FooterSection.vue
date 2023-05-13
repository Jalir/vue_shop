<template>
  <div class="footer">
    <div class="footer-container">
<!--      第一部分-->
      <div class="footer-serve">
        <div class="footer-item">
          <div class="footer-item-icon">
            <i class="iconfont icon-comments"></i>
          </div>
          <div class="footer-item-detail">
            <span class="text-ellipsis">正品保障</span>
            <span class="text-ellipsis">正品保障，提供发票</span>
          </div>
        </div>
        <div class="footer-item">
          <div class="footer-item-icon">
            <i class="iconfont icon-comments"></i>
          </div>
          <div class="footer-item-detail">
            <span class="text-ellipsis">极速物流</span>
            <span class="text-ellipsis">7天无理由退换</span>
          </div>
        </div>
        <div class="footer-item">
          <div class="footer-item-icon">
            <i class="iconfont icon-comments"></i>
          </div>
          <div class="footer-item-detail">
            <span class="text-ellipsis">特色服务</span>
            <span class="text-ellipsis">私人定制家电套餐</span>
          </div>
        </div>
        <div class="footer-item">
          <div class="footer-item-icon">
            <i class="iconfont icon-comments"></i>
          </div>
          <div class="footer-item-detail">
            <span class="text-ellipsis">帮助中心</span>
            <span class="text-ellipsis">您的服务指南</span>
          </div>
        </div>
      </div>

<!--      第二部分-->
      <div class="footer-help">
        <div class="footer-help-item">
          <div class="footer-help-item-tile">
            <span>购物指南</span>
          </div>
          <div class="footer-help-item-self">
            <a href="#">购物流程</a>
            <a href="#">购物流程</a>
            <a href="#">购物流程</a>
            <a href="#">购物流程</a>
            <a href="#">购物流程</a>
            <a href="#">购物流程</a>
          </div>
        </div>
        <div class="footer-help-item">
          <div class="footer-help-item-tile">
            <span>购物指南</span>
          </div>
          <div class="footer-help-item-self">
            <a href="#">购物流程</a>
            <a href="#">购物流程</a>
            <a href="#">购物流程</a>
            <a href="#">购物流程</a>
            <a href="#">购物流程</a>
            <a href="#">购物流程</a>
          </div>
        </div>
        <div class="footer-help-item">
          <div class="footer-help-item-tile">
            <span>购物指南</span>
          </div>
          <div class="footer-help-item-self">
            <a href="#">购物流程</a>
            <a href="#">购物流程</a>
            <a href="#">购物流程</a>
            <a href="#">购物流程</a>
            <a href="#">购物流程</a>
            <a href="#">购物流程</a>
          </div>
        </div>
        <div class="footer-help-item">
          <div class="footer-help-item-tile">
            <span>购物指南</span>
          </div>
          <div class="footer-help-item-self">
            <a href="#">购物流程</a>
            <a href="#">购物流程</a>
            <a href="#">购物流程</a>
            <a href="#">购物流程</a>
            <a href="#">购物流程</a>
            <a href="#">购物流程</a>
          </div>
        </div>
        <div class="footer-help-item">
          <div class="footer-help-item-tile">
            <span>购物指南</span>
          </div>
          <div class="footer-help-item-self">
            <a href="#">购物流程</a>
            <a href="#">购物流程</a>
            <a href="#">购物流程</a>
            <a href="#">购物流程</a>
            <a href="#">购物流程</a>
            <a href="#">购物流程</a>
          </div>
        </div>
        <div class="footer-help-item">
          <div class="footer-help-item-tile">
            <span>购物指南</span>
          </div>
          <div class="footer-help-item-self">
            <div class="imgSection"></div>
          </div>
        </div>
      </div>

<!--      第三部分-->
      <div class="footer-connect">
        <div class="footer-connect-list">
          <a href="#">关于我们</a>
          <a href="#">关于我们</a>
          <a href="#">关于我们</a>
          <a href="#">关于我们</a>
          <a href="#">关于我们</a>
          <a href="#">关于我们</a>
          <a href="#">关于我们</a>
          <a href="#">关于我们</a>
          <a href="#">关于我们</a>
          <a href="#">关于我们</a>
          <a href="#">关于我们</a>
          <a href="#">关于我们</a>
        </div>
        <div class="footer-connect-detail">
          <p>地址：广州市海珠区官洲街道仑头路21号  邮编：510220  电话：400-618-4000  传真：010-82935100  邮箱: cao_chaomeng@163.com</p>
        </div>
        <div class="footer-connect-detail">
          <p>粤ICP备08001421号粤公网安备110108007702</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterSection'
}
</script>

<style scoped lang='less'>
@item-right-border: var(--item-right-border);
@border-color: var(--border-color);
@background-color: var(--background-color);

// 主要的灰色背景
.footer {
  width: 100%;
  margin: 0 auto;
  background-color: @background-color;
}


// start ------------ 脚部第一部分
.footer-container {
  margin: 0 auto;
  width: 1200px;

  .footer-serve {
    display: flex;
    justify-content: space-between;
    padding: 38px 0;
    border-bottom: 1px solid @item-right-border;

    .footer-item {
      flex: 1;
      display: flex;
      justify-content: center;
      overflow: hidden;

      .footer-item-icon {
        width: 50px;
        height: 50px;
        display: inline-block;
        overflow: hidden;
        i {
          font-size: 38px;
        }
      }

      .footer-item-detail {
        height: 50px;
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        &:first-child span {
          font-weight: 700;
        }
      }
    }
  }
}


// start ------------ 脚部第二部分
.footer-help {
  width: 1200px;
  display: flex;
  padding: 20px 60px;
  border-bottom: 1px solid @border-color;

  .footer-help-item {
    flex: 1;
    padding-left: 30px;
    &:last-child {
      .imgSection {
        width: 80px;
        height: 80px;
        background-color: rgba(225, 225, 225, 0.49);
      }
    }
    .footer-help-item-tile {
      font-size: 16px;
      margin: 10px 0;
    }

    .footer-help-item-self {
      display: flex;
      flex-direction: column;

      a {
        margin: 3px 0;
      }
    }
  }
}


// start ------------ 脚部第三部分
.footer-connect {
  width: 1200px;
  .footer-connect-list {
    text-align: center;
    padding: 20px 0 20px;
    a {
      padding: 0 20px;
      border-right: 1px solid @border-color;
    }
  }
.footer-connect-detail {
  text-align: center;
  margin-bottom: 10px;
}
}
</style>