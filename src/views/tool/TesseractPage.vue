<template>
  <div>
    <div class="title">图片识别</div>
    <FileSelect @select="handleSelect" class="file-select" />
    <div v-for="(item, index) in statusList" :key="index" class="status">
      <span class="status-label"
        >{{ item.hasSuccess ? "身份证号" : "识别状态" }}：</span
      >
      <span class="status-content" v-if="!item.hasSuccess">
        {{ item.status }}
      </span>
      <input type="text" class="status-content" v-model="item.status" v-else />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import type { Ref } from "vue";
import Tesseract from "tesseract.js";
import FileSelect from "@/components/common/FileSelect.vue";
type statusType = {
  status: string;
  index: number;
  hasSuccess?: boolean;
};
const statusList: Ref<statusType[]> = ref([]);
const handleSelect = async (file: File) => {
  let index = 0;
  const {
    data: { text },
  } = await Tesseract.recognize(file, "chi_sim", {
    logger: (m) => {
      const { status } = m;
      statusList.value.push({
        status,
        index: index++,
      });
    },
  });
  const idMath = text.match(/[\d|x]{18,}/);
  if (idMath) {
    const id = idMath[0];
    statusList.value.push({
      status: id,
      index: index++,
      hasSuccess: true,
    });
  }
};
</script>
<style lang="less" scoped>
.title {
  text-align: center;
  font-weight: 600;
  font-size: 18px;
}
.file-select {
  margin: 10px auto;
}
.status {
  display: flex;
  font-size: 14px;
  margin: 10px 30px;
  height: 34px;
  line-height: 34px;
  .status-label {
    color: #333;
  }
  .status-content {
    flex: 1;
    color: #639ef4;
  }
  input.status-content {
    border: #666;
    outline: none;
    height: 100%;
  }
}
</style>
