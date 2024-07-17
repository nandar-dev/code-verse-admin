<script setup>
import { ref } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { Icon } from "@iconify/vue";
const showPreviewImgDialog = ref(false);
const selectedPreviewImg = ref(null);
const tableData = [
  {
    course_name: "HTMl, CSS and Javascript Basic",
    price: "200,000 MMK",
    course_content: 40,
    buyer: "Mg Mg",
    screenshot:
      "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    status: "Pending",
    date_time: "15/07/2024 02:44 PM",
  },
  {
    course_name: "Flutter Advanced",
    price: "300,000 MMK",
    course_content: 40,
    buyer: "Mg Ba",
    screenshot:
      "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",

    status: "Approved",
    date_time: "15/07/2024 02:44 PM",
  },
  {
    course_name: "Node js + Express + MongoDb",
    price: "250,000 MMK",
    course_content: 40,
    buyer: "Aung Aung",
    screenshot:
      "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",

    status: "Pending",
    date_time: "15/07/2024 02:44 PM",
  },
  {
    course_name: "Vue Zero to Hero",
    price: "350,000 MMK",
    course_content: 40,
    buyer: "Aung Ba",
    screenshot:
      "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",

    status: "Approved",
    date_time: "15/07/2024 02:44 PM",
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
    <el-table :data="tableData" border :max-height="550"  style="width: 100%;">
      <el-table-column fixed prop="course_name" label="Course Name" />
      <el-table-column prop="price" label="Price" width="130" />
      <el-table-column prop="course_content" label="Content" width="80" />
      <el-table-column prop="buyer" label="Buyer" width="200" />
      <el-table-column prop="screenshot" label="Screenshot" width="155">
        <template #default="scope">
          <el-button
            @click="
              (showPreviewImgDialog = true),
                (selectedPreviewImg = scope.row.screenshot)
            ">
            <el-icon size="17"><Icon icon="mdi:file-image" /></el-icon>
            &nbsp;Screenshot</el-button
          >
        </template>
      </el-table-column>
      <el-table-column prop="status" label="Status" width="100">
        <template #default="scope">
          <el-tag
            :type="scope.row.status === 'Pending' ? 'warning' : 'success'"
            disable-transitions
            >{{ scope.row.status }}</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column prop="date_time" label="Date Time" width="165" />
      <el-table-column fixed="right" label="Operations" width="140">
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
  <el-dialog v-model="showPreviewImgDialog" width="700">
    <div style="display: flex; justify-content: center; margin-top: 10px">
      <img
        w-full
        :src="selectedPreviewImg"
        alt="Preview Image"
        style="width: 100%" />
    </div>
  </el-dialog>
</template>
