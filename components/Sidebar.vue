<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer floating permanent :mini-variant.sync="mini">
        <v-list-item class="px-2 logo" flat>
          <h3>پنل مدیر فروش</h3>
        </v-list-item>
        <v-divider></v-divider>
        <div class="block-menu">
          <v-list>
            <v-list-item
              v-for="(item, idx) in itemsMain"
              :key="idx"
              link
              :to="item.href"
            >
              <v-list-item-icon>
                <div v-html="item.icon" />
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="primary--text">{{
                  item.title
                  }}<span v-if="item.notReady" class="item-not-ready-text"> </span></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-list>
            <v-list-item
              v-for="(item, idx) in itemsBottom"
              :key="idx"
              link
              :to="item.href"
            >
              <v-list-item-icon>
                <div v-html="item.icon" />
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="primary--text">{{
                  item.title
                  }} <span v-if="item.notReady" class="item-not-ready-text"> </span> </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>

      </v-navigation-drawer>
    </v-app>
  </div>
</template>

<script>
import SvgDashboard from "~/assets/images/icons/dashboard.svg?raw";
import SvgContact from "~/assets/images/icons/contact.svg?raw";
import SvgCode from "~/assets/images/icons/code.svg?raw";
import SvgPercent from "~/assets/images/icons/percent.svg?raw";
import SvgEdit from "~/assets/images/icons/edit.svg?raw";
import SvgWithdrawal from "~/assets/images/icons/withdrawal.svg?raw";
import SvgUser from "~/assets/images/icons/user.svg?raw";
import SvgSet from "~/assets/images/icons/set.svg?raw";
import SvgReport from "~/assets/images/icons/report.svg?raw";
import SvgExit from "~/assets/images/icons/exit.svg?raw";

// import { store as userStore } from "@/store/user";

export default {
  computed: {
    mini() {
      // return this.$vuetify.breakpoint.smAndDown || this.toggleMini;
    },
  },
  data: () => ({
    itemsMain: [],
    sidebarMenu: true,
    items: [
      {
        title: "داشبورد اصلی ",
        href: "/dashboard/dashboard",
        icon: SvgDashboard,
        notReady:true,
      },
      {
        title: "ثبت کاربر",
        href:"/dashboard/user",
        icon: SvgUser,
        notReady:true,
      },
      {
        title: "درصد شرکت های پخش ",
        href:"/dashboard/percent",
        icon: SvgPercent,
        notReady:true,
      },
      {
        title: "لیست کاربران",
        href:"/dashboard/userList",
        icon: SvgContact,
        notReady:true,
      },
      {
        title: "گزارش فروش",
        href:"/dashboard/report",
        icon: SvgReport,
        notReady:true,
      },
      {
        title: "اختصاص کد",
        href:"/dashboard/code",
        icon: SvgCode,
        notReady:true,
      },
      {
        title: "موجودی کدهای من ",
        href:"/dashboard/inventory",
        icon: SvgEdit,
        notReady:true,
      },
      {
        title: "برداشت وجه",
        href:"/dashboard/withdrawal",
        icon: SvgWithdrawal,
        notReady:true,
      },
    ],
    itemsBottom: [
      {
        title: "تغییر رمز",
        href:"/account/changePass",
        icon: SvgSet,
        notReady:true,
      },
      {
        title: "خروج",
        href:"",
        icon: SvgExit,
        notReady:true,
      },
    ],
  }),
  created() {
    this.itemsMain = this.items;
  },
};
</script>

<style lang="scss" scoped>

  ::v-deep {
  .v-navigation-drawer--mini-variant .v-list-item > *:first-child {
    margin: 0;
    padding: 0;
    width: 116px;
  }
  .v-list-item[href*="disable"] {
    pointer-events: none;
    opacity: 0.7;
  }
}
.item-not-ready-text{
    color: #ffaf00;
    border-radius: 14px;
    text-align: left;
    font-size: 12px;
}
  .block-menu{
    display: flex;
    justify-content: space-between;
    height: 83%;
    overflow: hidden;
    flex-direction: column;
    flex-wrap: nowrap;
  }
</style>
