<template>
  <div>
    <h2>Look at my cat {{name}}</h2>
    <div>
      <img :src="`https://cataas.com/cat/${mode}`" alt="cat">
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: ['name', 'mode'],
};
</script>
