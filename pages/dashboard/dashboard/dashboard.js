import svgFill from "~/assets/images/icons/star-fill.svg?raw";
import svgempty from "~/assets/images/icons/star_empty.svg?raw";
export default {
  layout: 'dashboard',
  name: 'dashboard',
  // components: {
  //   apexchart: VueApexCharts,
  // },
  data() {
    return {
      select: { time: 'روز گذشته', value: '1' },
      items: [
        { time: 'روز گذشته', value: '1' },
        { time: 'هفته گذشته', value: '2' },
        { time: 'ماه گذشته', value: '3' },
        { time: 'سال گذشته', value: '4' },
      ],
      search: 'جستجو',
      seller: [
        {
          star: svgFill,
          name: 'هاشم قصابان',
          price: '۱۶۵,۰۰۰,۰۰۰',
        },
        {
          star: svgFill,
          name: 'هاشم قصابان',
          price: '۱۶۵,۰۰۰,۰۰۰',
        },
        {
          star: svgFill,
          name: 'هاشم قصابان',
          price: '۱۶۵,۰۰۰,۰۰۰',
        },
        {
          star: svgempty,
          name: 'هاشم قصابان',
          price: '۱۶۵,۰۰۰,۰۰۰',
        },
        {
          star: svgempty,
          name: 'هاشم قصابان',
          price: '۱۶۵,۰۰۰,۰۰۰',
        },

      ],
      progress: [
        {
          name: 'پخش اپال',
          percent: '10',
          status: '+1.5',
          color:'#FF715B'
        },
        {
          name: 'پخش اپال',
          percent: '80',
          status: '+1.5',
          color:'#EF9123'
        },
        {
          name: 'پخش اپال',
          percent: '50',
          status: '+1.5',
          color:'#5ECFFF'
        },
        {
          name: 'پخش اپال',
          percent: '40',
          status: '+1.5',
          color:'#FF4A55'
        },
        {
          name: 'پخش اپال',
          percent: '33',
          status: '+1.5',
          color:'#6418C3'
        },

      ],
      knowledge: 33,
      series: [
        {
          name: 'تعداد نصب',
          data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
        },
        {
          name: 'کاربر کد هدیه',
          data: [14, 2, 3, 4, 4, 19, 32, 7, 5, 12, 3, 6, 1, 13, 17, 2, 7, 23]
        }
      ],

      chartOptions: {
        legend: {
          show: true,
          position: 'top',
          fontSize: '10px',
          fontFamily:  'IRANSans',
          inverseOrder: false,
          offsetX: -300,
          offsetY: -30,
          labels: {
            colors: ['#FFBF0C', '#6418C3'],
            useSeriesColors: false
          },
          markers: {
            fillColors:  ['#FFBF0C', '#6418C3'],
          },
        },
        chart: {
          height: 350,
          type: 'line',
          toolbar: {
            show: false
          },
        },
        stroke: {
          colors: ['#FFBF0C', '#6418C3'],
          width: 3,
          curve: 'smooth',
        },
        xaxis: {
          type: 'datetime',
          categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001'],
          tickAmount: 10,
          labels: {
            formatter: function (value, timestamp, opts) {
              return opts.dateFormatter(new Date(timestamp), 'dd MMM')
            }
          }
        },

        title: {
          text: 'کانورژن نصب به کاربر کد هدیه',
          align: 'right',
          margin: 10,
          offsetX: -190,
          offsetY: 10,
          floating: false,
          style: {
            fontSize:  '15px',
            fontWeight:'normal',
            fontFamily:  'IRANSans',
            color:  '#000'
          },
        },
        yaxis: {
          min: -10,
          max: 40,
          title: {
            text: '',
          },
        }
      },
      seriesSub: [44, 55, 41, 17, 15],
      chartOptionsSub: {
        chart: {
          width: 380,
          type: 'donut',
        },
        title: {
          text: 'جزئیات هر اشتراک',
          align: 'right',
          margin: 10,
          offsetX: -150,
          offsetY: 225,
          floating: false,
          style: {
            fontSize:  '12px',
            fontWeight:'normal',
            fontFamily:  'IRANSans',
            color:  '#7A84B1'
          },
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 270
          }
        },
        dataLabels: {
          enabled: false
        },
        fill: {
          type: 'gradient',
        },
        legend: {
          show: true,
          showForSingleSeries: false,
          showForNullSeries: true,
          showForZeroSeries: true,
          position: 'bottom',
          horizontalAlign: 'center',
          floating: false,
          fontSize: '14px',
          fontFamily: 'Helvetica, Arial',
          fontWeight: 400,
          formatter: undefined,
          inverseOrder: false,
          width: undefined,
          height: undefined,
          tooltipHoverFormatter: undefined,
          offsetX: 0,
          offsetY: 0,
          labels: {
            colors: undefined,
            useSeriesColors: false
          },
          markers: {
            width: 12,
            height: 12,
            strokeWidth: 0,
            strokeColor: '#fff',
            fillColors: undefined,
            radius: 12,
            customHTML: undefined,
            onClick: undefined,
            offsetX: 0,
            offsetY: 0
          },
          itemMargin: {
            horizontal: 5,
            vertical: 0
          },
          onItemClick: {
            toggleDataSeries: true
          },
          onItemHover: {
            highlightDataSeries: true
          },
        },

        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }],

      },
      seriesInv: [70],
      chartOptionsInv: {
        chart: {
          height: 350,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%',
              labels:'20000'
            }
          },
        },
        labels: ['جمع مبلغ تا امروز'],
      },
    }
  },
}
