<script setup>
import { ref } from "vue";
import CourseDialog from "./components/CourseDialog.vue";
import { ElMessage, ElMessageBox } from "element-plus";

const tableData = [
  {
    course_name: "HTMl, CSS and Javascript Basic",
    price: "200,000 MMK",
    course_content: 40,
  },
  {
    course_name: "Flutter Advanced",
    price: "300,000 MMK",
    course_content: 40,
  },
  {
    course_name: "Node js + Express + MongoDb",
    price: "250,000 MMK",
    course_content: 40,
  },
  {
    course_name: "Vue Zero to Hero",
    price: "350,000 MMK",
    course_content: 40,
  },
];
const showCourseDialog = ref(false);

const deleteHandler = () => {
  ElMessageBox.confirm("Are you sure want to delete?", "Delete Course!", {
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
    <h2>Courses</h2>

    <el-button type="primary" @click="showCourseDialog = true"
      >Add Course</el-button
    >
  </div>
  <el-card shadow="never">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="course_name" label="Course Name" />
      <el-table-column prop="price" label="Price" />
      <el-table-column prop="course_content" label="Course Content" />
      <el-table-column fixed="right" label="Operations">
        <template #default>
          <el-button
            link
            type="primary"
            size="small"
            @click="showCourseDialog = true"
            >Edit</el-button
          >
          <el-button link type="danger" size="small" @click="deleteHandler">
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <br />
    <div style="display: flex; justify-content: center">
      <el-pagination background layout="prev, pager, next" :total="1000" />
    </div>
  </el-card>
  <CourseDialog
    :open="showCourseDialog"
    @dialog-closed="() => (showCourseDialog = false)" />
</template>
