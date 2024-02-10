const fruits = [
  {
    details: {
      productName: 'אבטיח (ללא קליפה)',
      value1: 1,
      value2: 1,
      gram: 200,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(פלח בינוני/כוס קוביות)',
      measures: ['פלח בינוני', 'כוס קוביות'],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: 'אבטיח (פלח עם קליפה)',
      value1: 1,
      value2: 0,
      gram: 400,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '',
      measures: ['פלח עם קליפה', ''],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: 'אגס גדול',
      value1: 1,
      value2: 0,
      gram: 200,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '',
      measures: ['פרי', ''],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: 'אגס קטן',
      value1: 2,
      value2: 0,
      gram: 120,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '',
      measures: ['פרי', ''],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: 'אנונה',
      value1: 1,
      value2: 0,
      gram: 60,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(קטן)',
      measures: ['קטן', ''],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: 'אננס טרי',
      value1: 0.25,
      value2: 0.5,
      gram: 120,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(פרי/כוס)',
      measures: ['פרי', 'כוס'],
    },
    check: {
      value: true,
      count: true,
    },
  },
  {
    details: {
      productName: 'אננס משומר',
      value1: 0.5,
      value2: 0,
      gram: 120,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(כוס)',
      measures: ['כוס', ''],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: 'אפרסימון',
      value1: 0.5,
      value2: 0,
      gram: 100,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(פרי)',
      measures: ['פרי', ''],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: 'אפרסק',
      value1: 1,
      value2: 0,
      gram: 140,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(בינוני)',
      measures: ['בינוני', ''],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: 'אשכולית',
      value1: 0.5,
      value2: 0,
      gram: 160,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(בינוני)',
      measures: ['בינוני', ''],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: 'בננה',
      value1: 0.5,
      value2: 0,
      gram: 100,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(בינוני)',
      measures: ['בינוני', ''],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: 'גויאבה',
      value1: 1,
      value2: 0,
      gram: 120,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(גדול)',
      measures: ['גדול', ''],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: 'דובדבנים',
      value1: 10,
      value2: 0,
      gram: 100,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(גדול עם גלעינים)',
      measures: ['גדול עם גלעינים', ''],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: 'חבוש',
      value1: 0.5,
      value2: 0,
      gram: 90,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(בינוני)',
      measures: ['בינוני', ''],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: 'כוכבנית/קרמבולה',
      value1: 1,
      value2: 0,
      gram: 200,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(בינוני)',
      measures: ['בינוני', ''],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: `ליצ'י`,
      value1: 8,
      value2: 0,
      gram: 150,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(בינוני)',
      measures: ['בינוני', ''],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: 'מיץ פרי טבעי',
      value1: 0.5,
      value2: 0,
      gram: 120,
    },
    unit: {
      gramString: '(מ"ל)',
      measureString: '(כוס)',
      measures: ['כוס', ''],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: 'מלון',
      value1: 1,
      value2: 1,
      gram: 200,
    },
    unit: {
      gramString: '(גרם, ראוי לאכילה)',
      measureString: '(פלח/כוס קוביות)',
      measures: ['פלח', 'כוס קוביות'],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: 'מנגו',
      value1: 0.33333,
      value2: 0,
      gram: 100,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(קטן)',
      measures: ['קטן', ''],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: 'מנדרינה/קלמטינה',
      value1: 1,
      value2: 0,
      gram: 150,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(בינוני)',
      measures: ['בינוני', ''],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: 'מנדרינה/קלמטינה (עם קליפה)',
      value1: 1,
      value2: 0,
      gram: 200,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(בינוני)',
      measures: ['בינוני', ''],
    },
    check: {
      value: false,
      count: false,
    },
  },
  {
    details: {
      productName: 'משמש',
      value1: 3,
      value2: 0,
      gram: 150,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(בינוני)',
      measures: ['בינוני', ''],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: 'משמש מיובש',
      value1: 4,
      value2: 0,
      gram: 20,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(חצאים)',
      measures: ['חצאים', ''],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: 'סלט פירות',
      value1: 0.5,
      value2: 0,
      gram: 120,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(כוס)',
      measures: ['כוס', ''],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: 'ענבים',
      value1: 12,
      value2: 0,
      gram: 100,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(בינוני)',
      measures: ['בינוני', ''],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: 'פאפיה',
      value1: 0.33333,
      value2: 1,
      gram: 120,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(בינוני/כוס קוביות)',
      measures: ['בינוני', 'כוס קוביות'],
    },
    check: {
      value: true,
      count: true,
    },
  },
  {
    details: {
      productName: 'פאפיה (עם קליפה)',
      value1: 0.33333,
      value2: 1,
      gram: 150,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(בינוני/כוס קוביות)',
      measures: ['בינוני', 'כוס קוביות'],
    },
    check: {
      value: true,
      count: false,
    },
  },
  {
    details: {
      productName: 'פומלה',
      value1: 0.33333,
      value2: 0,
      gram: 200,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(קטן)',
      measures: ['קטן', ''],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: 'פומלית (SWEETY)',
      value1: 0.5,
      value2: 0,
      gram: 200,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(קטן)',
      measures: ['קטן', ''],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: `פיג’ויאה`,
      value1: 2,
      value2: 0,
      gram: 160,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(בינוני)',
      measures: ['בינוני', ''],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: 'צבר',
      value1: 2,
      value2: 0,
      gram: 150,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(בינוני)',
      measures: ['בינוני', ''],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: 'צבר (עם קליפה)',
      value1: 2,
      value2: 0,
      gram: 300,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(בינוני)',
      measures: ['בינוני', ''],
    },
    check: {
      value: false,
      count: false,
    },
  },
  {
    details: {
      productName: 'צימוקים',
      value1: 2,
      value2: 0,
      gram: 20,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(כף)',
      measures: ['כף', ''],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: 'קיווי',
      value1: 1,
      value2: 0,
      gram: 100,
    },
    unit: {
      gramString: '(גרם, ראוי לאכילה)',
      measureString: '(גדול)',
      measures: ['גדול', ''],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: 'רימון',
      value1: 0.5,
      value2: 0.5,
      gram: 90,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(קטן/כוס גרעינים)',
      measures: ['קטן', 'כוס גרעינים'],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: 'שזיף (קטן)',
      value1: 2,
      value2: 0,
      gram: 110,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '',
      measures: ['קטן', ''],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: 'שזיף (גדול)',
      value1: 1,
      value2: 0,
      gram: 110,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '',
      measures: ['גדול', ''],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: 'שזיף מיובש',
      value1: 3,
      value2: 0,
      gram: 25,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(בינוני)',
      measures: ['בינוני', ''],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: 'שסק',
      value1: 4,
      value2: 0,
      gram: 120,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(בינוני)',
      measures: ['בינוני', ''],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: 'תאנים (קטנים)',
      value1: 2,
      value2: 0,
      gram: 80,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '',
      measures: ['קטן', ''],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: 'תאנים (גדולים)',
      value1: 1,
      value2: 0,
      gram: 80,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '',
      measures: ['גדול', ''],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: 'תאנה מיובשת',
      value1: 1,
      value2: 0,
      gram: 20,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(בינוני)',
      measures: ['בינוני', ''],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: 'תות שדה',
      value1: 1.5,
      value2: 0,
      gram: 200,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(כוס)',
      measures: ['כוס', ''],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: 'תמר לח',
      value1: 4,
      value2: 0,
      gram: 55,
    },
    unit: {
      gramString: '(גרם, עם גלעינים)',
      measureString: '(בינוני)',
      measures: ['בינוני', ''],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: 'תמר מיובש',
      value1: 2,
      value2: 0,
      gram: 25,
    },
    unit: {
      gramString: '(גרם, עם גלעינים)',
      measureString: '(בינוני)',
      measures: ['בינוני', ''],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: 'תפוז',
      value1: 1,
      value2: 0,
      gram: 150,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(קטן)',
      measures: ['קטן', ''],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: 'תפוח',
      value1: 1,
      value2: 0,
      gram: 100,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(בינוני)',
      measures: ['בינוני', ''],
    },
    check: {
      value: false,
      count: true,
    },
  },
  {
    details: {
      productName: 'רסק תפוחי עץ',
      value1: 0.66667,
      value2: 0,
      gram: 150,
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(כוס)',
      measures: ['כוס', ''],
    },
    check: {
      value: false,
      count: true,
    },
  },
];
export default fruits;
