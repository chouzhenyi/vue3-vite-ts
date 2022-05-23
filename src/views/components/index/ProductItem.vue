<template>
    <div class="wrapper">
        <img :src="props.item.picUrl" class="pic" />
        <div class="text-wrapper">
            <div class="title">
                {{props.item.title}}
            </div>
            <div class="price-sales-tips">
                <span class="price-color font12">¥</span>
                <span class="price-color font14 price-num">{{props.item.marketPrice}}</span>
                <span class="color-gray-9 font12">{{props.item.extMap.recExc}}</span>
            </div>
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    item: Object,
});
</script>
<style lang="scss" scoped>
    @import '@/style/base.scss';
    @import '@/style/font.scss';
    @import '@/style/colors.scss';
    .wrapper {
        font-size: 0;
        img.pic {
            width: 100%;
            height: px2rem(180px);
            object-fit: cover;
        }
        .text-wrapper {
            background-color: #fff;
            @include over-hidden;
            .title {
                padding: 0 px2rem(12px);
                height: px2rem(42px);
                margin-top: px2rem(12px);
                @include over-hidden;
                @include font14;
                line-height: px2rem(22px);
                text-overflow: ellipsis;
            }
            .price-sales-tips {
                padding: 0 px2rem(12px) px2rem(12px) px2rem(12px);
                line-height: px2rem(18px);
                margin-top: px2rem(12px);
                @include font12;
                .price-color {
                    color: $price-red;
                }
                .price-num {
                    margin: 0 px2rem(12px) 0 px2rem(2px);
                }
            }
        }
    }
</style>
