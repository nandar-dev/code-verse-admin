<script setup>
import { ref, watch, defineEmits } from "vue";
import { paymentOptions } from "@/utils/index";

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
  emit("dialog-closed");
};

const form = ref({
  bank_name: "",
  account_name: "",
  account_number: "",
});

const formRef = ref(null);
</script>

<template>
  <el-dialog
    :close-on-click-modal="false"
    @closed="closeDialog"
    v-model="dialogVisible"
    title="Add Payment Method"
    width="500">
    <el-form label-position="top" class="form" :model="form" ref="formRef">
      <el-form-item label="Bank Name">
        <el-select v-model="form.bank_name" placeholder="Select Bank">
          <el-option
            v-for="item in paymentOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value" />
        </el-select>
      </el-form-item>
      <el-form-item label="Account Name">
        <el-input
          v-model="form.account_name"
          placeholder="Enter account name"></el-input>
      </el-form-item>
      <el-form-item label="Account Number">
        <el-input
          v-model="form.account_number"
          placeholder="Enter account number"></el-input>
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
