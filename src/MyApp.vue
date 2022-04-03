 <template>
   <section>
     <CatBrowser />
   </section>
 </template>

 <style lang="scss">
 section {
   display: flex;
   align-items: center;
   justify-content: center;
   min-height: 50vh;
   gap: 2em;

   > div {
     padding: 1em;
     border: aquamarine solid;
     border-radius: 0.5em;
   }
 }
 img {
   display: block;
   object-fit: cover;
   max-width: 20em;
   max-height: 20em;
 }
 </style>
<script>
import CatBrowser from '@/CatBrowser.vue';

export default {
  components: {
    CatBrowser,
  },
};
</script>
