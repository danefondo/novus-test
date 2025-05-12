<template>
  <div class="man-vs-cta-offer-image">
    <img class="man-vs-cta-offer-image__rays" src="../assets/rays.webp" />
    <img class="man-vs-cta-offer-image__sheets" src="../assets/sheets.webp" />
    <div class="man-vs-cta-offer-image__pillow-container">
      <img class="man-vs-cta-offer-image__pillow-big" src="../assets/pillow-big.webp" />
      <img class="man-vs-cta-offer-image__pillow-medium" src="../assets/pillow-medium.webp" />
      <img class="man-vs-cta-offer-image__pillow-small" src="../assets/pillow-small.webp" />
      <div class="man-vs-cta-offer-image__offer-icon">
        <OfferIcon />
        <div class="man-vs-cta-offer-image__offer-icon-text">+ 3 FREE TOWELS</div>
      </div>
    </div>
  </div>
</template>

<script>
import OfferIcon from "../assets/svgs/OfferIcon.vue";

export default {
  components: { OfferIcon },
};
</script>

<style scoped>
.man-vs-cta-offer-image {
  width: 350px;
  height: 255.35px;
  position: relative;
  margin-right: 39px;
  margin-top: -13px;
}
.man-vs-cta-offer-image__sheets {
  position: absolute;
  top: 0.98px;
  left: 13px;
  width: 273.56px;
  height: 188px;
}
.man-vs-cta-offer-image__pillow-container {
  position: absolute;
  top: 94.28px;
  left: 156px;
  width: 174px;
  height: 109.7px;
}
.man-vs-cta-offer-image__pillow-big {
  position: absolute;
  top: 75px;
  left: 0px;
  width: 157.85px;
  height: 33.49px;
}
.man-vs-cta-offer-image__pillow-medium {
  position: absolute;
  top: 51px;
  left: 14px;
  width: 126.91px;
  height: 26.63px;
}
.man-vs-cta-offer-image__pillow-small {
  position: absolute;
  top: 31px;
  left: 25px;
  width: 101.45px;
  height: 21.35px;
}
.man-vs-cta-offer-image__rays {
  position: absolute;
  top: -17px;
  left: 47px;
  width: 261.94px;
  height: 255.35px;
}
.man-vs-cta-offer-image__offer-icon {
  position: absolute;
  top: -1px;
  left: 98px;
  height: 76px;
  width: 76px;
}
.man-vs-cta-offer-image__offer-icon-text {
  height: 30px;
  width: 62px;
  color: black;
  font-weight: bold;
  font-size: 13px;
  letter-spacing: 0px;
  text-align: center;
  top: 23px;
  left: 7px;
  position: absolute;
}

@media (max-width: 960px) {
  .man-vs-cta-offer-image {
    margin-right: 1px;
    margin-top: 1px;
    margin-bottom: -21px;
  }
}
</style>
