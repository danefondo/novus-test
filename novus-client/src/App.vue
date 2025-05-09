<template>
  <div id="app">
    <ManVS />
  </div>
</template>

<script>
import ManVS from "./components/ManVS.vue";

export default {
  name: "App",
  components: {
    ManVS,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap");

@font-face {
  font-family: "Brandon Grotesque";
  src: url("../public/fonts/BrandonGrotesque/Brandon_Grotesque_light.otf") format("opentype");
  font-weight: 300;
  font-display: swap;
  font-style: normal;
}
@font-face {
  font-family: "Brandon Grotesque";
  src: url("../public/fonts/BrandonGrotesque/Brandon_Grotesque_regular.otf") format("opentype");
  font-weight: 400;
  font-display: swap;
  font-style: normal;
}
@font-face {
  font-family: "Brandon Grotesque";
  src: url("../public/fonts/BrandonGrotesque/Brandon_Grotesque_medium.otf") format("opentype");
  font-weight: 500;
  font-display: swap;
  font-style: normal;
}
/* Thin (100) */
@font-face {
  font-family: "Brandon Grotesque";
  src: url("../public/fonts/BrandonGrotesque/BrandonGrotesque-Thin.woff2") format("woff2"), url("../public/fonts/BrandonGrotesque/BrandonGrotesque-Thin.woff") format("woff");
  font-weight: 100;
  font-style: normal;
}

/* Light (300) */
@font-face {
  font-family: "Brandon Grotesque";
  src: url("../public/fonts/BrandonGrotesque/BrandonGrotesque-Light.woff2") format("woff2"), url("../public/fonts/BrandonGrotesque/BrandonGrotesque-Light.woff") format("woff");
  font-weight: 300;
  font-style: normal;
}

/* Regular (400) */
@font-face {
  font-family: "Brandon Grotesque";
  src: url("../public/fonts/BrandonGrotesque/BrandonGrotesque-Regular.woff2") format("woff2"), url("../public/fonts/BrandonGrotesque/BrandonGrotesque-Regular.woff") format("woff");
  font-weight: 400;
  font-style: normal;
}

/* Medium (450) — Custom weight */
@font-face {
  font-family: "Brandon Grotesque";
  src: url("../public/fonts/BrandonGrotesque/BrandonGrotesque-Medium.woff2") format("woff2"), url("../public/fonts/BrandonGrotesque/BrandonGrotesque-Medium.woff") format("woff");
  font-weight: 450;
  font-style: normal;
}

/* Bold (700) */
@font-face {
  font-family: "Brandon Grotesque";
  src: url("../public/fonts/BrandonGrotesque/BrandonGrotesque-Bold.woff2") format("woff2"), url("../public/fonts/BrandonGrotesque/BrandonGrotesque-Bold.woff") format("woff");
  font-weight: 700;
  font-style: normal;
}

/* Black (900) */
@font-face {
  font-family: "Brandon Grotesque";
  src: url("../public/fonts/BrandonGrotesque/BrandonGrotesque-Black.woff2") format("woff2"), url("../public/fonts/BrandonGrotesque/BrandonGrotesque-Black.woff") format("woff");
  font-weight: 900;
  font-style: normal;
}
#app {
  font-family: "Brandon Grotesque", Avenir, Helvetica, Arial, sans-serif;
}
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  font-family: "Brandon Grotesque";
}
p,
h1,
h2,
h3 {
  margin: 0px;
  padding: 0px;
}
h1,
h2 {
  font-family: "Brandon Grotesque";
  font-size: 38px;
  font-weight: bold;
  line-height: 46px;
  letter-spacing: -0.54px;
}
/* svg {
  width: 100%;
  height: 100%;
  display: block;
} */
</style>
