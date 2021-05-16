<template>
  <v-app>
    <div v-if="$auth.loggedIn">
      {{$auth.user.email}}
      <v-btn class="main-btn " text>logout</v-btn>

    </div>
    <div v-else>
      <v-dialog
        v-model="dialog"
        persistent
        max-width="350"
      >
        <div class="form-structor">
          <div class="signup">
            <h2 class="form-title" id="signup">ثبت نام</h2>
            <div class="form-holder">
              <input type="text" class="input" placeholder="نام" />
              <input type="email" class="input" placeholder="ایمیل" />
              <input type="password" class="input" placeholder="رمز ورود" />
            </div>
            <button class="submit-btn" @click="dialog = false">ثبت نام</button>
          </div>
          <div class="login slide-up">
            <div class="center">
              <h2 class="form-title" id="login">ورود</h2>
              <div class="form-holder">
                <input type="email" class="input" placeholder="ایمیل" />
                <input type="password" class="input" placeholder="رمز ورود" />
              </div>
              <button class="submit-btn" @click="dialog = false">ورود</button>
            </div>
          </div>
        </div>
        <template v-slot:activator="{ on, attrs }">
        </template>
      </v-dialog>
    </div>
    <div class="dashboard">
      <div class="dashboard__sidebar">

        <Sidebar />
      </div>
      <div class="dashboard__body">
        <nuxt />
      </div>
    </div>
  </v-app>
</template>

<script>

export default {
  data: () => ({
    dialog: true,
    valid: false,
    e1: false,
    password: '',
    passwordRules: [
      (v) => !!v || 'Password is required',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    ],
  }),
  created() {
    this.itemsMain = this.items;
  },
  mounted()  {
    console.clear();

    const loginBtn = document.getElementById('login');
    const signupBtn = document.getElementById('signup');

    loginBtn.addEventListener('click', (e) => {
      let parent = e.target.parentNode.parentNode;
      Array.from(e.target.parentNode.parentNode.classList).find((element) => {
        if(element !== "slide-up") {
          parent.classList.add('slide-up')
        }else{
          signupBtn.parentNode.classList.add('slide-up')
          parent.classList.remove('slide-up')
        }
      });
    });

    signupBtn.addEventListener('click', (e) => {
      let parent = e.target.parentNode;
      Array.from(e.target.parentNode.classList).find((element) => {
        if(element !== "slide-up") {
          parent.classList.add('slide-up')
        }else{
          loginBtn.parentNode.parentNode.classList.add('slide-up')
          parent.classList.remove('slide-up')
        }
      });
    });
  },
};
</script>
<style lang="scss" scoped>
  @import "../assets/scss/abstracts/media-query";

.dashboard {
  overflow-y: scroll;
  position: static;
  width: 100%;
  height: 100%;
  @include breakpoint(small) {
    position: fixed;
  }
  @include breakpoint(ultra) {
    overflow-y: inherit;
  }
  &__sidebar {
    overflow: hidden;
    margin: 28px 10px;
    border-radius: 13px;
    float: right;
    height: 93vh;
    background: #EEF0F7;
    @include breakpoint(medium) {
      border-radius: 30px;
      margin: 28px;
    }
  }
  &__body {
    transition: all 0.2s ease;
    background: #EEF0F7;
    border-radius: 13px;
    width: 67%;
    width: calc( 100% - 5.5em );
    overflow-x: hidden;
    overflow-y: auto;
    height: 93vh;
    margin: 30px 0;
    @include breakpoint(small) {
      border-radius: 30px;
      width: calc( 100% - 8.5em );
      margin: 30px;
    }
    @include breakpoint(medium) {
      width: calc( 100% - 21.5em );
    }
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
        /*.v-list-item__title {*/
        /*  color: #000 !important;*/
        /*}*/
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
    background-color: #fff;
    border-radius: 16px;
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
::v-deep{
  legend{
    text-align: right!important;
    margin-right: 32px!important;
  }
  .login-field{
    label{
      right: 0 !important;
      letter-spacing: 0 !important;
      left: auto !important;
      font-size: 12px;
      color: #929292;
    }

  }
}


</style>


