<template>
  <nav class="man-vs-nav">
    <div class="man-vs-nav__logo">
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
.man-vs-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -1px;
  height: 59px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.08);
  z-index: 1; /* for box-shadow to show */
  position: relative; /* for z-index to work */
  background-color: #ffffff;
  padding-top: clamp(17px, calc(19.806px - 0.1948vw), 19px); /* 19px @414 → 17px @1440 */
  padding-bottom: clamp(16px, calc(18.806px - 0.1948vw), 18px); /* 18px @414 → 16px @1440 */
}
.man-vs-nav__logo {
  width: 114px;
  height: 26px;
}
</style>
