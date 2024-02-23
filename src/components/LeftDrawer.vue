<template>
  <q-drawer
    show-if-above
    :breakpoint="500"
    :width="drawerWidth"
    bordered
    side="left"
  >
    <div class="row no-wrap justify-center q-pa-none q-my-sm">
      <q-img
        src="https://img.freepik.com/free-vector/illustration-circle-stamp-banner-vector_53876-27183.jpg?w=740&t=st=1708293617~exp=1708294217~hmac=7f727a39067d71259b3c7632abcf34e743819ab16fc43cbd81b4890cdde58ef9"
      />
    </div>

    <q-separator class="q-my-sm" inset />

    <q-list class="flex flex-center">
      <q-item
        clickable
        class="q-pa-none"
        exact
        to="/projects"
        active-class="active-element"
      >
        <q-item-section avatar class="q-pa-none flex-center">
          <q-icon name="fa-solid fa-folder" color="grey-10" />
        </q-item-section>
      </q-item>

      <q-separator class="q-my-sm" inset />

      <q-item
        clickable
        class="q-pa-none"
        exact
        to="/task"
        active-class="active-element"
      >
        <q-item-section avatar class="q-pa-none flex-center">
          <q-icon name="fa-solid fa-list-check" color="grey-10" />
        </q-item-section>
      </q-item>
    </q-list>
    <div class="drawer-footer flex flex-center">
      <q-item
        clickable
        to="/profile"
        exact
        active-class="active-element"
        class="q-pa-none"
      >
        <q-item-section avatar class="q-pa-none flex-center">
          <q-icon name="fa-solid fa-user" color="grey-10" />
        </q-item-section>
      </q-item>

      <q-separator class="q-my-sm" inset />

      <q-item clickable @click="signOut" class="q-pa-none">
        <q-item-section avatar class="q-pa-none flex-center">
          <q-icon name="fa-solid fa-right-from-bracket" color="grey-10" />
        </q-item-section>
      </q-item>
    </div>
  </q-drawer>
</template>

<script>
import { useQuasar } from "quasar";
import { ref, defineComponent, computed } from "vue";

export default defineComponent({
  name: "LeftDrawer",

  setup() {
    const miniState = ref(true);
    const $q = useQuasar();
    const drawerWidth = computed(() => {
      return $q.screen.xs ? 80 : 70;
    });

    function signOut() {
      console.log("logout sucessfully");
    }

    return {
      miniState,
      drawerWidth,
      signOut,
    };
  },
});
</script>

<style scoped>
.drawer-footer {
  position: absolute;
  bottom: 20px;
  margin-left: 8px;
  margin-right: 8px;
  left: 0;
  right: 0;
  text-align: center;
}

.active-element {
  background: #4285f4;
  border-radius: 20px;
}
</style>
