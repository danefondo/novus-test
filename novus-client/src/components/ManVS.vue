<template>
  <div>
    <ManVSNav />
    <ManVSCover />
    <ManVSHeader />
    <ManVSSection v-for="(section, index) in sections" :index="index" :key="section.title" :section="section" />
    <ManVSCTA />
    <ManVSFooter />
  </div>
</template>

<script>
import ManVSNav from "./ManVSNav.vue";
import ManVSCover from "./ManVSCover.vue";
import ManVSHeader from "./ManVSHeader.vue";
import ManVSSection from "./ManVSSection.vue";
import ManVSCTA from "./ManVSCTA.vue";
import ManVSFooter from "./ManVSFooter.vue";
import { sections } from "../config/sections";

export default {
  components: {
    ManVSNav,
    ManVSCover,
    ManVSHeader,
    ManVSSection,
    ManVSCTA,
    ManVSFooter,
  },
  computed: {
    sections: () => sections,
  },
};
</script>
