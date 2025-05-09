<template>
  <div class="man-vs-cover">
    <img class="man-vs-cover__image" src="../assets/man-vs-cover-image.jpg" alt="Man VS" />
  </div>
</template>

<style>
.man-vs-cover__image {
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
  object-position: 10% center;
  height: clamp(227px, /* mobile height */ calc(128.91px + 23.68vw), /* fluid interpolation */ 470px /* desktop height */);
}
</style>
