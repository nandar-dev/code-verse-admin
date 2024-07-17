<script setup>
import { ref } from "vue";
import PaymentMethodDialog from "./components/PaymentMethodDialog.vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { paymentOptions } from "@/utils/index";

const tableData = [
  {
    bank_name: "KBZ Bank",
    key: "kbz_bank",
    account_name: "MR California",
    account_number: "XXXXXXXXXX2828",
  },
  {
    bank_name: "KBZ Pay",
    key: "kbz_pay",
    account_name: "MR California",
    account_number: "XXXXXXXXXX2828",
  },
  {
    bank_name: "CB Bank",
    key: "cb_bank",
    account_name: "MR Robert",
    account_number: "XXXXXXXXXX2828",
  },
  {
    bank_name: "CB Pay",
    key: "cb_pay",
    account_name: "MR Robert",
    account_number: "XXXXXXXXXX2828",
  },
  {
    bank_name: "AYA Bank",
    key: "aya_bank",
    account_name: "MR Washinton",
    account_number: "XXXXXXXXXX2828",
  },
  {
    bank_name: "AYA Pay",
    key: "aya_pay",
    account_name: "MR Washinton",
    account_number: "XXXXXXXXXX2828",
  },
  {
    bank_name: "Yoma Bank",
    key: "yoma_bank",
    account_name: "MR Jhon",
    account_number: "XXXXXXXXXX2828",
  },
  {
    bank_name: "UAB Bank",
    key: "uab_bank",
    account_name: "MR Smith",
    account_number: "XXXXXXXXXX2828",
  },
  {
    bank_name: "UAB Pay",
    key: "uab_pay",
    account_name: "MR Ross",
    account_number: "XXXXXXXXXX2828",
  },
  {
    bank_name: "Wave Money",
    key: "wave_money",
    account_name: "MR Max",
    account_number: "XXXXXXXXXX2828",
  },
  {
    bank_name: "One Pay",
    key: "one_pay",
    account_name: "MR Dexter",
    account_number: "XXXXXXXXXX2828",
  },
  {
    bank_name: "MPT Pay",
    key: "mpt_pay",
    account_name: "MR Allen",
    account_number: "XXXXXXXXXX2828",
  },
  {
    bank_name: "M-Pitesan",
    key: "m_pitesan",
    account_name: "MR Bob",
    account_number: "XXXXXXXXXX2828",
  },
];
const showPaymentDialog = ref(false);

const paymentIconImage = (value) => {
  const index = paymentOptions.findIndex((option) => option.value === value);

  if (index !== -1 && paymentOptions[index].hasOwnProperty("icon")) {
    return paymentOptions[index].icon;
  }
  return null;
};

const deleteHandler = () => {
  ElMessageBox.confirm(
    "Are you sure want to delete?",
    "Delete Payment Method!",
    {
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      type: "warning",
      callback: (action) => {
        ElMessage({
          type: "info",
          message: `action: ${action}`,
        });
      },
    }
  );
};
</script>

<template>
  <div
    style="display: flex; justify-content: space-between; margin-bottom: 15px">
    <h2>Payment Method</h2>

    <el-button type="primary" @click="showPaymentDialog = true"
      >Add Payment Method</el-button
    >
  </div>
  <el-card shadow="never">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="bank_name" label="Bank">
        <template #default="scope">
          <div style="display: flex; align-items: center; gap: 20px">
            <img
              :src="paymentIconImage(scope.row.key)"
              style="
                width: 50px;
                height: 50px;
                object-fit: contain;
                border-radius: 10px;
              "
              :alt="scope.row.bank_name" />
            <div>{{ scope.row.bank_name }}</div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="account_name" label="Account Name" />
      <el-table-column prop="account_number" label="Account Number" />
      <el-table-column fixed="right" label="Operations">
        <template #default>
          <el-button
            link
            type="primary"
            size="small"
            @click="showPaymentDialog = true"
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
  <PaymentMethodDialog
    :open="showPaymentDialog"
    @dialog-closed="() => (showPaymentDialog = false)" />
</template>
