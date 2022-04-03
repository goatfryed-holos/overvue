<template>
  <div @click="handleCardClick">
    <h2>Look at my cat {{name}}</h2>
    <div >
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
