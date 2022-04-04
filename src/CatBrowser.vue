<template>
  <section>
    <AdvancedCatCard v-for="cat in cats" :key="cat.id"
             :cat="cat"
    />
  </section>
</template>

<style scoped lang="scss">
section {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  gap: 2em;
  flex-wrap: wrap;
}
</style>

<script>
import { defineComponent } from 'vue';
import { getRandomCat, apply } from '@/api/CatApi';
import CatCard from '@/CatCard.vue';
import AdvancedCatCard from '@/advancedCard/AdvancedCatCard.vue';

export default defineComponent({
  components: { AdvancedCatCard },
  props: ['cats'],
});
</script>
