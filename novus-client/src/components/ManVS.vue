<template>
  <div>
    <ManVSMainMenu />
    <ManVSCover />
    <ManVSHeader />
    <ManVSSection v-for="(section, index) in sections" :index="index" :key="section.title" :maxDesignWidth="maxDesignWidth" :minDesignWidth="minDesignWidth" :section="section" />
    <ManVSCTA />
    <ManVSFooter />
  </div>
</template>

<script>
import ManVSHeader from "./ManVSHeader.vue";
import ManVSSection from "./ManVSSection.vue";
import ManVSCTA from "./ManVSCTA.vue";
import ManVSFooter from "./ManVSFooter.vue";
import ManVSCover from "./ManVSCover.vue";
import ManVSMainMenu from "./ManVSMainMenu.vue";

export default {
  components: {
    ManVSHeader,
    ManVSSection,
    ManVSCTA,
    ManVSFooter,
    ManVSCover,
    ManVSMainMenu,
  },
  data() {
    return {
      maxDesignWidth: 1440,
      minDesignWidth: 414,
      sections: [
        {
          title: "1. Luxury Sheets Are Being Hit With Tariffs. Ours Aren’t.",
          description:
            "Many premium beddings brands source their materials from overseas—then pass import tariffs directly onto you. Our premium Sheets are designed to deliver luxury, cooling, and cleanliness without the markup. You get the same high-end quality (or better), without the government taking a cut.",
          image: require("../assets/man-vs-section-1.png"),
          type: "light",
          position: "left",
          minLeft: 34,
          maxLeft: 112,
          minRight: 14,
          maxRight: 112,
          minTop: 40,
          maxTop: 184,
          minBottom: 33,
          maxBottom: 187,
        },
        {
          title: "2. Space-Age Innovation Without Space-Age Prices",
          description:
            "Our temperature-regulating sheets were inspired by the same materials NASA uses to keep astronauts cool. And thanks to our unique approach to sourcing and manufacturing, you won’t see those savings eaten up by hidden costs or extra duties. Just smarter comfort, built for Earth.",
          image: require("../assets/man-vs-section-2.png"),
          type: "dark",
          position: "right",
          minLeft: 34,
          maxLeft: 105,
          minRight: 35,
          maxRight: 105,
          minTop: 40,
          maxTop: 199,
          minBottom: 53,
          maxBottom: 198,
        },
        {
          title: "3. Fewer Washes = Lower Water Bills = Big Wins",
          description:
            "Our silver-infused fibers fight bacteria and odors naturally. That means you can wash less, save more, and feel fresher every night. Traditional sheets just can’t compete—and every unnecessary wash is money down the drain.",
          image: require("../assets/man-vs-section-3.png"),
          type: "light",
          position: "left",
          minLeft: 34,
          maxLeft: 111,
          minRight: 35,
          maxRight: 113,
          minTop: 40,
          maxTop: 199,
          minBottom: 37,
          maxBottom: 198,
        },
        {
          title: "4. Why Pay 2-3x More For Sheets That Do Less?",
          description:
            "Most “luxury” brands aren’t antibacterial. They don’t regulate temperature. And they certainly don’t offer real savings. Our premium Sheets deliver softness, cleanliness, and cooling in one high-tech package—without tariff bloat.",
          image: require("../assets/man-vs-section-4.png"),
          type: "dark",
          position: "right",
          minLeft: 34,
          maxLeft: 110,
          minRight: 38,
          maxRight: 97,
          minTop: 27,
          maxTop: 201,
          minBottom: 53,
          maxBottom: 202,
        },
        {
          title: "5. The Hidden Cost of Dirty Sheets? Your Skin.",
          description:
            "Regular sheets trap bacteria that irritate skin and clog pores. Our silver-infused premium Sheets help reduce up to 99.7% of bacteria growth, making them a game-changer for anyone who wants clearer skin and fewer breakouts.",
          image: require("../assets/man-vs-section-5.png"),
          type: "light",
          position: "left",
          minLeft: 34,
          maxLeft: 120,
          minRight: 35,
          maxRight: 121,
          minTop: 40,
          maxTop: 199,
          minBottom: 47,
          maxBottom: 198,
        },
        {
          title: "6. Try Them. Love Them. Or Get Your Money Back.",
          description:
            "No fine print. No hassle. No tariffs. If you don’t love our premium fabric sheets after 30 nights of better sleep, we’ll refund every cent. We’re confident you’ll never look at regular sheets the same way again.",
          image: require("../assets/man-vs-section-6.png"),
          type: "dark",
          position: "right",
          minLeft: 34,
          maxLeft: 87,
          minRight: 33,
          maxRight: 84,
          minTop: 39,
          maxTop: 212,
          minBottom: 62,
          maxBottom: 211,
        },
      ],
    };
  },
};
</script>
