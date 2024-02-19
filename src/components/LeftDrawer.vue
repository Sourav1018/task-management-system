<template>
  <q-drawer
    show-if-above
    :breakpoint="500"
    :width="drawerWidth"
    bordered
    side="left"
  >
    <q-list>
      <div class="row no-wrap q-pa-sm">
        <q-img
          src="https://img.freepik.com/free-vector/illustration-circle-stamp-banner-vector_53876-27183.jpg?w=740&t=st=1708293617~exp=1708294217~hmac=7f727a39067d71259b3c7632abcf34e743819ab16fc43cbd81b4890cdde58ef9"
        />
      </div>
      <q-separator inset />
      <q-item clickable>
        <q-item-section avatar>
          <q-icon name="mdi-calendar-check-outline" color="grey" />
        </q-item-section>
        <q-separator />
      </q-item>
    </q-list>
    <!-- <q-item clickable v-ripple> </q-item> -->
  </q-drawer>
</template>

<script>
import { useQuasar } from "quasar";
import { computed } from "vue";
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "LeftDrawer",

  setup() {
    const miniState = ref(true);
    const $q = useQuasar();
    const drawerWidth = computed(() => {
      return $q.screen.xs ? 80 : 70;
    });
    return {
      miniState,
      drawerWidth,
    };
  },
});
</script>
