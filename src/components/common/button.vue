<template>
  <div class="button-container" @click.stop="handleClick">{{message}}</div>
</template>

<script>
import { computed, reactive, ref, toRefs, defineProps } from 'vue';

export default {
    data() {
        return {
            message: '发发'
        }
    },
    setup() {
        const am = ref(0);
        const state = reactive({
            val: 0,
            count: 10
        });
        const amStateComputed = computed({
            get: () => {
                console.log('computed get');
                return am.value;
            },
            set: (val) => {
                console.log('computed set', state.val, val);
                state.val = val;
            }
        });
        return {
            am,
            state,
            amStateComputed,
        }
    },
    created() {
    },
    methods: {
        handleClick() {
            this.$emit('change', '佛佛 子');
            console.log(this.am, 'click am');
            const refState = toRefs(this.state);
            const { val } = refState;
            console.log(val.value, '--refState');
            this.amStateComputed = this.am + this.state.val + 1;
        }
    },
}
</script>

<style scoped>
.button-container {
    border-radius: 3px 4px 5px 6px;
    border: 1px solid #639ef4;
    line-height: 40px;
    padding:0 10px;
    background-color: rgba(99, 157, 244, 0.7);
    color: #fff;
    font-size: 16px;
    text-align: center;
    width: 100px;
    cursor: pointer;
}
</style>