<template>
  <div @click="handleCardClick" class="base">
    <h2>Look at my cat {{name}}</h2>
    <div class="img-container">
      <img :src="url" alt="cat" :key="url">
    </div>
    <slot />
    <div>
      <button @click.stop="selectFilter(null)">Standard</button>
      <button @click.stop="selectFilter('negative')">Negative</button>
      <button @click.stop="selectFilter('sepia')">Sepia</button>
    </div>
  </div>
</template>

<style scoped>
.base {
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 16em;
  height: 16em;
  padding: 1em;
  border: aquamarine solid;
  border-radius: 0.5em;
}
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
import { apply } from '@/api/CatApi';

export default defineComponent({
  emits: ['filterSelect'],
  props: ['cat'],
  inject: ['catsService'],
  computed: {
    url() {
      return apply(this.cat.data, { filter: this.cat.filter });
    },
  },
  methods: {
    handleCardClick() {
      this.catsService.findFact(this.cat);
    },
    selectFilter(filter) {
      this.catsService.selectFilter(this.cat, filter);
    },
  },
});
</script>
