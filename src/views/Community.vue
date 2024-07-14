<template>
  <div
    style="display: flex; justify-content: space-between; margin-bottom: 15px">
    <h2>Community</h2>

    <el-button type="primary" @click="showProfileDialog = true"
      >Upload Thread</el-button
    >
  </div>

  <div class="thread-list">
    <el-card
      v-for="thread in threads"
      :key="thread.id"
      style="margin-bottom: 15px"
      shadow="hover">
      <div style="display: flex">
        <img :src="thread.avatar" alt="User Avatar" class="avatar" />

        <div>
          <div class="thread-content">
            <router-link
              :to="{ name: 'threaddetail', params: { id: thread.id } }">
              <h3>{{ thread.title }}</h3>
            </router-link>
            <p class="author-date">{{ thread.author }} - {{ thread.date }}</p>
            <p class="description">{{ thread.description }}</p>
            <p class="reply-count">Replies: {{ thread.replies }}</p>
          </div>
        </div>
      </div>
    </el-card>
  </div>

  <ThreadDialog
    :open="showProfileDialog"
    @dialog-closed="showProfileDialog = false" />
</template>

<script setup>
import { ref } from "vue";
import ThreadDialog from "./components/ThreadDialog.vue";

const showProfileDialog = ref(false);
const threads = ref([
  {
    id: 1,
    title: "How to learn Vue 3?",
    author: "User1",
    date: "2024-07-10",
    avatar: "https://via.placeholder.com/40", // Sample avatar image URL
    description:
      "This is a description preview of the thread content. It can be up to two lines long.",
    replies: 5,
  },
  {
    id: 2,
    title: "Best resources for AI",
    author: "User2",
    date: "2024-07-11",
    avatar: "https://via.placeholder.com/40", // Sample avatar image URL
    description:
      "This is a description preview of the thread content. It can be up to two lines long.",
    replies: 10,
  },
  // Add more threads as needed
]);
</script>

<style lang="scss" scoped>
.thread-list {
  margin-top: 20px;
  height: calc(100vh - 160px);
  overflow-y: auto;
  padding-right: 10px;
}
.avatar {
  border-radius: 50%;
  width: 40px;
  height: 40px;
}

.thread-content {
  padding-left: 10px;
}

.thread-card h3 {
  margin: 0 0 10px;
  font-size: 18px;
  font-weight: 600;
  color: #007aff; // Apple-like blue color for the title
  transition: color 0.3s ease;
}

.thread-card h3:hover {
  color: #0056b3; // Darker blue on hover
}

.author-date {
  color: #888;
  font-size: 14px;
  margin-bottom: 10px;
}

.description {
  margin: 0 0 10px;
  color: #555;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to two lines */
  -webkit-box-orient: vertical;
}

.reply-count {
  font-size: 14px;
  color: #888;
}
</style>
