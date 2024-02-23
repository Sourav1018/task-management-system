<template>
  <LeftDrawer />
  <RightDrawer />
</template>

<script>
import { defineComponent } from "vue";
import LeftDrawer from "./LeftDrawer.vue";
import RightDrawer from "./RightDrawer.vue";

export default defineComponent({
  name: "SideLayout",
  components: {
    LeftDrawer,
    RightDrawer,
  },
  setup() {
    return {};
  },
});
</script>
