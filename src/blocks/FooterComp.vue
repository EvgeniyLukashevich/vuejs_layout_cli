<script>
export default {
  name: 'FooterComp'
}
</script>

<template>
  <footer class="footer center">
    <div class="footer-area container">
      <div class="footer-social footer-box">
        <a class="header__logo" href="index.html">
          <img
            src="@/assets/images/Logo.png"
            alt=""
            class="header__logo-image"
          />
          <p class="header__logo-name">Interno</p>
        </a>
        <div class="footer-social__links">
          <a
            href="twitter.com"
            class="footer-social__links__link fab fa-twitter"
          ></a>
          <a
            href="linkedin.com"
            class="footer-social__links__link fab fa-linkedin-in"
          ></a>
        </div>
      </div>

      <div class="footer-pages footer-box">
        <h3 class="footer-box-title">Страницы</h3>
        <nav class="footer-pages__nav">
          <a href="index.html" class="footer-pages__nav-link"
          >Домой</a
          >
          <a href="#" class="footer-pages__nav-link">Проект</a>
          <a href="blog.html" class="footer-pages__nav-link">Блог</a>
        </nav>
      </div>

      <div class="footer-contacts footer-box">
        <h3 class="footer-box-title">Контакты</h3>
        <div class="footer-contacts__box">
          <address class="footer-contacts__box-item">
            55 East Birchwood Ave. Brooklyn, New York 11201
          </address>
          <a
            href="mailto:contact@interno.com"
            class="footer-contacts__box-item"
          >contact@interno.com
          </a>
          <a
            href="tel:+1234567890"
            class="footer-contacts__box-item"
          >(123) 456 - 7890</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="sass">

</style>
