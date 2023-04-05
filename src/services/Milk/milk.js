const milk = [
        {
                details: {
                        productName: 'גבינה מותכת',
                        value1: 2,
                        value2: 0,
                        gram: 60,
                        sugar: 0,
                        message: '.דל בפחמימות ומכיל יותר חלבון ו/או שומן (120 קלוריות) *',
                },
                sugar: {
                        sugarCalculation: 0,
                        sugarCalculationGram: 0,
                        sugarString: '',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(משולש)',
                        measures: ['משולש', ''],
                },
                check: {
                        count: true,
                        gram: true,
                        sugar: false,
                        message: true,
                        value: false,
                },
        },
        {
                details: {
                        productName: 'גבינה צהובה (22%)',
                        value1: 2,
                        value2: 0,
                        gram: 40,
                        sugar: 0,
                        message: '.דל בפחמימות ומכיל יותר חלבון ו/או שומן (120 קלוריות) *',
                },
                sugar: {
                        sugarCalculation: 0,
                        sugarCalculationGram: 0,
                        sugarString: '',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(פרוסה)',
                        measures: ['פרוסה', ''],
                },
                check: {
                        count: true,
                        gram: true,
                        sugar: false,
                        message: true,
                        value: false,
                },
        },
        {
                details: {
                        productName: 'גבינה מלוחה (16%)',
                        value1: 0,
                        value2: 0,
                        gram: 60,
                        sugar: 0,
                        message: '.דל בפחמימות ומכיל יותר חלבון ו/או שומן (120 קלוריות) *',
                },
                sugar: {
                        sugarCalculation: 0,
                        sugarCalculationGram: 0,
                        sugarString: '',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '',
                        measureString1: '-',
                        measureString2: '',
                        measures: ['-', ''],

                },
                check: {
                        count: false,
                        gram: true,
                        sugar: false,
                        message: true,
                        value: false,
                },
        },
        {
                details: {
                        productName: `גבינה לבנה/קוטג' (5%)`,
                        value1: 0.5,
                        value2: 5,
                        gram: 125,
                        sugar: 0,
                        message: '.דל בפחמימות ומכיל יותר חלבון ו/או שומן (120 קלוריות) *',
                },
                sugar: {
                        sugarCalculation: 0,
                        sugarCalculationGram: 0,
                        sugarString: '',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(חבילה/כף)',
                        measures: ['חצי חבילה', 'כף'],
                },
                check: {
                        count: true,
                        gram: true,
                        sugar: false,
                        message: true,
                        value: true,
                },
        },
        {
                details: {
                        productName: 'חלב (3% שומן)',
                        value1: 1,
                        value2: 0,
                        gram: 200,
                        sugar: 0,
                        message: '',
                },
                sugar: {
                        sugarCalculation: 0,
                        sugarCalculationGram: 0,
                        sugarString: '',
                },
                unit: {
                        gramString: '(מ"ל)',
                        measureString: '(כוס)',
                        measures: ['כוס', ''],
                },
                check: {
                        count: true,
                        gram: true,
                        sugar: false,
                        message: false,
                        value: false,
                },
        },
        {
                details: {
                        productName: 'יוגורט (3%)',
                        value1: 1,
                        value2: 0,
                        gram: 170,
                        sugar: 0,
                        message: '',
                },
                sugar: {
                        sugarCalculation: 0,
                        sugarCalculationGram: 0,
                        sugarString: '',
                },
                unit: {
                        gramString: '(מ"ל)',
                        measureString: '(גביע קטן)',
                        measures: ['גביע קטן', ''],
                },
                check: {
                        count: true,
                        gram: true,
                        sugar: false,
                        message: false,
                        value: false,
                },
        },
        {
                details: {
                        productName: 'יוגורט/קפיר',
                        value1: 1,
                        value2: 1,
                        gram: 170,
                        sugar: 0,
                        message: '',
                },
                sugar: {
                        sugarCalculation: 0,
                        sugarCalculationGram: 0,
                        sugarString: '',
                },
                unit: {
                        gramString: '(מ"ל)',
                        measureString: '(גביע/כוס)',
                        measures: ['גביע', 'כוס'],

                },
                check: {
                        count: true,
                        gram: true,
                        sugar: false,
                        message: false,
                        value: true,
                },
        },
        {
                details: {
                        productName: 'לבן (3% שומן)',
                        value1: 1,
                        value2: 1,
                        gram: 170,
                        sugar: 0,
                        message: '',
                },
                sugar: {
                        sugarCalculation: 0,
                        sugarCalculationGram: 0,
                        sugarString: '',
                },
                unit: {
                        gramString: '(מ"ל)',
                        measureString: '(גביע/כוס)',
                        measures: ['גביע', 'כוס'],
                },
                check: {
                        count: true,
                        gram: true,
                        sugar: false,
                        message: false,
                        value: true,
                },
        },
        {
                details: {
                        productName: 'לבנה (4.5% שומן)',
                        value1: 1,
                        value2: 0.75,
                        gram: 150,
                        sugar: 0,
                        message: '',
                },
                sugar: {
                        sugarCalculation: 0,
                        sugarCalculationGram: 0,
                        sugarString: '',
                },
                unit: {
                        gramString: '(מ"ל)',
                        measureString: '(גביע קטן/כוס)',
                        measures: ['גביע קטן', 'כוס'],
                },
                check: {
                        count: true,
                        gram: true,
                        sugar: false,
                        message: false,
                        value: true,
                },
        },
        {
                details: {
                        productName: 'מעדן שוקולד/וניל',
                        value1: 1,
                        value2: 0,
                        gram: 125,
                        sugar: 1,
                        message: '',
                },
                sugar: {
                        sugarCalculation: 1,
                        sugarCalculationGram: 125,
                        sugarString: ' יש להוסיף מנות סוכר *',
                },
                unit: {
                        gramString: '(מ"ל)',
                        measureString: '(גביע קטן)',
                        measures: ['גביע קטן', ''],
                },
                check: {
                        count: true,
                        gram: true,
                        sugar: true,
                        message: false,
                        value: false,
                },
        },
        {
                details: {
                        productName: 'פריגורט',
                        value1: 1,
                        value2: 0,
                        gram: 150,
                        sugar: 1,
                        message: '',
                },
                sugar: {
                        sugarCalculation: 1,
                        sugarCalculationGram: 150,
                        sugarString: ' יש להוסיף מנות סוכר *',
                },
                unit: {
                        gramString: '(מ"ל)',
                        measureString: '(גביע)',
                        measures: ['גביע', ''],
                },
                check: {
                        count: true,
                        gram: true,
                        sugar: true,
                        message: false,
                        value: false,
                },
        },
];
export default milk;  