<template>
  <footer class="man-vs-footer">
    <div class="man-vs-footer__inner">
      <div class="man-vs-footer__logo">
        <ManVSLogo />
      </div>
      <div class="man-vs-footer__columns">
        <div class="man-vs-footer__column">
          <p class="man-vs-footer__column-title man-vs-footer__column-title--novus">NOVUS STUDIO LLC</p>
          <p class="man-vs-footer__column-title man-vs-footer__column-title--miracle">MIRACLE BRAND LLC</p>
          <div class="man-vs-footer__column-double">
            <div class="man-vs-footer__column-small">
              <p class="man-vs-footer__column-item">111 Town Square Place</p>
              <p class="man-vs-footer__column-item">Suite 1203 PMB 1065</p>
              <p class="man-vs-footer__column-item">Jersey City, New Jersey 07310</p>
            </div>
            <div class="man-vs-footer__column-small">
              <p class="man-vs-footer__column-item">1501 Haines St.</p>
              <p class="man-vs-footer__column-item">Jacksonville, FL 32206</p>
              <p class="man-vs-footer__column-item">(888) 683-4875</p>
            </div>
          </div>
        </div>
        <div class="man-vs-footer__column">
          <p class="man-vs-footer__column-title">INFO</p>
          <p class="man-vs-footer__column-item bold-footer-text">Shipping Information</p>
          <p class="man-vs-footer__column-item">UPS ground 2-7 business days</p>
          <p class="man-vs-footer__column-item bold-footer-text">Business Licensing Information</p>
          <p class="man-vs-footer__column-item">EIN: 83-3059849</p>
        </div>
        <div class="man-vs-footer__column man-vs-footer__column--right">
          <p class="man-vs-footer__column-title">CUSTOMER SUPPORT</p>
          <div class="man-vs-footer__contact">
            <div class="man-vs-footer__icon">
              <EmailIcon />
            </div>
            <a href="mailto:hello@novus.studio" class="man-vs-footer__email man-vs-footer__email--novus">hello@novus.studio</a>
            <a href="mailto:hello@miraclebrand.co" class="man-vs-footer__email man-vs-footer__email--miracle">hello@miraclebrand.co</a>
          </div>
        </div>
      </div>
      <div class="man-vs-footer__divider"></div>
      <div class="man-vs-footer__disclaimer">
        <p><span class="bold-footer-text">Disclaimer:</span> this is an advertisement, using a fictional customer but discussing experiences that are common to real customers of Miracle brand.</p>
        <div class="man-vs-footer__disclaimer-spacing"></div>
        <!-- ADDED '.' in the end of below sentence which did NOT exist in the original design -->
        <p>This is an advertisement and not an actual news article, blog, or consumer protection update.</p>
        <div class="man-vs-footer__disclaimer-spacing"></div>
        <p>
          The story depicted on this site and the person depicted in the story are not actual news. Rather, this story is based on the results that some people who have used these products have
          achieved. The results portrayed in the story and in the comments are illustrative, and may not be the results that you achieve with these products. This page could receive compensation for
          clicks on or purchase of products featured on this site.
        </p>
      </div>
      <div class="man-vs-footer__bottom">
        <p class="man-vs-footer__copyright man-vs-footer__copyright--novus">Copyright 2022. Novus Studio LLC. All rights reserved.</p>
        <p class="man-vs-footer__copyright man-vs-footer__copyright--miracle">Copyright 2022. Miracle Brand LLC. All rights reserved.</p>
        <div class="man-vs-footer__links">
          <a href="#" class="man-vs-footer__link">Privacy Policy</a>
          <div class="man-vs-footer__separator man-vs-footer__separator-left"></div>
          <a href="#" class="man-vs-footer__link">Care Guide</a>
          <div class="man-vs-footer__separator man-vs-footer__separator-right"></div>
          <a href="#" class="man-vs-footer__link">Terms of Use</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import ManVSLogo from "../assets/svgs/ManVSLogo.vue";
import EmailIcon from "../assets/svgs/EmailIcon.vue";

export default {
  components: {
    ManVSLogo,
    EmailIcon,
  },
};
</script>

<style>
.man-vs-footer {
  background-color: #e4f2fb;
  padding-top: clamp(50.5px, calc(44.04px + 1.56vw), 66.5px); /* 50.5px @414 → 66.5px @1440 */
  padding-bottom: clamp(42px, calc(65.87px - 1.66vw), 59px); /* 42px @414 → 59px @1440 */
  padding-left: clamp(25px, calc(-31.45px + 13.64vw), 165px); /* 25px @414 → 165px @1440 */
  /* Real measurement was 21px for right side, but text breaks at 25px */
  padding-right: clamp(26px, calc(-31.45px + 13.64vw), 165px); /* 25px @414 → 165px @1440 */
}
.man-vs-footer__logo {
  width: 114px;
  height: 26px;
}
.man-vs-footer__columns {
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  margin-bottom: 32px;
}
.man-vs-footer__column-double {
  display: flex;
  flex-direction: row;
}
.man-vs-footer__column-item {
  font-size: 14px;
  line-height: 26px;
  font-weight: 400;
  letter-spacing: 0px;
  color: #00207d;
  white-space: nowrap;
}
.man-vs-footer__divider {
  height: 1px;
  width: 100%;
  opacity: 0.2;
  border: 1px solid #fff;
  margin-bottom: clamp(23px, calc(20.18px + 0.682vw), 30px);
}
.man-vs-footer__disclaimer {
  margin-bottom: clamp(35px, calc(51.84px - 1.17vw), 47px); /* 35px @414 → 47px @1440 */
}
.man-vs-footer__disclaimer p {
  font-size: 12px;
  line-height: 14px;
  color: #00207d;
  font-weight: 400;
}
.man-vs-footer__contact {
  display: flex;
  align-items: center;
}
.man-vs-footer__email {
  color: #00207d;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: 0px;
  text-decoration: none;
}
.man-vs-footer__email:hover {
  color: #45578d;
}
.man-vs-footer__icon {
  height: 20px;
  width: 27.2px;
  margin-right: 41px;
}
.man-vs-footer__column-title {
  font-size: 12px;
  letter-spacing: 2px;
  color: #00207d;
  font-weight: bold;
  margin-bottom: 11px;
}
.man-vs-footer__bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.man-vs-footer__copyright {
  width: 285px;
}
.man-vs-footer__copyright,
.man-vs-footer__link {
  font-size: 12px;
  color: #00207d;
  font-weight: 400;
  line-height: 22px;
}
.man-vs-footer__link {
  cursor: pointer;
  text-decoration: none;
}
.man-vs-footer__links {
  display: flex;
  flex-direction: row;
  align-items: center;
  /* margin-right: 2px; */
}
.man-vs-footer__separator {
  width: 1px;
  height: 10px;
  background-color: #fff;
}
.man-vs-footer__separator-left {
  margin-left: 11px;
  margin-right: 14px;
}
.man-vs-footer__separator-right {
  margin-left: 12px;
  margin-right: 13px;
}
.man-vs-footer__column-small:first-child {
  margin-right: 38px;
}
.man-vs-footer__column:first-child {
  margin-right: clamp(80px, calc(54.98px + 6.043vw), 142px);
}
.man-vs-footer__column--right {
  margin-left: auto;
  text-align: right;
}
.man-vs-footer__disclaimer-spacing {
  height: 14px;
}
.bold-footer-text {
  font-weight: bold;
}
.text-align-right {
  text-align: right;
}
@media (max-width: 1230px) {
  .man-vs-footer__columns {
    flex-wrap: wrap;
    margin-bottom: 25px;
  }
  .man-vs-footer__column--right {
    margin-left: 0;
    flex: 0 0 100%;
    margin-top: 35px;
    text-align: left;
  }
  .man-vs-footer__column:nth-child(2) {
    margin-left: auto;
  }
  .man-vs-footer__icon {
    margin-right: 12px;
  }
}
@media (max-width: 768px) {
  .man-vs-footer__column:nth-child(2) {
    margin-left: 0;
    flex: 0 0 100%;
    margin-top: 35px;
  }
  .man-vs-footer__column:first-child {
    margin-right: 0;
  }
  .man-vs-footer__column-small:first-child {
    margin-right: 0;
    flex: 0 0 80%;
  }
  .man-vs-footer__column-small:nth-child(2) {
    margin-left: auto;
  }
}
@media (max-width: 700px) {
  .man-vs-footer__bottom {
    flex-direction: column-reverse;
  }
  .man-vs-footer__links {
    margin-bottom: 20px;
  }
  .man-vs-footer__separator {
    background-color: #00207d;
  }
}
/* CUSTOM TEXT MODIFICATIONS FOR 414px TO MATCH FINAL DESIGN */
.man-vs-footer__copyright--miracle,
.man-vs-footer__email--miracle,
.man-vs-footer__column-title--miracle {
  display: none;
}
@media (max-width: 948px) {
  .man-vs-footer__copyright--novus {
    display: none;
  }
  .man-vs-footer__copyright--miracle {
    display: block;
  }
  .man-vs-footer__email--novus {
    display: none;
  }
  .man-vs-footer__email--miracle {
    display: block;
  }
  .man-vs-footer__column-title--novus {
    display: none;
  }
  .man-vs-footer__column-title--miracle {
    display: block;
  }
}
</style>
