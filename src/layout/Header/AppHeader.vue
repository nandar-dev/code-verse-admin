<script setup>
import { Icon } from "@iconify/vue";
import { useAppStore } from "@/store";
import { useRouter } from "vue-router";
import { onMounted, onUnmounted, ref } from "vue";

const router = useRouter();
const store = useAppStore();

const logOut = () => router.push("/login");

const screenWidth = ref(window.innerWidth);

const setMenuCollapse = (value) => store.setMenuSideBarCollapse(value);

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
  if (screenWidth.value < 768) {
    setMenuCollapse(true);
  } else {
    setMenuCollapse(false);
  }
};

onMounted(() => {
  window.addEventListener("resize", updateScreenWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateScreenWidth);
});
</script>
<template>
  <div class="app-header">
    <Icon
      @click="setMenuCollapse(!store.menuSideBarCollapse)"
      icon="ic:round-menu"
      width="25"
      height="25" />

    <el-popover placement="top-start" :width="200" trigger="hover">
      <template #reference>
        <el-avatar src="https://avatars.githubusercontent.com/u/72015883?v=4" />
      </template>
      <template #default>
        <div class="avatar-name">
          <el-avatar
            :size="40"
            src="https://avatars.githubusercontent.com/u/72015883?v=4" />
          <div>
            <p>Admin</p>
            <span>@element-plus</span>
          </div>
        </div>

        <div class="avatar-menu">
          <div class="menu-item">
            <Icon
              class="icon"
              icon="iconamoon:profile"
              width="25"
              height="25" />
            <p>Profile</p>
          </div>
          <el-divider />

          <div @click="logOut()" class="menu-item">
            <Icon class="icon" icon="tabler:logout" width="23" height="23" />
            <p>Log Out</p>
          </div>
        </div>
      </template>
    </el-popover>
  </div>
</template>

<style lang="scss" scoped>
.app-header {
  height: $appHeaderHeight;
  border-bottom: solid 1px $mainBorderColor;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
}
.avatar-name {
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    font-weight: 500;
  }
  span {
    color: $mainGrey;
  }
}

.avatar-menu {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .menu-item {
    display: flex;
    gap: 10px;
    align-items: center;
    cursor: pointer;
    .icon {
      color: $mainGrey;
    }
  }

  .menu-item:last-child {
    p {
      color: $danger;
    }
    .icon {
      color: $danger;
    }
  }
}

.el-divider--horizontal {
  margin: 0px 0 !important;
}
</style>
