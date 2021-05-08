<template>

  <v-app-bar  elevation="0">
    <v-app-bar-nav-icon @click="mini"></v-app-bar-nav-icon>
<!--    <v-breadcrumbs :items="breadcrumbs">-->
<!--      <template v-slot:divider>-->
<!--        <v-icon>mdi-chevron-left</v-icon>-->
<!--      </template>-->
<!--    </v-breadcrumbs>-->
    <v-spacer></v-spacer>
    <a href="tel:02174318700" class="phone-header">
<!--      <img src="@/assets/images/shape/sp_tell_icon.png" alt="">-->
    </a>
    <ul v-if="isLoggedIn" class="v-lef-header">
      <li>
        <v-flex xs12 class="mt-2">
<!--            <img src="../../assets/images/icons/ic_notification.svg" alt="">-->
        </v-flex>
      </li>
      <li>
        <v-menu
          v-for="([text, rounded], index) in btns"
          :key="text"
          :rounded="rounded"
          offset-y
        >
          <template v-slot:activator="{ attrs, on }">
            <v-btn
              class="white--text ma-8"
              v-bind="attrs"
              v-on="on"
            >
              <i aria-hidden="true" class="v-icon notranslate mdi mdi-chevron-down theme--light" data-v-219881f1=""></i>
              {{phoneNumber}}
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(item , idx) in items"
              :key="idx"
              link
              @click.native="menuCmd(item.cmd)"
              class="exit-menu"
            >
<!--              <img src="../../assets/images/icons/ic_logout.svg" alt="">-->
              <v-list-item-title  v-text="item.text"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-avatar>
<!--          <img-->
<!--            src="@/assets/images/icons/user-profile-placeholder.png"-->
<!--            alt="John"-->
<!--          >-->
        </v-avatar>
      </li>
    </ul>


    <ul @click="showSignPopup" class="sign-text" v-if="!isLoggedIn">
        <li>ورود / ثبت‌نام</li>
    </ul>
  </v-app-bar>

</template>

<script>

// import { store as userStore } from "@/store/user";


  export default {
    name: "HEADER",


    data: () => ({
      itemsMain: [],
      sidebarMenu: true,
      show: true,
      btns: [
        ['Custom', 'b-xl'],
      ],
      items: [{text:'خروج',cmd:'exit'}],
      breadcrumbs: [
        {
          text: 'خانه ثبت یار',
          disabled: false,
          href: '/dashboard',
        },
        {
          text: '',
          disabled: true,
          href: '#',
        },
      ],
    }),
    computed: {
      toggleMini  : userStore.sync('sideBarMini'),

      isLoggedIn:userStore.get('isLoggedIn'),
      phoneNumber:userStore.get('phoneNumber'),

    },
    methods:{
      mini() {
        this.toggleMini = !this.toggleMini
      },

      menuCmd(cmd){
          switch(cmd){
              case 'exit':
                userStore.of(this).dispatch('signOut')
              break;
          }
      },
      showSignPopup(){
          userStore.of(this).commit('showPopup')
      }
    },
  }
</script>

<style lang="scss" scoped>
  ::v-deep{
    .exit-menu{
      .v-list-item__title{
        text-align: center;
      }
      img{
        position: relative;
        right: 15px;
        opacity: 0.5;
      }
    }
  }
.sign-text{
    cursor:pointer;
}
  .phone-header{
    margin: 0 25px;
    display: inline-block;
    width: auto;
  }
</style>
