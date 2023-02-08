<template>
  <div>
    <BaseCardWallet/>
    <StatusCard/>
  </div>
</template>

<script>
import BaseCardWallet from '../elements/baseCardWallet.vue';
import StatusCard from '../elements/statusCard.vue';

export default {
    components: { BaseCardWallet, StatusCard }
}
</script>

<style>

</style>