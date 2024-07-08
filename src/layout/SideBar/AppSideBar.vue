<script>
import { useAppStore } from "@/store";
import { Icon } from "@iconify/vue";
import { useRoute, useRouter } from "vue-router";

export default {
  components: {
    Icon,
  },

  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useAppStore();

    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };

    const onSelectItem = (url, indexKey) => {
      store.setSideBarActiveIndex(indexKey);
      if (route.path === url) return;
      router.push({
        path: url,
      });
    };

    return {
      handleOpen,
      handleClose,
      onSelectItem,
      store,
    };
  },
};
</script>

<template>
  <aside>
    <el-menu
      :default-active="store.sideBarActiveIndex"
      class="el-menu-side-bar"
      :collapse="store.menuSideBarCollapse"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item @click="onSelectItem('/', '1')" index="1">
        <el-icon><Icon icon="mdi:location" /></el-icon>
        <template #title>Home</template>
      </el-menu-item>

      <el-menu-item @click="onSelectItem('/about', '2')" index="2">
        <el-icon><Icon icon="mdi:location" /></el-icon>
        <template #title>About</template>
      </el-menu-item>

      <el-menu-item @click="onSelectItem('/payment-method', '3')" index="3">
        <el-icon><Icon icon="mdi:location" /></el-icon>
        <template #title>Payment Method</template>
      </el-menu-item>
    </el-menu>
  </aside>
</template>

<style lang="scss" scoped>
.el-menu-side-bar {
  height: 100vh;
  &:not(.el-menu--collapse) {
    width: $sideMenuWidth;
  }
}
</style>
