<template>
  <div class="v-content">
    <div class="v-content__top">
      <div class="v-content__info">
        <div class=" row top">
          <v-col>
            <v-select
              :items="items"
              outlined
              class="filter-time"
            ></v-select>
          </v-col>
          <v-col>
            <v-text-field  v-model="search"
                           outlined
                           clearable
                           class="filter-time"
                           >
            </v-text-field>
          </v-col>
        </div>
        <div class=" row bottom">
          <v-col>
            <div class="total-income">
              <div class="top">
                <div class="text">
                  <h4>مجموع درامد</h4>
                  <p>اشتراک و ری اکتیوشن ها</p>
                </div>
                <div class="percent">
                  <span>+64%</span>
                  <img src="@/assets/images/icons/chart-top.svg" alt="">
                </div>
              </div>
              <div class="bottom">
                <p> 46,500,000 <span>تومان</span></p>
              </div>
            </div>
          </v-col>
          <v-col>
            <div class="box">
              <img src="@/assets/images/icons/shop.svg" alt="">
              <span class="text">تعداد فروشگاه</span>
              <div class="price">61,200</div>
              <p class="count-shop">۲۱۰ فروشگاه در ماه جدید</p>
            </div>
          </v-col>
          <v-col>
            <div class="box">
              <img src="@/assets/images/icons/install.svg" alt="">
              <span class="text">تعداد نصب</span>
              <div class="price">۱,۲۴۳,۴۰۶</div>
            </div>
          </v-col>
        </div>
      </div>
      <div class="v-content__chart"></div>

    </div>
    <div class="v-content__center">
      <div class="box-chart ">
        <div class="box-chart__subscription">
          <div class="title">
            <h3>تعداد اشتراک‌ها</h3>
            <span>۱۳۵,۲۴۶</span>
          </div>
          <div class="chart"></div>
          <div class="box-chart__detail">
            <span>جزئیات هر اشتراک</span>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div class="box-chart__price">
            <span class="text">مجموع</span>
            <span class="price">۳۲۱,۴۵۶,۰۰۰</span>
          </div>
        </div>
      </div>
      <div class="box-chart ">
        <div class="box-chart__reactive">
          <div class="title">
            <h3>تعداد ری‌اکتیویشن</h3>
            <span>۱۳۵,۲۴۶</span>
          </div>
          <div class="chart"></div>
          <div class="box-chart__detail">
            <span>جزئیات هر اشتراک</span>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div class="box-chart__price">
            <span class="text">مجموع</span>
            <span class="price">۳۲۱,۴۵۶,۰۰۰</span>
          </div>

        </div>
      </div>
      <div class="box-chart ">
        <div class="box-chart__inviting">
          <div class="title">
            <h3>پاداش دعوت از دیگران</h3>
            <span class="date">تا ۲۱ بهمن</span>
          </div>
          <div class="chart"></div>
          <div class="box-chart__detail">
            <p>این مبلغ در پایان هر ماه بین تمام اعضاء تقسیم می‌شود
(به تناسب کاربران فعال شده هر مجموعه / شخص)</p>
            <div class="count-user">
              <div class="user-box">
                <span class="user-box__subject">تعداد کل کاربران فعال شده در این ماه</span>
                <div class="user-box__num">
                  ۱،۲۳۵,۸۶۲
                </div>
              </div>
              <div class="user-box">
                <span class="user-box__subject">تعداد کاربران فعال شده شمادر این ماه</span>
                <div class="user-box__num">
                  ۵۴۳
                </div>
              </div>
            </div>
          </div>
          <div class="box-chart__price">
            <span class="text">سهم شما</span>
            <span class="price">۳۲۱,۴۵۶,۰۰۰</span>
          </div>
        </div>
      </div>
      <div class="box-progress">
        <div class="box-progress__volume">
          <div class="title">
            <h3>حجم فروش شرکت‌های پخش</h3>
            <img src="@/assets/images/icons/plus.svg" alt="">
          </div>
        </div>
        <div class="box-progress__sellers">
          <div class="title">
            <h3>فروشنده‌های برتر بر اساس درآمد</h3>
            <img src="@/assets/images/icons/plus.svg" alt="">
          </div>
          <ul class="top-sellers">
            <li v-for="(item, index) in seller" :key="index">
              <div class="top-sellers__info">
                <div class="star" v-html="item.star">
                </div>
                <span class="count">{{index + 1}}</span>
                <div class="name">
                  <p>{{item.name}}</p>
                  <span>پخش اپل</span>
                </div>
              </div>
              <div class="top-sellers__price">
                <p>{{item.price}}</p>
                <img src="@/assets/images/icons/report.svg" alt="">
              </div>

            </li>

          </ul>
        </div>
      </div>
    </div>
    <div class="v-content__bottom">
      <div class="amount-wallet">
        <p>موجودی کیف پول شما:</p>
        <span>۱۶۳,۵۰۰,۰۰۰ ريال</span>
      </div>
      <v-btn depressed class="main-btn">
        درخواست برداشت وجه
      </v-btn>
    </div>
  </div>
</template>

<script src="./dashboard.js"></script>
<style lang="scss"  src="@/assets/scss/pages/dashboard.scss"></style>

