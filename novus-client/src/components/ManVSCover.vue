<template>
  <div class="man-vs-cover">
    <img
      src="/images/man-vs-cover-image.avif"
      srcset="/images/man-vs-cover-image.avif"
      fetchpriority="high"
      decoding="async"
      alt="Woman sleeping comfortably under Miracle Made sheets"
      class="man-vs-cover__image"
    />
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
  height: clamp(227px, calc(128.91px + 23.68vw), 470px);
}
</style>
