 <template>
   <section>
     <CatCard name="Steve" mode="cute">
       <p>Isn't he cute?</p>
     </CatCard>
     <CatCard name="Carol" mode="sleepy">
       <p>Isn't she sleepy?</p>
     </CatCard>
     <CatCard name="Matilda" mode="evil">
       <p>Isn't she evil?</p>
     </CatCard>
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
import CatCard from '@/CatCard.vue';

export default {
  components: { CatCard },
};
</script>
