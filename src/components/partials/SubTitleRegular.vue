<script>
export default {
  name: 'SubTitleRegular',
  props: ['subtitleText']
}
</script>

<template>
  <p class="subtitle-regular">{{subtitleText}}</p>
</template>

<style scoped lang="sass">
.subtitle-regular
  text-align: center
</style>
