<template>
  <div @click="handleCardClick">
    <h2>Look at my cat {{name}} in {{filter}}</h2>
    <div >
      <img :src="url" alt="cat">
    </div>
    <slot />
    <div>
      <button @click.stop="filter = 'standard'">Standard</button>
      <button @click.stop="filter = 'paint'">Painted</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'mode'],
  methods: {
    handleCardClick() {
      alert(`${this.name} is ${this.mode}`);
    },
  },
  data() {
    return {
      filter: 'standard',
    };
  },
  computed: {
    url() {
      const query = new URLSearchParams({ filter: this.filter });
      return `https://cataas.com/cat/${this.mode}?${query}`;
    },
  },
};
</script>
