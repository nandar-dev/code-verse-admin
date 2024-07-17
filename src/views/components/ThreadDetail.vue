<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { Icon } from "@iconify/vue";
import { MoreFilled } from "@element-plus/icons-vue";
import { ElMessage, ElMessageBox } from "element-plus";

const route = useRoute();
const thread = ref({});
const newReply = ref("");
const showEditReplyDialog = ref(false);
onMounted(() => {
  const threadId = route.params.id;
  thread.value = {
    id: threadId,
    title: "How to learn Vue 3?",
    content: "This is the content of the thread.",
    image: "https://via.placeholder.com/600x400", // Placeholder image URL
    replies: [
      {
        id: 1,
        content: "This is a reply.",
        upvotes: 10,
        downvotes: 10,
        upvoted: false,
        downvoted: false,
      },
    ],
  };
});

const addReply = () => {
  thread.value.replies.push({
    id: thread.value.replies.length + 1,
    content: newReply.value,
    upvotes: 0,
    downvotes: 0,
    upvoted: false,
    downvoted: false,
  });
  newReply.value = "";
};

const voteReply = (replyId, upOrDown) => {
  const reply = thread.value.replies.find((r) => r.id === replyId);
  if (reply) {
    if (upOrDown === "up") {
      if (reply.upvoted) {
        reply.upvotes -= 1;
        reply.upvoted = false;
      } else {
        if (reply.downvoted) {
          reply.downvotes -= 1;
          reply.downvoted = false;
        }
        reply.upvotes += 1;
        reply.upvoted = true;
      }
    } else if (upOrDown === "down") {
      if (reply.downvoted) {
        reply.downvotes -= 1;
        reply.downvoted = false;
      } else {
        if (reply.upvoted) {
          reply.upvotes -= 1;
          reply.upvoted = false;
        }
        reply.downvotes += 1;
        reply.downvoted = true;
      }
    }
  }
};

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
  <h2>{{ thread.title }}</h2>
  <br />
  <div v-if="thread.image">
    <img :src="thread.image" alt="Thread image" />
  </div>
  <br />
  <p>{{ thread.content }}</p>
  <br />
  <h3>Replies</h3>
  <div v-for="reply in thread.replies" :key="reply.id" class="reply">
    <div style="position: absolute; top: 10px; right: 10px">
      <el-popover placement="bottom" :width="200" trigger="click">
        <template #reference>
          <el-icon><MoreFilled /></el-icon>
        </template>

        <div>
          <div class="action-menu">
            <div @click="showEditReplyDialog = true" class="menu-item">
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
    <p>
      {{ reply.content }} Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Assumenda dolorem impedit nobis architecto nesciunt perferendis quos
      ipsum fugiat d tempore ipsam ex magnam, nam laborum dolore fugit molestiae
      unde placeat, doloremque est ducimus nihil maxime nisi recusandae. Aliquid
      harum labore aspernatur, deleniti culpa, vitae aliquam natus sequi ipsam
      voluptate provident officiis?
    </p>

    <div class="vote-container">
      <div class="up vote-button" @click="voteReply(reply.id, 'up')">
        <el-icon :size="20" v-if="reply.upvoted">
          <Icon icon="mdi:arrow-up-bold" />
        </el-icon>
        <el-icon :size="20" v-else>
          <Icon icon="mdi:arrow-up-bold-outline" />
        </el-icon>
        <span class="vote-count">({{ reply.upvotes }})</span>
      </div>

      <div class="separator"></div>

      <div class="vote-button down" @click="voteReply(reply.id, 'down')">
        <el-icon :size="20" v-if="reply.downvoted">
          <Icon icon="mdi:arrow-down-bold" />
        </el-icon>
        <el-icon :size="20" v-else>
          <Icon icon="mdi:arrow-down-bold-outline" />
        </el-icon>
        <span class="vote-count">({{ reply.downvotes }})</span>
      </div>
    </div>
  </div>
  <el-input
    type="textarea"
    v-model="newReply"
    placeholder="Add a reply"
    class="reply-input" />
  <el-button type="primary" @click="addReply">Reply</el-button>

  <el-dialog
    title="Edit Reply"
    align-center
    v-model="showEditReplyDialog"
    width="700">
    <div style="display: flex; justify-content: center; margin-top: 10px">
      <el-input type="textarea" placeholder="Edit a reply" />
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="showEditReplyDialog = false">Cancel</el-button>
        <el-button type="primary" @click="showEditReplyDialog = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 300px;
  border-radius: 3px;
}
.reply {
  position: relative;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid $mainBorderColor;
  border-radius: 3px;

  p {
    padding-right: 30px;
  }
}

.reply-input {
  margin-top: 20px;
  margin-bottom: 20px;
}

.vote-container {
  margin-top: 20px;
  display: flex;
  align-items: center;
  border: 1px solid #d1d1d1;
  border-radius: 25px;
  background-color: #f9f9f9;
  width: max-content;
}

.vote-button {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px 10px;
  transition: color 0.3s, background-color 0.3s;
  border-radius: 25px;
}

.up:hover {
  color: #007aff;
  background-color: #e6f2ff;
  border-radius: 25px 0px 0px 25px;
}

.down:hover {
  color: #007aff;
  background-color: #e6f2ff;
  border-radius: 0px 25px 25px 0px;
}

.vote-button .el-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.vote-count {
  margin-left: 3px;
  font-size: 14px;
}

.separator {
  width: 1px;
  height: 20px;
  background-color: #d1d1d1;
}
</style>
