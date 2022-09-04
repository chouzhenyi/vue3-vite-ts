<template>
  <a-layout>
    <a-layout-header><div class="title">五十九中</div></a-layout-header>
    <a-layout-content>
      <a-collapse v-model:activeKey="activeKey">
        <a-collapse-panel
          :key="index"
          :header="step.name"
          v-for="(step, index) in steps"
        >
          <a-card>
            <p>范围：</p>
            <p>{{ step.rangeDetail }}</p>
          </a-card>
          <a-list item-layout="horizontal" :data-source="step.rangeList">
            <template #renderItem="{ item }">
              <div class="range-desc">{{ item.desc }}</div>
              <a-list-item>
                <a-descriptions
                  :title="community.name"
                  :key="community.id"
                  v-for="community in item.community"
                  @click="handleCommunity(community)"
                >
                  <a-descriptions-item label="位置">{{
                    community.desc
                  }}</a-descriptions-item>
                  <a-descriptions-item label="单价"
                    >{{ community.unitPrice }}元/平米</a-descriptions-item
                  >
                </a-descriptions>
              </a-list-item>
            </template>
          </a-list>
        </a-collapse-panel>
      </a-collapse>
    </a-layout-content>
  </a-layout>
</template>
<script lang="ts" setup>
import { ref, toRaw } from "vue";
import type { Ref } from "vue";
import { schoolAreaData } from "@/scripts/api/school";
import type { Community, AreaType } from "@/scripts/types/house";

const activeKey = ref(0);
const steps: Ref<AreaType[]> = ref([]);
schoolAreaData().then((res) => {
  steps.value.push(...res);
  console.log(toRaw(steps.value));
});
const handleCommunity = ({ link }: Community) => {
  window.open(link);
};
const communities = [
  "里奥福苑",
  "聚翠园小区",
  "兴河东区一区",
  "兴河东区二区",
  "公安小区",
  "东营油区办小区",
  "",
  "",
];
console.log(communities);
</script>
<style lang="less" scoped>
@import "@/styles/calculation.less";
@import "@/styles/font.less";
@import "@/assets/reset.less";
.title {
  .font14();
  text-align: center;
  line-height: 34px;
  font-weight: 600;
}
.range-desc {
  .font12();
  line-height: 24px;
  color: var(--vt-c-text-red-1);
}
:deep(.ant-list-item) {
  background-color: rgba(#637ef4, 0.2);
  padding: 0 10px;
  margin-bottom: 10px;
  .ant-descriptions-header {
    margin-bottom: 10px;
  }
  .ant-descriptions-item {
    margin-bottom: 10px;
  }
  .ant-descriptions-item-label,
  .ant-descriptions-item-content {
    line-height: 1;
  }
}
</style>
