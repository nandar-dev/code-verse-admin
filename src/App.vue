<script setup>
import AdminLayout from "./layout/AdminLayout.vue";
</script>

<template>
  <AdminLayout v-if="$route.meta.layout === 'admin'" />
  <router-view v-else></router-view>
</template>
