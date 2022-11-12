<template>
  <div class="wrapper">
    <div v-for="(item, key) in createModeList" :key="key" class="item">
      <h2>{{ item.name }}</h2>
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
      "描述了一个类， 它拥有一个包含大量条件语句的构建方法， 可根据方法的参数来选择对何种产品进行初始化并将其返回。",
      "是一种创建型设计模式， 其在父类中提供一个创建对象的方法， 允许子类决定实例化对象的类型。\n如果在基类及其扩展的子类中都有一个构建方法的话， 那它可能就是工厂方法。",
      "用于创建不同产品的接口， 但将实际的创建工作留给了具体工厂类。 每个工厂类型都对应一个特定的产品变体。",
    ];

    /**
     * 简单工厂模式
     */
    class CreateCode {
      constructor(code: number) {
        this.code = code;
      }
      code: number;
    }
    class SimpleFactory {
      constructor() {
        this.definition = createModeDefinitionArr[0];
        this.name = "简单工厂模式";
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
      name: string;
    }

    /**
     * 工厂方法模式
     */
    interface CreateCodeFactory {
      definition: string;
      create(code: number): number;
    }
    class CreateCodeByAdd implements CreateCodeFactory {
      constructor() {
        this.definition = createModeDefinitionArr[1];
        this.name = "工厂方法模式";
      }
      definition: string;
      name: string;
      create(code: number) {
        if (code % 3) {
          return code + code + 1;
        } else if (code % 5) {
          return code * 10;
        } else {
          return code;
        }
      }
    }

    /**
     * 抽象工厂
     */
    interface AbstractName {
      createFirstName(): string;
      createSecondName(): string;
      createFullName(): string;
    }
    interface AbstractAge {
      createAge(): number;
      createBirthTime(): string;
    }
    interface AbstractPersonFactory {
      createName(name: string): AbstractName;
      createAge(birthTime: string): AbstractAge;
    }

    class GeneratorNameClass implements AbstractName {
      constructor(firstName: string, secondName: string) {
        this.firstName = firstName;
        this.secondName = secondName;
      }
      firstName: string;
      secondName: string;
      createFirstName() {
        return this.firstName;
      }
      createSecondName() {
        return this.secondName;
      }
      createFullName() {
        return `${this.firstName}·${this.secondName}`;
      }
    }

    class GeneratorAgeClass implements AbstractAge {
      constructor(birthTime: string) {
        this.birthTime = new Date(birthTime);
      }
      createAge(): number {
        const now = new Date(Date.now()).getFullYear();
        const birthYear = this.birthTime.getFullYear();
        const result = now - birthYear;
        return result;
      }
      createBirthTime(): string {
        const birthTime = this.birthTime.toLocaleString();
        return birthTime;
      }
      birthTime: Date;
    }

    class AsiaPerson implements AbstractPersonFactory {
      constructor() {
        this.name = "抽象工厂";
        this.definition = createModeDefinitionArr[2];
      }
      public createName(name: string): AbstractName {
        const [fist = "", second = ""] = name.split(",");
        return new GeneratorNameClass(fist, second);
      }
      public createAge(birthTime: string): AbstractAge {
        return new GeneratorAgeClass(birthTime);
      }
      name: string;
      definition: string;
    }
    const createPersonFn = () => {
      const oneAsiaPerson = new AsiaPerson();
      const { name, definition, createAge, createName } = oneAsiaPerson;
      return {
        name,
        definition,
        create: (key: number) => {
          const name = createName("拉夫罗夫,伊万").createFullName();
          const age = createAge("2022/11/19").createAge();
          return `下标${key}: ${name} -- ${age}`;
        },
      };
    };
    const createModeList = [
      new SimpleFactory(),
      new CreateCodeByAdd(),
      createPersonFn(),
    ];
    console.log(createModeList);
    return { createModeList };
  },
});
</script>
<style lang="less" scoped>
.wrapper {
  padding: 0 10px;
  .item {
    border-bottom: 1px dashed #c8c8c8;
    padding: 10px 0;
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
