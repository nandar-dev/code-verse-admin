<template>
  <div class="login-content">
    <div class="login-wrapper">
      <el-card class="login-card">
        <h2>Login</h2>
        <el-form>
          <el-form-item>
            <el-input v-model="username" placeholder="Username"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="password"
              :type="passwordFieldType"
              placeholder="Password">
              <template #append>
                <el-button
                  class="password-visibility"
                  @click="togglePasswordVisibility"
                  type="text">
                  <Icon
                    :icon="
                      showPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'
                    "
                    height="15.5"
                    width="15.5" />
                </el-button>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSubmit">Login</el-button>
          </el-form-item>

          <el-link
            class="forgot-password"
            type="primary"
            @click="$router.push('/forgot-pass')"
            >Forgot Password?</el-link
          >
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("");
const password = ref("");
const showPassword = ref(false);

const passwordFieldType = computed(() =>
  showPassword.value ? "text" : "password"
);

const handleSubmit = () => {
  console.log("Username:", username.value);
  console.log("Password:", password.value);
  router.push("/");
};

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};
</script>

<style scoped lang="scss">
.login-content {
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.login-card {
  width: 400px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: #fff;

  button {
    width: 100%;
  }

  h2 {
    margin-bottom: 20px;
    text-align: center;
  }

  .password-visibility {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .el-form-item {
    margin-bottom: 20px;
  }

  .forgot-password {
    float: right;
  }
}
</style>
