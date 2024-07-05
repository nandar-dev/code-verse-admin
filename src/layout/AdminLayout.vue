<script setup>
import AppSideBar from "./SideBar/AppSideBar.vue";
import AppHeader from "./Header/AppHeader.vue";

</script>

<template>
  <div class="layout">
    <div class="layout-main">
      <AppSideBar />
      <div class="app-main">
        <AppHeader />
        <main class="app-main-content">
          <el-main>
            <router-view />
          </el-main>
        </main>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.layout {
  .layout-main {
    display: flex;

    .app-main {
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;

      .app-main-content {
        width: 100%;
        height: $adminContentHeight;
        overflow-y: auto;
        box-sizing: border-box;
        overflow-x: hidden;
      }
    }
  }
}
</style>
