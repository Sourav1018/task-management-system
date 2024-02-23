<template>
  <q-layout>
    <SideLayout></SideLayout>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { useQuasar } from "quasar";
import { ref, defineComponent, computed } from "vue";
import SideLayout from "src/components/SideLayout.vue";

export default defineComponent({
  name: "MainLayout",
  components: {
    SideLayout,
  },
  setup() {
    const miniState = ref(true);
    const $q = useQuasar();
    const miniWidth = computed(() => {
      return $q.screen.xs ? 50 : 100;
    });

    return {
      miniWidth,
      miniState,
    };
  },
});
</script>

<style scoped>
.q-drawer {
  display: inline-block;
}
</style>
