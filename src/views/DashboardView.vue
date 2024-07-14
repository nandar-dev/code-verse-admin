<script setup></script>

<template>
  <el-row :gutter="24">
    <el-col :span="12">
      <el-card shadow="always">
        <h2>User Qty</h2>
        <br />
        <h1>30</h1>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card shadow="always">
        <h2>Total Income</h2>
        <br />
        <h1>30</h1>
      </el-card>
      
    </el-col>
  </el-row>

  <br>
  
  <el-row :gutter="24">
    <el-col :span="12">
      <el-card shadow="always">
        <h2>Course Qty</h2>
        <br />
        <h1>30</h1>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card shadow="always">
        <h2>Total Sold Out Course</h2>
        <br />
        <h1>30</h1>
      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped>
.el-card {
  background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
  color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}
</style>
