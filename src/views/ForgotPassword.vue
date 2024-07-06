<template>
  <div class="forgot-pass-content">
    <div class="forgot-pass-wrapper">
      <el-card class="card">
        <h2>Forgot Password</h2>
        <p>
          Enter your email to reset your password. Instructions will be sent to
          your inbox.
        </p>
        <el-form>
          <el-form-item>
            <el-input v-model="email" placeholder="Email"></el-input>
          </el-form-item>

          <el-button @click="$router.push('/otp')" class="button" type="primary"
            >Next</el-button
          >
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
</script>

<style scoped lang="scss">
.forgot-pass-content {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.forgot-pass-wrapper {
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
    margin-top: 30px;
    width: 100%;

  }
}
</style>
