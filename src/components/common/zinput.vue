<template>
  <div>
      <input type="text" :value="modelValue" @input="inputChange" />
  </div>
</template>

<script>
export default {
    props: ['modelValue'],
    methods: {
        inputChange(e) {
            const { target } = e;
            const { value } = target;
            this.$emit('update:modelValue', value);
        }
    }
}

</script>

<style scoped>
</style>