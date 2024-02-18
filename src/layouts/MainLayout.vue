<template>
  <q-layout>
    <LeftDrawer></LeftDrawer>
    <RightDrawer></RightDrawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { useQuasar } from "quasar";
import { ref, defineComponent, computed } from "vue";
import LeftDrawer from "src/components/LeftDrawer.vue";
import RightDrawer from "src/components/RightDrawer.vue";

export default defineComponent({
  name: "MainLayout",
  components: {
    LeftDrawer,
    RightDrawer,
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
