<template>
  <div class="reset-pass-content">
    <div class="reset-pass-wrapper">
      <el-card class="card">
        <h2>Reset Password</h2>
        <el-form>
          <el-form-item>
            <el-input
              v-model="newPassword"
              :type="newPasswordFieldType"
              placeholder="New password">
              <template #append>
                <el-button
                  class="password-visibility"
                  @click="toggleNewPasswordVisibility"
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
            <el-input
              v-model="confirmPassword"
              :type="confirmPasswordFieldType"
              placeholder="Confirm password">
              <template #append>
                <el-button
                  class="password-visibility"
                  @click="toggleConfirmPasswordVisibility"
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

          <el-button @click="$router.push('/')" class="button" type="primary"
            >Next</el-button
          >
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Icon } from "@iconify/vue";

const newPassword = ref("");
const confirmPassword = ref("");
const showNewPassword = ref(false);
const showConfirmPassword = ref(false);

const newPasswordFieldType = computed(() =>
  showNewPassword.value ? "text" : "password"
);

const confirmPasswordFieldType = computed(() =>
  showConfirmPassword.value ? "text" : "password"
);

const toggleNewPasswordVisibility = () => {
  showNewPassword.value = !showNewPassword.value;
};

const toggleConfirmPasswordVisibility = () => {
  showConfirmPassword.value = !showConfirmPassword.value;
};
</script>

<style scoped lang="scss">
.reset-pass-content {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.reset-pass-wrapper {
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
  }

  .password-visibility {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .el-form-item {
    margin-bottom: 20px;
  }
}
</style>
