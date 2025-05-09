<template>
  <header class="man-vs-header" role="banner" aria-labelledby="main-headline">
    <div class="man-vs-header__content">
      <h1 id="main-headline" class="man-vs-header__title">6 Reasons Tariff-Free Sheets Are The Answer To Your Night Sweats</h1>
      <p class="man-vs-header__description">NASA-inspired cooling, silver-infused freshness—without the luxury price hike.</p>
    </div>
    <div class="man-vs-header__arrow">
      <ArrowIcon class="man-vs-header__arrow-icon" />
    </div>
  </header>
</template>

<script>
import ArrowIcon from "../assets/svgs/ArrowIcon.vue";

export default {
  components: {
    ArrowIcon,
  },
};
</script>

<style scoped>
.man-vs-header {
  background-color: #00227d;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: clamp(27px, calc(20.14px + 1.657vw), 44px);
  padding-bottom: clamp(23px, calc(18.56px + 1.072vw), 34px);
  padding-left: clamp(39px, calc(-80.03px + 28.75vw), 334px);
  padding-right: clamp(40px, calc(-78.76px + 28.67vw), 334px);
}
.man-vs-header__content {
  width: 100%;
  max-width: 772px;
  text-align: center;
}
.man-vs-header__title {
  font-size: clamp(28px, calc(23.97px + 0.9746vw), 38px);
  line-height: clamp(36px, calc(31.97px + 0.9746vw), 46px);
  letter-spacing: clamp(-0.54px, calc(-0.3436px - 0.01364vw), -0.4px);
  text-align: center;
  margin-bottom: 23px;
}
.man-vs-header__description {
  font-size: clamp(18px, calc(15.18px + 0.6822vw), 25px);
  line-height: 22px;
  letter-spacing: 0px;
  font-weight: 400;
  text-align: center;
  margin-bottom: clamp(20px, calc(1.14px + 1.657vw), 25px);
  height: 33px;
}
.man-vs-header__arrow {
  width: 30px;
  height: 18px;
}
@media (max-width: 768px) {
  .man-vs-header__arrow {
    width: 23px;
    height: 14.74px;
  }
}
</style>
