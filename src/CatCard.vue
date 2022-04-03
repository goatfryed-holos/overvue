<template>
  <div @click="handleCardClick" class="base">
    <h2>Look at my cat {{name}}</h2>
    <div class="img-container">
      <img :src="url" alt="cat">
    </div>
    <slot />
    <div>
      <button @click.stop="$emit('filterSelect', null)">Standard</button>
      <button @click.stop="$emit('filterSelect', 'paint')">Painted</button>
      <button @click.stop="$emit('filterSelect', 'sepia')">Sepia</button>
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
export default {
  emits: ['filterSelect'],
  props: ['name', 'url'],
  methods: {
    handleCardClick() {
      alert(`${this.name} is ${this.mode}`);
    },
  },
};
</script>
