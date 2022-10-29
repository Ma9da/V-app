<template>
  <component :is="currentLayout">
    <RouterView />
  </component>
</template>
<script>
import defaultLayout from "@/layout/Default.vue";

export default {
  components: {
    defaultLayout,
  },
  computed: {
    currentLayout() {
      const layout = this.$route.meta.layout || "default";
      return layout + "Layout";
    },
  },
};
</script>

<style scoped></style>
