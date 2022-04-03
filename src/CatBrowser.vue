<template>
  <CatCard v-for="cat in cats" :key="cat.id"
          :name="cat.name" :url="applyCatFilters(cat)"
           @filterSelect="cat.filter = $event"
  />
</template>

<script>
import { defineComponent } from 'vue';
import { getRandomCat, apply } from '@/api/CatApi';
import CatCard from '@/CatCard.vue';

export default defineComponent({
  components: { CatCard },
  data() {
    return {
      cats: [],
    };
  },
  async mounted() {
    this.cats = (await Promise.all(
      Array.from({ length: 5 }, () => getRandomCat()),
    )).map((cat) => ({
      data: cat,
      name: 'Steve',
      filter: null,
    }));
  },
  methods: {
    applyCatFilters(cat) {
      return apply(cat.data, { filter: cat.filter });
    },
  },
});
</script>
