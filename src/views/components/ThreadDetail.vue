<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { Icon } from "@iconify/vue";

const route = useRoute();
const thread = ref({});
const newReply = ref("");

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
    <p>{{ reply.content }}</p>

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
</template>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 300px;
  border-radius: 3px;
}
.reply {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid $mainBorderColor;
  border-radius: 3px;
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
