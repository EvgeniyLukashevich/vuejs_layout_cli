<script>
export default {
  name: 'HeaderComp'
}
</script>

<template>
  <header class="header center">
    <div class="header-area container">
      <a class="header__logo" href="index.html">
        <img
          src="@/assets/images/Logo.png"
          alt=""
          class="header__logo-image"
        />
        <p class="header__logo-name">Interno</p>
      </a>
      <nav class="header__nav">
        <a href="index.html" class="header__nav-link current-link">Домой</a>
        <a href="#" class="header__nav-link">Проект</a>
        <a href="blog.html" class="header__nav-link">Блог</a>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="sass">

</style>
