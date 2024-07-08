<script setup>
import { ref, watch, defineEmits, defineProps } from "vue";
import { Plus } from "@element-plus/icons-vue";

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["dialog-closed"]);

const dialogVisible = ref(props.open);
const formLabelWidth = "70px";

watch(
  () => props.open,
  (newVal) => {
    dialogVisible.value = newVal;
  }
);

const closeDialog = () => {
  dialogVisible.value = false;
  emit("dialog-closed");
};

const form = ref({
  name: "",
  email: "",
  password: "",
  avatar: "",
});

const formRef = ref(null);

const handleAvatarChange = (file) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    imageUrl.value = e.target.result;
    form.value.avatar = e.target.result;
  };
  reader.readAsDataURL(file.raw);
};

const imageUrl = ref("");
</script>

<template>
  <el-dialog v-model="dialogVisible" title="Profile" width="500">
    <el-form class="form" :model="form" ref="formRef">
      <el-form-item>
        <el-upload
          class="avatar-uploader"
          :show-file-list="false"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
          <el-icon><Plus /></el-icon>
        </el-upload>
      </el-form-item>

      <el-form-item label="Name" :label-width="formLabelWidth">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="Email" :label-width="formLabelWidth">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="Password" :label-width="formLabelWidth">
        <el-input v-model="form.password" show-password></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button style="width: 100px;" @click="closeDialog">Cancel</el-button>
        <el-button style="width: 100px;" type="primary" @click="closeDialog"> Confirm </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.avatar-uploader {
  margin: auto;
  width: 150px;
  height: 150px;
  border: 1px dashed #d9d9d9;
  border-radius: 50%;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
}

:deep(.el-upload--picture-card) {
  border: none;
}

 
</style>
