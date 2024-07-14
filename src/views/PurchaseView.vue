<script setup>
import { ref } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";

const tableData = [
  {
    course_name: "HTMl, CSS and Javascript Basic",
    price: "200,000 MMK",
    course_content: 40,
    buyer: "Mg Mg",
    status: "Pending",
  },
  {
    course_name: "Flutter Advanced",
    price: "300,000 MMK",
    course_content: 40,
    buyer: "Mg Ba",
    status: "Approved",
  },
  {
    course_name: "Node js + Express + MongoDb",
    price: "250,000 MMK",
    course_content: 40,
    buyer: "Aung Aung",
    status: "Pending",
  },
  {
    course_name: "Vue Zero to Hero",
    price: "350,000 MMK",
    course_content: 40,
    buyer: "Aung Ba",
    status: "Approved",
  },
];

const rejectHandler = () => {
  ElMessageBox.confirm("Are you sure want to reject?", "Reject!", {
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

const approveHandler = () => {
  ElMessageBox.confirm("Are you sure want to approve?", "Approve!", {
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
    <h2>Purchase</h2>
  </div>
  <el-card shadow="never">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="course_name" label="Course Name" />
      <el-table-column prop="price" label="Price" />
      <el-table-column prop="course_content" label="Course Content" />
      <el-table-column prop="buyer" label="Buyer" />
      <el-table-column prop="status" label="Status">
        <template #default="scope">
          <el-tag
            :type="scope.row.status === 'Pending' ? 'warning' : 'success'"
            disable-transitions
            >{{ scope.row.status }}</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="Operations">
        <template #default>
          <el-button link type="primary" size="small" @click="approveHandler"
            >Approve</el-button
          >
          <el-button link type="danger" size="small" @click="rejectHandler">
            Reject
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <br />
    <div style="display: flex; justify-content: center">
      <el-pagination background layout="prev, pager, next" :total="1000" />
    </div>
  </el-card>
</template>
