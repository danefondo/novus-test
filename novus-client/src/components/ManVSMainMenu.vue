<template>
  <nav class="man-vs-main-menu">
    <div class="man-vs-main-menu__logo">
      <ManVSLogo />
    </div>
  </nav>
</template>

<script>
import ManVSLogo from "../assets/svgs/ManVSLogo.vue";
export default {
  components: {
    ManVSLogo,
  },
};
</script>

<style scoped>
.man-vs-main-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -1px;
  height: 59px;
  background-color: #ffffff;
  padding-top: clamp(17px, calc(19.806px - 0.1948vw), 19px); /* 19px @414 → 17px @1440 */
  padding-bottom: clamp(16px, calc(18.806px - 0.1948vw), 18px); /* 18px @414 → 16px @1440 */
}
.man-vs-main-menu__logo {
  width: 114px;
  height: 26px;
}
</style>
