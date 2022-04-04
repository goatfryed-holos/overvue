<template>
  <wired-card :fill="isWithFill ? 'orangered' : ''" >
    <template v-if="$slots.header">
      <slot name="header" />
      <wired-divider />
    </template>
    <slot />
    <template v-if="$slots.actions">
      <wired-divider />
      <slot name="actions" :toggleFill="toggleFill" />
    </template>
  </wired-card>
</template>

<style>
wired-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      isWithFill: false,
    };
  },
  methods: {
    toggleFill() {
      this.isWithFill = !this.isWithFill;
    },
  },
});
</script>
