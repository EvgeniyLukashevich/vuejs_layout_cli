<script>
import { metricsData } from '@/services/inputData'
import MetricsItemBlock from '@/components/blocks/MetricsItemBlock.vue'

export default {
  name: 'MetricsSection',
  components: {
    MetricsItemBlock
  },
  data () {
    return {
      metrics: metricsData
    }
  }
}
</script>

<template>
  <section class="metrics center">
    <div class="metrics-area container">
      <MetricsItemBlock :data="metrics.experience"></MetricsItemBlock>
      <MetricsItemBlock :data="metrics.successfulProjects"></MetricsItemBlock>
      <MetricsItemBlock :data="metrics.projectsInProgress"></MetricsItemBlock>
      <MetricsItemBlock :data="metrics.clients"></MetricsItemBlock>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import '@/assets/styles/mixins'
@import '@/assets/styles/vars'

.metrics
  background-color: $colorStylishBright
  margin-top: 4.4rem

  &-area
    padding: 6.8rem 1rem
    display: flex

</style>
