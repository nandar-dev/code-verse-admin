<script setup>
import { ref, watch, defineEmits, defineProps } from "vue";
import { Icon } from "@iconify/vue";

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["dialog-closed"]);

const dialogVisible = ref(props.open);

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
  title: "",
  description: "",
  image_url: "",
});

const formRef = ref(null);
</script>

<template>
  <el-dialog
    :close-on-click-modal="false"
    @closed="closeDialog"
    v-model="dialogVisible"
    title="Add Thread"
    width="500">
    <el-form
      style="max-height: 500px; overflow-y: auto; overflow-x: hidden"
      label-position="top"
      class="form"
      :model="form"
      ref="formRef">
      <el-upload
        v-model:file-list="fileList"
        class="upload-demo"
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15">
        <el-button>
          <el-icon><Icon icon="mdi:image" /></el-icon>
          <span>&nbsp;Attach Images</span>
        </el-button>

        <template #tip>
          <div class="el-upload__tip">
            jpg/png files with a size less than 500KB.
          </div>
        </template>
      </el-upload>

      <el-form-item label="Title">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="Description">
        <el-input
          type="textarea"
          v-model="form.description"
          :autosize="{ minRows: 5 }"></el-input>
      </el-form-item>
    </el-form>

    <template #footer>
      <div class="dialog-footer">
        <el-button style="width: 100px" @click="closeDialog">Cancel</el-button>
        <el-button style="width: 100px" type="primary" @click="closeDialog">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 15px;
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
