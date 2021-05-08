import svgFill from "~/assets/images/icons/star-fill.svg?raw";
import svgempty from "~/assets/images/icons/star_empty.svg?raw";
export default {
  layout: 'dashboard',
  name: 'dashboard',
  data: () => ({
    items: ['روز گذشته', 'هفته گذشته', 'ماه گذشته', 'سال گذشته'],
    search: 'جستجو',
    seller : [
      {
        star : svgFill,
        name: 'هاشم قصابان',
        price: '۱۶۵,۰۰۰,۰۰۰',
      },
      {
        star : svgFill,
        name: 'هاشم قصابان',
        price: '۱۶۵,۰۰۰,۰۰۰',
      },
      {
        star : svgFill,
        name: 'هاشم قصابان',
        price: '۱۶۵,۰۰۰,۰۰۰',
      },
      {
        star : svgempty,
        name: 'هاشم قصابان',
        price: '۱۶۵,۰۰۰,۰۰۰',
      },
      {
        star : svgempty,
        name: 'هاشم قصابان',
        price: '۱۶۵,۰۰۰,۰۰۰',
      },

    ]
  }),
}
