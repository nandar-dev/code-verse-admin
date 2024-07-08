<script setup>
import { ref } from "vue";

const otp = ref("");
</script>


<template>
  <div class="otp-content">
    <div class="otp-wrapper">
      <el-card class="card">
        <h2>OTP</h2>
        <p>Enter the OTP sent to your email to verify your identity.</p>
        <el-form>
          <el-form-item>
            <el-input v-model="otp" placeholder="OTP"></el-input>
          </el-form-item>

          <el-button @click="$router.push('/reset-pass')" class="button" type="primary">Next</el-button>
        </el-form>
      </el-card>
    </div>
  </div>
</template>


<style  lang="scss" scoped>
.otp-content {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.otp-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.card {
  width: 400px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: #fff;

  h2 {
    margin-bottom: 20px;
    text-align: center;
  }

  p {
    margin: 20px 0;
    text-align: center;
    font-size: 14px;
    color: $mainGrey;
  }

  .button {
    width: 100%;
    margin-top: 30px;
  }
}
</style>
