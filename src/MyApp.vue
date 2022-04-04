<template>
 <CatBrowser :cats="cats" />
</template>

<script>
import CatBrowser from '@/CatBrowser.vue';
import { defineComponent } from 'vue';
import { getRandomCat } from '@/api/CatApi';
import faker from 'faker';

export default defineComponent({
  components: {
    CatBrowser,
  },
  data() {
    return {
      selected: null,
      cats: [],
    };
  },
  async mounted() {
    this.cats = (await Promise.all(
      Array.from({ length: 5 }, () => getRandomCat()),
    )).map((cat) => ({
      data: cat,
      name: faker.name.firstName(),
      filter: null,
    }));
  },
  provide() {
    return {
      catsService: {
        selectCat: (cat) => {
          this.selected = cat;
        },
        selectFilter(cat, filter) {
          cat.filter = filter;
        },
      },
    };
  },
});
</script>
