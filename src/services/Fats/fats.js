const fats = [
        {
                details: {
                        productName: 'אבוקדו',
                        value: 0.16667,
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
                        measureString: '(קטן/כוס)',
                },
                check: {
                        count: true,
                        gram: true,
                        sugar: false,
                },
        },
        {
                details: {
                        productName: 'אגוזי לוז/פיסטוק/קשיו',
                        value: 6,
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
                },
                check: {
                        count: true,
                        gram: false,
                        sugar: false,
                },
        },
        {
                details: {
                        productName: 'אגוזי פקאן/מלך',
                        value: 2,
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
                },
                check: {
                        count: true,
                        gram: false,
                        sugar: false,
                },
        },
        {
                details: {
                        productName: 'בוטנים/שקדים',
                        value: 6,
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
                },
                check: {
                        count: true,
                        gram: false,
                        sugar: false,
                },
        },
        {
                details: {
                        productName: 'גבינת שמנת (30%)',
                        value: 1,
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
                },
                check: {
                        count: true,
                        gram: true,
                        sugar: false,
                },
        },
        {
                details: {
                        productName: '(גרעיני אבטיח (עם קליפה',
                        value: 3,
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
                },
                check: {
                        count: true,
                        gram: true,
                        sugar: false,
                },
        },
        {
                details: {
                        productName: '(גרעיני דלעת (עם קליפה',
                        value: 2,
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
                },
                check: {
                        count: true,
                        gram: true,
                        sugar: false,
                },
        },
        {
                details: {
                        productName: 'גרעיני חמניות (עם קליפה)',
                        value: 3,
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
                },
                check: {
                        count: true,
                        gram: true,
                        sugar: false,
                },
        },
        {
                details: {
                        productName: '(גרעיני חמניות (בלי קליפה',
                        value: 1,
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
                },
                check: {
                        count: true,
                        gram: true,
                        sugar: false,
                },
        },
        {
                details: {
                        productName: 'זיתים',
                        value: 10,
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
                },
                check: {
                        count: true,
                        gram: true,
                        sugar: false,
                },
        },
        {
                details: {
                        productName: 'חלבה',
                        value: 1,
                        gram: 10,
                        sugar: 0.5,
                        message: '',
                },
                sugar: {
                        sugarCalculation: 0.5,
                        sugarCalculationGram: 10,
                        sugarString: '* יש להוסיף מנות סוכר',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(פרוסה דקה)',
                },
                check: {
                        count: true,
                        gram: true,
                        sugar: true,
                },
        },
        {
                details: {
                        productName: 'חמאת בוטנים',
                        value: 2,
                        gram: 10,
                        sugar: 0.5,
                        message: '',
                },
                sugar: {
                        sugarCalculation: 0.5,
                        sugarCalculationGram: 10,
                        sugarString: '* יש להוסיף מנות סוכר',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(כף)',
                },
                check: {
                        count: true,
                        gram: true,
                        sugar: true,
                },
        },
        {
                details: {
                        productName: 'טחינה גולמית',
                        value: 1,
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
                },
                check: {
                        count: true,
                        gram: false,
                        sugar: false,
                },
        },
        {
                details: {
                        productName: 'טחינה מוכנה',
                        value: 1,
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
                },
                check: {
                        count: true,
                        gram: false,
                        sugar: false,
                },
        },
        {
                details: {
                        productName: 'מיונז',
                        value: 1,
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
                },
                check: {
                        count: true,
                        gram: true,
                        sugar: false,
                },
        },
        {
                details: {
                        productName: 'מיונז דיאטטי',
                        value: 3,
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
                },
                check: {
                        count: true,
                        gram: false,
                        sugar: false,
                },
        },
        {
                details: {
                        productName: 'מרגרינה/חמאה',
                        value: 1,
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
                },
                check: {
                        count: true,
                        gram: false,
                        sugar: false,
                },
        },
        {
                details: {
                        productName: 'קלורינה/מזולה (לייט)',
                        value: 1,
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
                },
                check: {
                        count: true,
                        gram: false,
                        sugar: false,
                },
        },
        {
                details: {
                        productName: 'קצפת משמנת מתוקה',
                        value: 1,
                        gram: 15,
                        sugar: 0.5,
                        message: '',
                },
                sugar: {
                        sugarCalculation: 0.5,
                        sugarCalculationGram: 15,
                        sugarString: '* יש להוסיף מנות סוכר',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(כף)',
                },
                check: {
                        count: true,
                        gram: true,
                        sugar: true,
                },
        },
        {
                details: {
                        productName: 'רוטב לסלט',
                        value: 2,
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
                },
                check: {
                        count: true,
                        gram: false,
                        sugar: false,
                },
        },
        {
                details: {
                        productName: 'רוטב לסלט לייט',
                        value: 2,
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
                },
                check: {
                        count: true,
                        gram: false,
                        sugar: false,
                },
        },
        {
                details: {
                        productName: 'שמן מכל סוג',
                        value: 1,
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
                },
                check: {
                        count: true,
                        gram: true,
                        sugar: false,
                },
        },
        {
                details: {
                        productName: 'שמנת חמוצה (15%)',
                        value: 2,
                        gram: 30,
                        sugar: 0,
                        message: '* אינם משתייכים לקבוצת החלב מאחר ודלים מאוד בחלבון.',
                },
                sugar: {
                        sugarCalculation: 0,
                        sugarCalculationGram: 0,
                        sugarString: '',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(כף)',
                },
                check: {
                        count: true,
                        gram: true,
                        sugar: false,
                },
        },
        {
                details: {
                        productName: 'שמנת לקפה (10%)',
                        value: 2.5,
                        gram: 40,
                        sugar: 0,
                        message: "* אינם משתייכים לקבוצת החלב מאחר ודלים מאוד בחלבון.",
                },
                sugar: {
                        sugarCalculation: 0,
                        sugarCalculationGram: 0,
                        sugarString: '',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(כף)',
                },
                check: {
                        count: true,
                        gram: true,
                        sugar: false,
                },
        },
        {
                details: {
                        productName: 'שמנת קלה (8%)',
                        value: 3,
                        gram: 45,
                        sugar: 0,
                        message: "* אינם משתייכים לקבוצת החלב מאחר ודלים מאוד בחלבון.",
                },
                sugar: {
                        sugarCalculation: 0,
                        sugarCalculationGram: 0,
                        sugarString: '',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(כף)',
                },
                check: {
                        count: true,
                        gram: true,
                        sugar: false,
                },
        },
];
export default fats;  