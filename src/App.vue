<template>
<!--  <IndexPage></IndexPage>-->
<!--  <BlogPage></BlogPage>-->
<!--  <BlogDetailsPage></BlogDetailsPage>-->
  <ProjectPage></ProjectPage>
  <ProjectDetailsPage></ProjectDetailsPage>
</template>

<script>
// import IndexPage from '@/components/pages/IndexPage.vue'
// import BlogPage from '@/components/pages/BlogPage.vue'
// import BlogDetailsPage from '@/components/pages/BlogDetailsPage.vue'
import ProjectPage from '@/components/pages/ProjectPage.vue'
import ProjectDetailsPage from '@/components/pages/ProjectDetailsPage.vue'

export default {
  name: 'App',
  components: {
    ProjectDetailsPage,
    // IndexPage,
    // BlogPage,
    // BlogDetailsPage,
    ProjectPage
  }
}
</script>

<style lang="sass">

</style>
