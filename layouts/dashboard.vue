<template>
  <v-app>
    <div class="dashboard">
      <div class="dashboard__sidebar">
        <Sidebar />
        <!-- <ToastComponent /> -->
<!--        <sy-account-popup />-->
        <!-- <login-dialog/> -->
      </div>
      <div class="dashboard__body">
<!--        <HeaderLayout />-->
<!--        <v-divider class="divider"></v-divider>-->
        <nuxt />
      </div>
    </div>
  </v-app>
</template>

<script>

export default {
  data: () => ({}),
  created() {
    this.itemsMain = this.items;
  },
  computed: {
  },
};
</script>
<style lang="scss" scoped>
  @import "../assets/scss/abstracts/media-query";

.dashboard {
  overflow-y: scroll;
  position: fixed;
  width: 100%;
  height: 100%;
  @include breakpoint(ultra) {
    overflow-y: inherit;
  }
  &__sidebar {
    overflow: hidden;
    width: 16.666%;
    width: calc( 17.5em );
    margin: 28px;
    margin-left: 2em;
    border-radius: 30px;
    float: right;
    height: 93vh;
    background: #EEF0F7;
    @include breakpoint(ultra) {
      /*padding: 30px 29px 354.5px 20px;*/
    }
  }
  &__body {
    transition: all 0.2s ease;
    background: #EEF0F7;
    border-radius: 30px;
    width: 67%;
    width: calc( 100% - 23.5em );
    overflow: hidden;
    height: 93vh;
    margin: 30px;
  }
}
::v-deep {
  .v-list-item__content{
    padding: 6px 0;
  }
  .v-menu__content {
    box-shadow: 1px 2px 4px 3px rgba(50, 50, 110, 0.1) !important;
    background: #fff !important;
    .v-list {
      padding: 0 !important;
      .v-list-item {
        padding: 0px 3px !important;
        margin: 0 !important;
        .v-list-item__title {
          color: #000 !important;
        }
      }
    }
  }
  .logo {
    height: 67px !important;
    margin: 0 !important;
    text-align: center;
    display: inline-block;
    width: 100%;
    line-height: 67px;
    h3{
      color: #7A84B1;
      font-size: 20px;
    }
  }
  .dashboard__body {
    .divider {
      border-color: #e4e4e4 !important;
      opacity: 0.5;
      border-width: 1px !important;
      margin-bottom: 10px;
      margin-top: 5px;
    }
  }
  .theme--light {
    background: inherit;
  }
  .radio-modal {
    .v-item--active {
      border-radius: 20px;
      background-color: #eeeef5;
      padding: 6px 18.8px;
    }
    .v-label {
      font-size: 14px;
      font-weight: bold;
      text-align: center !important;
      color: #8e90a7;
      display: block;
      background: #0000;
    }
    .v-icon {
      color: #d2d2d2;
    }
    .v-radio {
      margin: 0 !important;
      width: 50%;
      padding: 6px 18.8px;
    }

    .add__member {
      .col-sm-6 {
        .col-sm-6 {
          flex: 0 0 45%;
          max-width: 45%;
          margin: 0 0 0 5%;
          padding: 0;
        }
      }
    }

    .v-input--radio-group--column .v-radio:not(:last-child):not(:only-child) {
      padding: 6px 15.8px 5px 38.2px;
      background-color: #eeeef5;
      border-radius: 50px;
    }
    .v-input--radio-group__input {
      display: -webkit-box;
    }
  }
  .v-dialog {
    border-radius: 20px;
    background: #f6f6fe;
    padding: 29px 58px;
    box-shadow: none;
    .theme--light.v-card {
      background-color: #fff;
    }
  }
  .theme--light.v-overlay {
    background: rgb(46 45 102 / 38%) !important;
  }
  header {
    position: relative !important;
    background: inherit !important;
    box-shadow: 1px 1px 1px 1px #f6f6fe !important;
    .v-toolbar__content {
      padding: 0;
      button {
        margin-right: 0 !important;
      }
    }
    .theme--light.v-divider {
      border-color: rgb(215 215 215);
      margin: 5px 0;
    }
  }
  .v-btn__content {
    i {
      font-size: 40px !important;
      color: #30306c !important;
    }
  }
  .v-breadcrumbs {
    padding: 18px 25px;
    li {
      .v-icon {
        color: #31316d;
      }
    }
  }

  .v-breadcrumbs__item {
    font-size: 12px;
    text-align: right;
    color: #2f314a !important;
    font-weight: normal;
  }
  .v-breadcrumbs__item--disabled {
    font-size: 12px;
    font-weight: 500;
    line-height: 1.75;
    text-align: right;
    color: #5050a0 !important;
  }
  .v-lef-header {
    display: flex;
    li {
      .v-btn {
        margin: 0 !important;
        background: inherit !important;
        box-shadow: none !important;
        span {
          font-size: 13px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.54;
          letter-spacing: normal;
          text-align: center;
          color: #82849d !important;
          i {
            font-size: 20px !important;
            color: #82849d !important;
          }
        }
      }
    }
  }
  .v-list-item {
    min-height: 40px !important;
    padding: 0 7px !important;
    overflow: hidden;
    margin: 0 0 15px;
    .v-icon {
      color: #fff !important;
    }
    .v-list-item__title {
      font-size: 14px !important;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.79;
      letter-spacing: normal;
      text-align: right;
      color: #7A84B1 !important;
    }
  }
  .v-list-item__content {
    text-align: right;
  }
  .v-list-item--active {
    padding: 0;
    background-color: #2E3D83 !important;
    color: #fff !important;
    svg {
      .icon {
        fill: #fff;
      }
      .icon2{
        fill: #2E3D83 ;
      }
    }
    &:before {
      opacity: 1 !important;
      z-index: -3;
    }
    .v-list-item__content {
      .v-list-item__title {
        color: #fff !important;
      }
    }
  }
  .theme--light.v-app-bar.v-toolbar.v-sheet {
    height: 58px !important;
    margin: 0 0 4px;
  }

  .v-list-item__icon {
    margin: 6px 5px 0 16px!important;
    padding-right: 30px;
  }
  .theme--light.v-navigation-drawer{
    width: 100%!important;
  }
  .theme--light.v-navigation-drawer .v-divider {
    border-color: rgb(255 255 255 / 32%);
  }
}
.copy-write{
  text-align: center;
  position: fixed;
  bottom: 21px;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  direction: ltr !important;
  font-style: normal;
  line-height: 45px;
  letter-spacing: normal;
  padding: 0;
  color: #707070;
  width: 82%;
  margin: 0;
  left: 0;
}
</style>


