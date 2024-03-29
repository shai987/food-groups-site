const fats = [
  {
    details: {
      productName: 'אבוקדו',
      value1: 1 / 6,
      value2: 2,
      gram: 25,
      sugar: 0,
      message: '',
    },
    sugar: {
      sugarCalculation: 0,
      sugarCalculationGram: 0,
      sugarString: '',
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(קטן/כף)',
      measures: ['קטן', 'כף'],
    },
    check: {
      message: false,
      gram: true,
      sugar: false,
      value: true,
    },
  },
  {
    details: {
      productName: 'אגוזי לוז/פיסטוק/קשיו',
      value1: 6,
      gram: 0,
      sugar: 0,
      message: '',
    },
    sugar: {
      sugarCalculation: 0,
      sugarCalculationGram: 0,
      sugarString: '',
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(יחידה)',
      measures: ['יחידה', ''],
    },
    check: {
      message: false,
      gram: false,
      sugar: false,
      value: false,
    },
  },
  {
    details: {
      productName: 'אגוזי פקאן/מלך',
      value1: 2,
      gram: 0,
      sugar: 0,
      message: '',
    },
    sugar: {
      sugarCalculation: 0,
      sugarCalculationGram: 0,
      sugarString: '',
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(יחידה)',
      measures: ['יחידה', ''],
    },
    check: {
      message: false,
      gram: false,
      sugar: false,
      value: false,
    },
  },
  {
    details: {
      productName: 'בוטנים/שקדים',
      value1: 6,
      gram: 0,
      sugar: 0,
      message: '',
    },
    sugar: {
      sugarCalculation: 0,
      sugarCalculationGram: 0,
      sugarString: '',
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(יחידה)',
      measures: ['יחידה', ''],
    },
    check: {
      message: false,
      gram: false,
      sugar: false,
      value: false,
    },
  },
  {
    details: {
      productName: 'גבינת שמנת (30%)',
      value1: 1,
      gram: 15,
      sugar: 0,
      message: '',
    },
    sugar: {
      sugarCalculation: 0,
      sugarCalculationGram: 0,
      sugarString: '',
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(כף)',
      measures: ['כף', ''],
    },
    check: {
      message: false,
      gram: true,
      sugar: false,
      value: false,
    },
  },
  {
    details: {
      productName: 'גרעיני אבטיח (עם קליפה)',
      value1: 3,
      gram: 25,
      sugar: 0,
      message: '',
    },
    sugar: {
      sugarCalculation: 0,
      sugarCalculationGram: 0,
      sugarString: '',
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(כף)',
      measures: ['כף', ''],
    },
    check: {
      message: false,
      gram: true,
      sugar: false,
      value: false,
    },
  },
  {
    details: {
      productName: 'גרעיני דלעת (עם קליפה)',
      value1: 2,
      gram: 10,
      sugar: 0,
      message: '',
    },
    sugar: {
      sugarCalculation: 0,
      sugarCalculationGram: 0,
      sugarString: '',
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(כף)',
      measures: ['כף', ''],
    },
    check: {
      message: false,
      gram: true,
      sugar: false,
      value: false,
    },
  },
  {
    details: {
      productName: 'גרעיני חמניות (עם קליפה)',
      value1: 3,
      gram: 15,
      sugar: 0,
      message: '',
    },
    sugar: {
      sugarCalculation: 0,
      sugarCalculationGram: 0,
      sugarString: '',
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(כף)',
      measures: ['כף', ''],
    },
    check: {
      message: false,
      gram: true,
      sugar: false,
      value: false,
    },
  },
  {
    details: {
      productName: 'גרעיני חמניות (בלי קליפה)',
      value1: 1,
      gram: 8,
      sugar: 0,
      message: '',
    },
    sugar: {
      sugarCalculation: 0,
      sugarCalculationGram: 0,
      sugarString: '',
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(כף)',
      measures: ['כף', ''],
    },
    check: {
      message: false,
      gram: true,
      sugar: false,
      value: false,
    },
  },
  {
    details: {
      productName: 'זיתים',
      value1: 10,
      gram: 30,
      sugar: 0,
      message: '',
    },
    sugar: {
      sugarCalculation: 0,
      sugarCalculationGram: 0,
      sugarString: '',
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(בינוני)',
      measures: ['בינוני', ''],
    },
    check: {
      message: false,
      gram: true,
      sugar: false,
      value: false,
    },
  },
  {
    details: {
      productName: 'חלבה',
      value1: 1,
      gram: 10,
      sugar: 0.5,
      message: '',
    },
    sugar: {
      sugarCalculation: 2,
      sugarCalculationGram: 20,
      sugarString: ' יש להוסיף מנות סוכר *',
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(פרוסה דקה)',
      measures: ['פרוסה דקה', ''],
    },
    check: {
      message: false,
      gram: true,
      sugar: true,
      value: false,
    },
  },
  {
    details: {
      productName: 'חמאת בוטנים',
      value1: 2,
      gram: 10,
      sugar: 0.5,
      message: '',
    },
    sugar: {
      sugarCalculation: 4,
      sugarCalculationGram: 20,
      sugarString: ' יש להוסיף מנות סוכר *',
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(כף)',
      measures: ['כף', ''],
    },
    check: {
      message: false,
      gram: true,
      sugar: true,
      value: false,
    },
  },
  {
    details: {
      productName: 'טחינה גולמית',
      value1: 1,
      gram: 0,
      sugar: 0,
      message: '',
    },
    sugar: {
      sugarCalculation: 0,
      sugarCalculationGram: 0,
      sugarString: '',
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(כפית)',
      measures: ['כפית', ''],
    },
    check: {
      message: false,
      gram: false,
      sugar: false,
      value: false,
    },
  },
  {
    details: {
      productName: 'טחינה מוכנה',
      value1: 1,
      gram: 0,
      sugar: 0,
      message: '',
    },
    sugar: {
      sugarCalculation: 0,
      sugarCalculationGram: 0,
      sugarString: '',
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(כף)',
      measures: ['כף', ''],
    },
    check: {
      message: false,
      gram: false,
      sugar: false,
      value: false,
    },
  },
  {
    details: {
      productName: 'מיונז',
      value1: 1,
      gram: 7,
      sugar: 0,
      message: '',
    },
    sugar: {
      sugarCalculation: 0,
      sugarCalculationGram: 0,
      sugarString: '',
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(כפית)',
      measures: ['כפית', ''],
    },
    check: {
      message: false,
      gram: true,
      sugar: false,
      value: false,
    },
  },
  {
    details: {
      productName: 'מיונז דיאטטי',
      value1: 3,
      gram: 0,
      sugar: 0,
      message: '',
    },
    sugar: {
      sugarCalculation: 0,
      sugarCalculationGram: 0,
      sugarString: '',
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(כפית)',
      measures: ['כפית', ''],
    },
    check: {
      message: false,
      gram: false,
      sugar: false,
      value: false,
    },
  },
  {
    details: {
      productName: 'מרגרינה/חמאה',
      value1: 1,
      gram: 0,
      sugar: 0,
      message: '',
    },
    sugar: {
      sugarCalculation: 0,
      sugarCalculationGram: 0,
      sugarString: '',
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(כפית)',
      measures: ['כפית', ''],
    },
    check: {
      message: false,
      gram: false,
      sugar: false,
      value: false,
    },
  },
  {
    details: {
      productName: 'קלורינה/מזולה (לייט)',
      value1: 1,
      gram: 0,
      sugar: 0,
      message: '',
    },
    sugar: {
      sugarCalculation: 0,
      sugarCalculationGram: 0,
      sugarString: '',
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(כפית)',
      measures: ['כפית', ''],
    },
    check: {
      message: false,
      gram: false,
      sugar: false,
      value: false,
    },
  },
  {
    details: {
      productName: 'קצפת משמנת מתוקה',
      value1: 1,
      gram: 15,
      sugar: 0.5,
      message: '',
    },
    sugar: {
      sugarCalculation: 2,
      sugarCalculationGram: 30,
      sugarString: ' יש להוסיף מנות סוכר *',
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(כף)',
      measures: ['כף', ''],
    },
    check: {
      message: false,
      gram: true,
      sugar: true,
      value: false,
    },
  },
  {
    details: {
      productName: 'רוטב לסלט',
      value1: 2,
      gram: 0,
      sugar: 0,
      message: '',
    },
    sugar: {
      sugarCalculation: 0,
      sugarCalculationGram: 0,
      sugarString: '',
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(כפית)',
      measures: ['כפית', ''],
    },
    check: {
      message: false,
      gram: false,
      sugar: false,
      value: false,
    },
  },
  {
    details: {
      productName: 'רוטב לסלט לייט',
      value1: 2,
      gram: 0,
      sugar: 0,
      message: '',
    },
    sugar: {
      sugarCalculation: 0,
      sugarCalculationGram: 0,
      sugarString: '',
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(כף)',
      measures: ['כף', ''],
    },
    check: {
      message: false,
      gram: false,
      sugar: false,
      value: false,
    },
  },
  {
    details: {
      productName: 'שמן מכל סוג',
      value1: 1,
      gram: 5,
      sugar: 0,
      message: '',
    },
    sugar: {
      sugarCalculation: 0,
      sugarCalculationGram: 0,
      sugarString: '',
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(כפית)',
      measures: ['כפית', ''],
    },
    check: {
      message: false,
      gram: true,
      sugar: false,
      value: false,
    },
  },
  {
    details: {
      productName: 'שמנת חמוצה (15%)',
      value1: 2,
      gram: 30,
      sugar: 0,
      message: ' .אינו משתייך לקבוצת החלב מאחר ודל מאוד בחלבון *',
    },
    sugar: {
      sugarCalculation: 0,
      sugarCalculationGram: 0,
      sugarString: '',
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(כף)',
      measures: ['כף', ''],
    },
    check: {
      message: true,
      gram: true,
      sugar: false,
      value: false,
    },
  },
  {
    details: {
      productName: 'שמנת לקפה (10%)',
      value1: 2.5,
      gram: 40,
      sugar: 0,
      message: ' .אינו משתייך לקבוצת החלב מאחר ודל מאוד בחלבון *',
    },
    sugar: {
      sugarCalculation: 0,
      sugarCalculationGram: 0,
      sugarString: '',
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(כף)',
      measures: ['כף', ''],
    },
    check: {
      message: true,
      gram: true,
      sugar: false,
      value: false,
    },
  },
  {
    details: {
      productName: 'שמנת קלה (8%)',
      value1: 3,
      gram: 45,
      sugar: 0,
      message: 'אינו משתייך לקבוצת החלב מאחר ודל מאוד בחלבון *.',
    },
    sugar: {
      sugarCalculation: 0,
      sugarCalculationGram: 0,
      sugarString: '',
    },
    unit: {
      gramString: '(גרם)',
      measureString: '(כף)',
      measures: ['כף', ''],
    },
    check: {
      message: true,
      gram: true,
      sugar: false,
      value: false,
    },
  },
];
export default fats;
