<template>
  <q-list>
    <template v-for="(menuItem, index) in menuList" :key="index">
      <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
        <q-item-section avatar>
          <q-icon :name="menuItem.icon" />
        </q-item-section>
        <q-item-section>
          {{ menuItem.label }}
        </q-item-section>
      </q-item>
      <q-separator :key="'sep' + index" v-if="menuItem.separator" />
    </template>
  </q-list>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SideBarMenu",
});
</script>
