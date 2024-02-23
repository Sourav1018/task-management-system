<template>
  <q-card class="full-width header-box q-pl-md" flat square>
    <q-card-section class="q-pa-sm">
      <q-breadcrumbs>
        <q-breadcrumbs-el
          label="Projects"
          exact
          active-class="active-bread-menu"
          to="/projects"
          icon="fa-solid fa-folder-open"
        />
        <q-breadcrumbs-el label="smit" class="text-uppercase" />
      </q-breadcrumbs>
    </q-card-section>
    <q-card-section class="flex wrap q-pa-sm">
      <div class="text-h4 q-mr-md text-uppercase">smit</div>
      <q-btn flat round>
        <q-icon
          name="fa-solid fa-pen-to-square"
          class="project-name-edit-icon"
        ></q-icon
      ></q-btn>
    </q-card-section>
    <q-card-section class="q-pa-sm flex wrap">
      <div class="project-create-date q-mr-sm">
        <span>Created on:</span> Feb 24,2024
      </div>
      <div class="q-gutter-xs avatar-container">
        <q-avatar
          v-for="n in 5"
          :key="n"
          size="40px"
          class="overlapping q-ma-none"
          :style="`left: ${n * 25}px`"
        >
          <img :src="`https://cdn.quasar.dev/img/avatar${n + 1}.jpg`" />
        </q-avatar>
        <q-btn icon="plus" class="overlapping"></q-btn>
      </div>
      <div></div>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TaskHeader",
  setup() {
    return {};
  },
});
</script>

<style scoped>
.header-box {
  height: 150px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1) !important;
}

.active-bread-menu {
  transition: all 0.5s ease-out;
}

.active-bread-menu:hover {
  text-decoration: none;
  font-size: 16px;
}

.project-create-date span {
  color: #8d91a8;
}

.project-name-edit-icon {
  color: #72829a;
}

.overlapping {
  border: 2px solid white;
  position: absolute;
}

.avatar-container {
  position: relative;
}
</style>
