<script setup>
import { ref } from "vue";
import ThreadDialog from "./components/ThreadDialog.vue";
import { MoreFilled } from "@element-plus/icons-vue";
import { Icon } from "@iconify/vue";
import { ElMessage, ElMessageBox } from "element-plus";

const showThreadDialog = ref(false);
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
]);
const deleteHandler = () => {
  ElMessageBox.confirm("Are you sure want to delete?", "Delete Thread!", {
    confirmButtonText: "OK",
    cancelButtonText: "Cancel",
    type: "warning",
    callback: (action) => {
      ElMessage({
        type: "info",
        message: `action: ${action}`,
      });
    },
  });
};
</script>

<template>
  <div
    style="display: flex; justify-content: space-between; margin-bottom: 15px">
    <h2>Community</h2>

    <el-button type="primary" @click="showThreadDialog = true"
      >Upload Thread</el-button
    >
  </div>

  <div class="thread-list">
    <el-card
      v-for="thread in threads"
      :key="thread.id"
      style="margin-bottom: 15px"
      shadow="hover">
      <div style="display: flex; position: relative">
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

        <div style="position: absolute; top: 0; right: 0">
          <el-popover placement="bottom" :width="200" trigger="click">
            <template #reference>
              <el-icon><MoreFilled /></el-icon>
            </template>

            <div>
              <div class="action-menu">
                <div @click="showThreadDialog = true" class="menu-item">
                  <Icon
                    class="icon"
                    icon="mdi:post-it-note-edit-outline"
                    width="23"
                    height="23" />
                  <p>Edit</p>
                </div>
                <el-divider />

                <div @click="deleteHandler()" class="menu-item">
                  <Icon
                    class="icon"
                    icon="material-symbols:delete"
                    width="23"
                    height="23" />
                  <p>Delete</p>
                </div>
              </div>
            </div>
          </el-popover>
        </div>
      </div>
    </el-card>
  </div>

  <div style="display: flex; justify-content: center">
    <el-pagination background layout="prev, pager, next" :total="1000" />
  </div>

  <ThreadDialog
    :open="showThreadDialog"
    @dialog-closed="showThreadDialog = false" />
</template>

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

.el-divider--horizontal {
  margin: 0px 0 !important;
}
</style>
