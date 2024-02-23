<template>
  <q-page class="flex">
    <TaskHeader />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import TaskHeader from "pages/Task/Taskcomponents/TaskHeader.vue";
export default defineComponent({
  name: "TaskIndex",
  components: {
    TaskHeader,
  },
});
</script>
