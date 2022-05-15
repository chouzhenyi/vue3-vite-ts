<template>
  <div class="wrapper">
    <div class="search">
        <div class="input">{{$t('index.searchTips')}}</div>
        <div class="button">{{$t('common.search')}}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/style/colors.scss';
@import '@/style/base.scss';
.wrapper {
    height: 100%;
    width: px2rem(180px);
    @include flex-column-center;
    .search {
        border: px2rem(2px) solid $red;
        padding: px2rem(2px);
        height: px2rem(40px);
        display: flex;
        border-radius: px2rem(20px);
        overflow: hidden;
        width: 100%;
        .input {
            color: $gray;
            flex: 1;
            padding-left: px2rem(10px);
            @include flex-column-center;
        }
        .button {
            color: $white;
            padding: 0 px2rem(14px);
            background: $red;
            border-radius: px2rem(16px);
            @include flex-column-center;
        }
    }
}
</style>