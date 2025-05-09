<template>
  <section class="man-vs-section" :class="`man-vs-section--${section.position}`">
    <div class="man-vs-section__content" :class="`man-vs-section__content--${section.type}`" :style="sectionStyles">
      <h2 class="man-vs-section__title">{{ section.title }}</h2>
      <p class="man-vs-section__description">{{ section.description }}</p>
    </div>
    <div class="man-vs-section__image">
      <img :src="novusOrMiracleImage" alt="Man VS" loading="lazy" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    maxDesignWidth: {
      type: Number,
      default: 1440,
    },
    minDesignWidth: {
      type: Number,
      default: 414,
    },
    section: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    window.addEventListener("resize", this.updateWindowWidth);
    this.updateWindowWidth();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateWindowWidth);
  },
  computed: {
    novusOrMiracleImage() {
      /** Show custom imageat 414px to match design */
      if (this.index === 5 && this.windowWidth <= 414) {
        return require("../assets/man-vs-section-6-miracle.png");
      }
      return this.section.image;
    },
    sectionStyles() {
      const { minLeft, maxLeft, minRight, maxRight, minTop, maxTop, minBottom, maxBottom } = this.section;

      const span = this.maxDesignWidth - this.minDesignWidth;

      const getClamp = (min, max) => {
        const slope = ((max - min) / span) * 100;
        const intercept = min - (slope / 100) * this.minDesignWidth;
        return `clamp(
          ${min}px,
          calc(${intercept.toFixed(2)}px + ${slope.toFixed(2)}vw),
          ${max}px
        )`;
      };

      return {
        paddingLeft: getClamp(minLeft, maxLeft),
        paddingRight: getClamp(minRight, maxRight),
        paddingTop: getClamp(minTop, maxTop),
        paddingBottom: getClamp(minBottom, maxBottom),
      };
    },
  },
  methods: {
    updateWindowWidth() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>

<style>
.man-vs-section {
  display: flex;
  flex-direction: row;
}
.man-vs-section--left {
  flex-direction: row;
}
.man-vs-section--right {
  flex-direction: row-reverse;
}
.man-vs-section__content {
  width: 50%;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /*   padding: 0px 112px; */
  text-align: left;
}
.man-vs-section__title {
  font-family: "Brandon Grotesque";
  font-size: 38px;
  font-weight: bold;
  line-height: 46px;
  letter-spacing: -0.54px;
  font-size: clamp(32px, calc(29.58px + 0.5848vw), 38px); /* 32px @414 → 38px @1440 */
  line-height: clamp(36px, calc(31.97px + 0.9746vw), 46px); /* 36px @414 → 46px @1440 */
  letter-spacing: clamp(-0.54px, calc(-0.4277px - 0.0078vw), -0.46px); /* -0.46px @414 → -0.54px @1440 */
  margin-bottom: 16px;
}
.man-vs-section__description {
  font-weight: 400;
  font-size: clamp(16px, calc(15.2px + 0.195vw), 18px); /* 16px @414 → 18px @1440 */
  letter-spacing: 0px;
}
.man-vs-section__image {
  width: 50%;
  max-width: 50%;
}
.man-vs-section__image img {
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  /* height: auto; */
  height: 100%;
  /* object-fit: contain; */
  display: block;
}
.man-vs-section__content--light {
  background-color: #e4f2fb;
}
.man-vs-section__content--light .man-vs-section__title {
  color: #00227d;
}
.man-vs-section__content--light .man-vs-section__description {
  color: #333b47;
}
.man-vs-section__content--dark {
  background-color: #00227d;
}
.man-vs-section__content--dark .man-vs-section__title {
  color: #fff;
}
.man-vs-section__content--dark .man-vs-section__description {
  color: #fff;
}
@media (max-width: 948px) {
  /* stack everything vertically */
  .man-vs-section {
    flex-direction: column;
  }
  .man-vs-section--right {
    flex-direction: column-reverse;
  }
  .man-vs-section--left {
    flex-direction: column-reverse;
  }
  .man-vs-section__content,
  .man-vs-section__image {
    width: 100%;
    max-width: 100%;
  }
}
</style>
