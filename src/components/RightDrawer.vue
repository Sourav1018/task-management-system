<template>
  <q-drawer
    show-if-above
    :breakpoint="500"
    :width="drawerWidth"
    bordered
    side="right"
  >
  </q-drawer>
</template>

<script>
import { useQuasar } from "quasar";
import { ref, defineComponent, computed } from "vue";

export default defineComponent({
  name: "RightDrawer",

  setup() {
    const miniState = ref(true);
    const $q = useQuasar();

    const drawerWidth = computed(() => {
      return $q.screen.xs ? 200 : 300;
    });

    return {
      miniState,
      drawerWidth,
    };
  },
});
</script>
