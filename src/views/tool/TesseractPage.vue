<template>
  <div>
    <div class="title">图片识别</div>
    <div>
      <FileSelect @select="handleSelect" />
      <div>
        <div v-for="(item, index) in statusList" :key="index">
          <span>{{ item.hasSuccess ? "身份证号" : "识别状态" }}：</span>
          <span>
            {{ item.status }}
          </span>
        </div>
      </div>
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
}
</style>
