<template>
  <div>
    <HeaderAdvertisers></HeaderAdvertisers>
    <GoodsSection></GoodsSection>
    <SeckillInner></SeckillInner>
    <ChannelBlock></ChannelBlock>
  </div>
</template>

<script>
import GoodsSection from '@/components/GoodsSection/GoodsSection'
import SeckillInner from '@/components/Seckill_Inner/SeckillInner'
import ChannelBlock from '@/components/Container/ChannelWrapper/ChannelBlock/ChannelBlock'
import HeaderAdvertisers from '@/components/HeaderAdvertisers/HeaderAdvertisers'

export default {
  name: 'InnerPage',
  components: {
    HeaderAdvertisers,
    ChannelBlock,
    SeckillInner,
    GoodsSection
  }
}
</script>

<style scoped lang='less'>

</style>