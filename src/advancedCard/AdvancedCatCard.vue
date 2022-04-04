<template>
  <MyCard class="host">
    <template #header>
      <h2>This is {{cat.name}}</h2>
    </template>
    <template #default>
      <div class="centered">
        <FittedImage :src="url" alt="cat" :key="url"
        />
      </div>
    </template>
    <template #actions="{toggleFill}">
      <div class="actions">
        <button @click.stop="selectFilter(null)">Standard</button>
        <button @click.stop="selectFilter('negative')">Negative</button>
        <button @click.stop="selectFilter('sepia')">Sepia</button>
        <button @click.stop="toggleFill">Toggle Card Style</button>
      </div>
    </template>
  </MyCard>
</template>

<style scoped>
.actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 16em;
  width: 16em
}
</style>

<script>
import { defineComponent } from 'vue';
import useCatController from '@/advancedCard/useCatController';
import MyCard from '@/advancedCard/MyCard.vue';
import FittedImage from '@/advancedCard/FittedImage.vue';

export default defineComponent({
  components: {
    FittedImage,
    MyCard,
  },
  props: ['cat'],
  setup(props) {
    return useCatController(props);
  },
});
</script>
