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
svg {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
