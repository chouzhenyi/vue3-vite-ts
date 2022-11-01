<template>
  <div class="wrapper">
    <div v-for="(item, key) in createModeList" :key="key" class="item">
      <h3 class="title">定义：</h3>
      <p class="definition">{{ item.definition }}</p>
      <div class="result">{{ item.create?.(key) }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "createMode",
  setup() {
    const createModeDefinitionArr: string[] = [
      "定义了一个创建对象的类，由这个类来封装实例化对象的行为。",
    ];

    class CreateCode {
      constructor(code: number) {
        this.code = code;
      }
      code: number;
    }
    class SimpleFactory {
      constructor() {
        this.definition = createModeDefinitionArr[0];
      }
      create(code: number) {
        let num: number;
        if (code === 0) {
          num = new CreateCode(code).code;
        } else if (code === 1) {
          num = new CreateCode(code).code;
        } else {
          num = new CreateCode(code).code;
        }
        return num;
      }
      definition: string;
    }
    const createModeList = [new SimpleFactory()];
    console.log(createModeList);
    return { createModeList };
  },
});
</script>
<style lang="less" scoped>
.wrapper {
  padding: 10px;
  .item {
    border-bottom: 1px dashed #c8c8c8;
    padding-bottom: 10px;
    .title {
      font-size: 16px;
      margin-bottom: 10px;
    }
    .definition {
      color: #666;
      line-height: 1.5;
    }
    .result {
      line-height: 1.2;
      padding: 10px;
      background-color: #639ef4;
      color: #fff;
      font-size: 16px;
    }
  }
}
</style>
