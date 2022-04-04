import { apply } from '@/api/CatApi';
import { computed, inject } from 'vue';

export default function useCatController({ cat }) {
  const catsService = inject('catsService');
  const url = computed(() => apply(cat.data, { filter: cat.filter }));
  const selectCat = () => catsService.selectCat(cat);
  const selectFilter = (filter) => catsService.selectFilter(cat, filter);

  return {
    url,
    selectCat,
    selectFilter,
  };
}
