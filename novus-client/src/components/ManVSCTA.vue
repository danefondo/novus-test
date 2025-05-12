<template>
  <section class="man-vs-cta">
    <ManVSCTAOfferImage class="man-vs-cta-offer-image--large-screen" />
    <div class="man-vs-cta__content">
      <h2 class="man-vs-cta__title">TARIFF-FREE COMFORT SALE <span class="man-vs-cta__title-promo">GET 20% OFF NOW</span></h2>
      <p class="man-vs-cta__content-text">
        <span class="darkblue-highlight">Beat the price hikes</span> and sleep better tonight. This <span class="red-highlight">limited time deal</span> is in high demand and stock keeps selling out.
      </p>
      <ManVSCTAOfferImage class="man-vs-cta-offer-image--small-screen" />
      <button class="man-vs-cta__button">
        <CheckIcon class="man-vs-cta__check-icon" />
        <span class="man-vs-cta__button-text">GET YOUR MIRACLE NOW!</span>
      </button>
      <div class="man-vs-cta__timer">
        <p class="man-vs-cta__timer-urgency-text">DEAL ENDING IN:</p>
        <div class="man-vs-cta__timer-urgency-time-container">
          <p class="man-vs-cta__timer-urgency-time">13:52</p>
        </div>
      </div>
      <div class="man-vs-cta__urgency-container">
        <div class="man-vs-cta__urgency-container-item">
          <AlertIcon class="man-vs-cta__urgency-alert-icon" />
          <p>Sell-Out Risk:&nbsp;<span class="sell-out-risk-bold">High</span></p>
        </div>
        <div class="man-vs-cta__separator-line"></div>
        <div class="man-vs-cta__urgency-container-item">
          <CarIcon class="man-vs-cta__urgency-car-icon" />
          <p><span class="free-shipping-bold">FREE</span>&nbsp;shipping</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CheckIcon from "../assets/svgs/CheckIcon.vue";
import AlertIcon from "../assets/svgs/AlertIcon.vue";
import CarIcon from "../assets/svgs/CarIcon.vue";
import ManVSCTAOfferImage from "./ManVSCTAOfferImage.vue";

export default {
  components: {
    CheckIcon,
    AlertIcon,
    CarIcon,
    ManVSCTAOfferImage,
  },
};
</script>

<style scoped>
.man-vs-cta {
  width: 100%;
  max-width: 920px;
  margin: 0px auto;
  margin-top: clamp(49px, calc(44.56px + 1.07vw), 60px); /* 49px @414 → 60px @1440 */
  margin-bottom: clamp(48px, calc(43.16px + 1.17vw), 60px); /* 48px @414 → 60px @1440 */
  display: flex;
  align-items: center;
  padding-top: clamp(43px, calc(36.14px + 1.66vw), 60px);
  padding-bottom: clamp(31px, calc(29.38px + 0.39vw), 35px);
  padding-left: clamp(24px, calc(7.82px + 3.9vw), 64px);
  padding-right: clamp(25px, calc(12.9px + 2.93vw), 55px);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
.man-vs-cta-offer-image--small-screen {
  display: none;
}
.man-vs-cta__button {
  cursor: pointer;
  border: 1px solid #15963d;
  border-radius: 6px;
  background: linear-gradient(to bottom, #80ba08, #1d973d);
  padding-top: 14px;
  padding-bottom: 18px;
  max-width: 417px;
  margin-bottom: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  padding-left: clamp(25px, calc(8.05px + 4.09vw), 67px); /* 25px @414 → 67px @1440 */
  padding-right: clamp(22px, calc(10.7px + 2.73vw), 50px); /* 22px @414 → 50px @1440 */
}
.man-vs-cta__button:hover {
  background: linear-gradient(to bottom, #80ba08, #25c04e);
}
.man-vs-cta__button img {
  width: 19px;
  height: 13px;
}
.man-vs-cta__button-text {
  color: #fff;
  font-family: "Montserrat";
  font-size: clamp(16px, calc(14.38px + 0.39vw), 20px); /* 16 px @ 414 px  →  20 px @ 1440 px */
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  display: block;
  margin-left: 6px;
  white-space: nowrap;
}
.man-vs-cta__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 417px;
}
.man-vs-cta__content-text {
  width: 381px;
  margin-bottom: 11px;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  font-weight: 400;
  color: #012169;
}
.darkblue-highlight {
  color: #012169;
  font-weight: bold;
}
.red-highlight {
  color: #dc2c00;
  font-weight: bold;
}
.man-vs-cta__title {
  color: #00227d;
  font-weight: 400;
  font-size: 30px;
  line-height: clamp(31px, calc(29.4px + 0.39vw), 35px);
  letter-spacing: -0.43px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 12px;
}
.sell-out-risk-bold,
.free-shipping-bold {
  font-weight: bold;
}
.sell-out-risk-bold {
  color: #dd0000;
}
.free-shipping-bold {
  color: #012169;
}
.man-vs-cta__title-promo {
  font-weight: bold;
  white-space: nowrap;
}
.man-vs-cta__urgency-container {
  display: flex;
  background-color: #f5f5f5;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  padding-right: 64px;
  padding-left: 59px;
  height: 37px;
  max-width: 417px;
  padding-left: clamp(17px, calc(0.04px + 4.1vw), 59px); /* 17 → 59 */
  padding-right: clamp(14px, calc(-6.18px + 4.87vw), 64px); /* 14 → 64 */
}
.man-vs-cta__urgency-container-item {
  display: flex;
  align-items: center;
}
.man-vs-cta__urgency-container-item p {
  font-family: "Montserrat";
  display: flex;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0px;
  color: #012169;
  margin-top: -1px;
  white-space: nowrap;
}
.man-vs-cta__urgency-container-item img {
  width: 21px;
  height: 17px;
}
.man-vs-cta__separator-line {
  width: 1px;
  height: 13px;
  background-color: #012169;
  margin-left: clamp(13px, calc(2.9px + 2.44vw), 38px); /* 13 → 38 */
  margin-right: clamp(29px, calc(27.79px + 0.29vw), 32px); /* 29 → 32 */
}
.man-vs-cta__timer-urgency-text {
  font-size: 12px;
  font-weight: bold;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  text-transform: uppercase;
  color: #012169;
  height: 28px;
  margin-bottom: 2px;
}
.man-vs-cta__timer-urgency-time {
  font-weight: bold;
  font-size: 36px;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  color: #012169;
  height: 28px;
  margin-bottom: 8px;
}
.man-vs-cta__check-icon {
  width: 19px;
  height: 13px;
}
.man-vs-cta__urgency-alert-icon {
  margin-top: -3px;
  margin-right: 4px;
  width: 18px;
  height: 16px;
}
.man-vs-cta__urgency-car-icon {
  margin-top: -5px;
  margin-right: 10px;
  width: 18px;
  height: 18px;
}
@media (max-width: 960px) {
  .man-vs-cta-offer-image--small-screen {
    display: block;
  }
  .man-vs-cta-offer-image--large-screen {
    display: none;
  }
  .man-vs-cta {
    justify-content: center;
    width: unset;
    max-width: unset;
    /* Applying margin with initial 1440px width measured margins and final design margin; */
    margin-left: clamp(34px, calc(-57.13px + 22.02vw), 260px);
    margin-right: clamp(35px, calc(-56.13px + 22.02vw), 260px);
  }
  .man-vs-cta__content {
    /** Helps break title to next line */
    max-inline-size: clamp(240px, calc(169.28px + 17.09vw), 417px);
    inline-size: 100%;
    margin-inline: auto; /* center it */
  }
  .man-vs-cta__button {
    margin-bottom: 11px;
  }
  .man-vs-cta__title {
    margin-bottom: 15px;
  }
  .man-vs-cta__timer-urgency-time {
    font-weight: 400;
  }
}
@media (max-width: 576px) {
  .man-vs-cta__content-text {
    width: 100%;
    min-width: 271px;
  }
}
</style>
