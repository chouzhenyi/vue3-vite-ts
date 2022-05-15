<template>
  <div class="wrapper">
    <div class="sign">{{$t('index.sign')}}</div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/style/colors.scss';
@import '@/style/font.scss';
@import '@/style/base.scss';
.wrapper {
    height: 100%;
    @include flex-center;
    .sign {
        width: px2rem(40px);
        height: px2rem(40px);
        background-color: $red;
        color: $white;
        border-radius: 50%;
        @include font14;
        @include font-weight-500;
        @include flex-center;
    }
}
</style>