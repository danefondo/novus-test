<template>
  <div>
    <ManVSMainMenu />
    <ManVSCover />
    <ManVSHeader />
    <ManVSSection v-for="(section, index) in sections" :index="index" :key="section.title" :section="section" />
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
import { sections } from "../config/sections";

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
      sections,
    };
  },
};
</script>
