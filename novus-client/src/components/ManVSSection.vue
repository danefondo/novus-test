<template>
  <section class="man-vs-section" :class="`man-vs-section--${section.position}`">
    <div class="man-vs-section__content" :class="`man-vs-section__content--${section.type}`" :style="sectionStyles">
      <h2 class="man-vs-section__title">{{ section.title }}</h2>
      <p class="man-vs-section__description" :style="paragraphStyles">
        {{ isMobileOrDesktopDescription }}
      </p>
    </div>
    <div class="man-vs-section__image">
      <img :src="isMobileOrDesktopImage" :alt="isMobileOrDesktopImageAlt" loading="lazy" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
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
      minDesignWidth: 414,
      maxDesignWidth: 1440,
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
    isMobileOrDesktopDescription() {
      if (this.windowWidth <= 948) {
        return this.section.mobileDescription;
      }
      return this.section.description;
    },
    isMobileOrDesktopImage() {
      if (this.index === 5 && this.windowWidth <= 948) {
        return require("../assets/man-vs-section-6-miracle.webp");
      }
      return this.section.image;
    },
    isMobileOrDesktopImageAlt() {
      if (this.index === 5 && this.windowWidth <= 948) {
        return this.section.mobileAlt;
      }
      return this.section.alt;
    },
    sectionStyles() {
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

      const content = this.section.content;
      return {
        paddingLeft: getClamp(content.paddingMinLeft, content.paddingMaxLeft),
        paddingRight: getClamp(content.paddingMinRight, content.paddingMaxRight),
        paddingTop: getClamp(content.paddingMinTop, content.paddingMaxTop),
        paddingBottom: getClamp(content.paddingMinBottom, content.paddingMaxBottom),
      };
    },
    paragraphStyles() {
      const { w414, w948, w949, w1440 } = this.section.paragraph;
      return {
        "--pw-414": `${w414}px`,
        "--pw-948": `${w948}px`,
        "--pw-949": `${w949}px`,
        "--pw-1440": `${w1440}px`,
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
  align-items: flex-start;
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
  height: 100%;
  object-fit: cover;
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
/* 0–413px: small phones, exactly w414 */
@media (max-width: 413px) {
  .man-vs-section__description {
    width: var(--pw-414);
  }
}

/* 414–948px: fluid w414→w948 */
@media (min-width: 414px) and (max-width: 948px) {
  .man-vs-section__description {
    width: clamp(var(--pw-414), calc(var(--pw-414) + (100vw - 414px) * ((var(--pw-948) - var(--pw-414)) / (948 - 414))), var(--pw-948));
  }
}

/* 949–1440px: fluid w949→w1440 */
@media (min-width: 949px) and (max-width: 1440px) {
  .man-vs-section__description {
    width: clamp(var(--pw-949), calc(var(--pw-949) + (100vw - 949px) * ((var(--pw-1440) - var(--pw-949)) / (1440 - 949))), var(--pw-1440));
  }
}

@media (width: 414px) {
  .man-vs-section__description {
    width: var(--pw-414);
  }
}

@media (width: 1440px) {
  .man-vs-section__description {
    width: var(--pw-1440);
  }
}

/* 1441px+: no width cap at all */
@media (min-width: 1441px) {
  .man-vs-section__description {
    width: auto;
    max-width: none;
  }
}
</style>
