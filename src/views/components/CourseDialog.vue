<script setup>
import { ref, watch, defineEmits, defineProps } from "vue";
import { Plus } from "@element-plus/icons-vue";

const activeCollapse = ref("1");
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
  course_name: "",
  price: "",
  description: "",
  courseList: [
    {
      title: "",
      description: "",
      video: "",
      thumbnail: "",
    },
  ],
});

const formRef = ref(null);
const formContentRef = ref(null);

// --
</script>

<template>
  <el-dialog
    fullscreen
    :close-on-click-modal="false"
    @closed="closeDialog"
    v-model="dialogVisible"
    title="Add Course"
    width="800"
    :overflow="true">
    <el-form label-position="top" class="form" :model="form" ref="formRef">
      <el-row :gutter="24">
        <el-col :span="12">
          <el-form-item label="Course Name">
            <el-input
              v-model="form.course_name"
              placeholder="Enter course name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Price">
            <el-input v-model="form.price" placeholder="Enter price"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="24">
        <el-col :span="24">
          <el-form-item label="Description">
            <el-input
              v-model="form.description"
              type="textarea"
              placeholder="Enter description"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="24">
        <el-col :span="3">
          <el-form-item label="Intro Video">
            <el-upload
              :show-file-list="false"
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove">
              <el-icon><Plus /></el-icon>
            </el-upload>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item label="Thumbnail Image">
            <el-upload
              :show-file-list="false"
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove">
              <el-icon><Plus /></el-icon>
            </el-upload>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <br>
    <el-divider />
    <br>
    <h3>Course List ({{ form.courseList.length }})</h3>

    <div style="margin-bottom: 15px; text-align: right">
      <el-button
        type="primary"
        @click="
          form.courseList.push({
            title: '',
            description: '',
            video: '',
            thumbnail: '',
          })
        "
        >Add Course Content</el-button
      >
    </div>

    <el-collapse
      accordion
      v-for="(course, index) in form.courseList"
      :key="course"
      v-model="activeCollapse">
      <el-collapse-item :title="'Course ' + (index + 1)" :name="index + 1">
        <el-form
          label-position="top"
          class="form"
          :model="course"
          ref="formContentRef">
          <el-row :gutter="24">
            <el-col :span="24">
              <el-form-item label="Course Title">
                <el-input
                  v-model="course.title"
                  placeholder="Enter course title"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="24">
            <el-col :span="24">
              <el-form-item label="Description">
                <el-input
                  v-model="course.description"
                  type="textarea"
                  autosize
                  placeholder="Enter description"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="24">
            <el-col :span="3">
              <el-form-item label="Intro Video">
                <el-upload
                  :show-file-list="false"
                  action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                  list-type="picture-card"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove">
                  <el-icon><Plus /></el-icon>
                </el-upload>
              </el-form-item>
            </el-col>
            <el-col :span="3">
              <el-form-item label="Thumbnail Image">
                <el-upload
                  :show-file-list="false"
                  action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                  list-type="picture-card"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove">
                  <el-icon><Plus /></el-icon>
                </el-upload>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>

        <div style="text-align: right">
          <el-button
            link
            type="danger"
            @click="form.courseList.splice(index, 1)">
            Delete
          </el-button>
        </div>
      </el-collapse-item>
    </el-collapse>

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
