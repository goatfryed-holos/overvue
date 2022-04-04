<template>
  <div class="img-container">
    <img :src="src" :alt="alt">
  </div>
</template>

<style scoped>
.img-container {
  flex-grow: 1;
  flex-basis: 0;
  flex-shrink: 1;
  min-height: 0;
}
img {
  display: block;
  max-width: 100%;
  max-height: 100%;
  object-fit: scale-down;
}
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['src', 'alt'],
});
</script>
