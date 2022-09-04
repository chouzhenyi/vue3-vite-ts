<script lang="ts" setup>
import * as xlsx from "xlsx";
import { ref } from "vue";
import type { Ref } from "vue";

// 上传excel
const file = ref(null);
const selectExcelFile = () => {
  const el = file.value as unknown as HTMLInputElement;
  el?.click?.();
};
// 解析excel数据
type ExcelType = {
  name?: string;
  ID?: string;
  date?: string;
};
type ExcelKeyType = "name" | "ID" | "date";
const handleSheetData = (data: any): ExcelType[] => {
  const rows: ExcelType[] = [];
  const keys = {
    A: {
      key: "name",
      desc: "姓名",
    },
    B: {
      key: "ID",
      desc: "身份证号",
    },
    C: {
      key: "date",
      desc: "日期",
    },
  };
  type keyType = "A" | "B" | "C";
  for (const i in data) {
    if (/\w\d{1,}/.test(i)) {
      const val = data[i];
      const { w } = val;
      const letterKey = `${i}`.replace(/[^A-Z]/g, "") as keyType;
      const numKey = +`${i}`.replace(/\D/g, "") - 1;
      const key = keys[letterKey]?.key as ExcelKeyType;
      const columns: ExcelType = {};
      if (key && numKey > 0) {
        if (!rows[numKey]) {
          columns[key] = w;
          rows.splice(numKey, 0, columns);
        } else {
          rows[numKey][key] = w;
        }
      }
    }
  }
  return rows;
};
// 解析excel文件
const handleExcel = (el: Event) => {
  const { target } = el;
  const { files } = target as HTMLInputElement;
  const file = (files as FileList)[0];
  const reader = new FileReader();
  reader.onload = (e) => {
    const data = e?.target?.result;
    if (data) {
      const sheet = xlsx.read(data, { type: "binary" });
      const { Sheets } = sheet;
      const { Sheet1 } = Sheets;
      tableData.value = handleSheetData(Sheet1);
    }
  };
  reader.readAsBinaryString(file);
};
// 表格
const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "身份证号",
    dataIndex: "ID",
    key: "ID",
  },
  {
    title: "日期",
    dataIndex: "date",
    key: "date",
  },
];
const tableData: Ref<ExcelType[]> = ref([]);
</script>
<template>
  <div class="excel-wrapper">
    <div>
      <a-button type="primary" @click="selectExcelFile">上传excel</a-button>
    </div>
    <input type="file" ref="file" class="hidden" @change="handleExcel" />
    <a-table :dataSource="tableData" :columns="columns" bordered />
  </div>
</template>
<style lang="less" scoped>
.hidden {
  display: none;
}
.excel-wrapper {
  font-size: 14px;
}
</style>
