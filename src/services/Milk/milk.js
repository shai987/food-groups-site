const milk = [
        {
                details: {
                        productName: 'גבינה מותכת',
                        value: 2,
                        gram: 60,
                        sugar: 0,
                        message: '* דל בפחמימות ומכיל יותר חלבון ו/או שומן (120 קלוריות).',
                },
                sugar: {
                        sugarCalculation: 0,
                        sugarCalculationGram: 0,
                        sugarString: '',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(משולש)',
                },
                check: {
                        count: true,
                        gram: true,
                        sugar: false,
                        message: true,
                },
        },
        {
                details: {
                        productName: 'גבינה צהובה (22%)',
                        value: 2,
                        gram: 40,
                        sugar: 0,
                        message: '* דל בפחמימות ומכיל יותר חלבון ו/או שומן (120 קלוריות).',
                },
                sugar: {
                        sugarCalculation: 0,
                        sugarCalculationGram: 0,
                        sugarString: '',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(פרוסה)',
                },
                check: {
                        count: true,
                        gram: true,
                        sugar: false,
                        message: true,
                },
        },
        {
                details: {
                        productName: 'גבינה מלוחה (16%)',
                        value: 0,
                        gram: 60,
                        sugar: 0,
                        message: '* דל בפחמימות ומכיל יותר חלבון ו/או שומן (120 קלוריות).',
                },
                sugar: {
                        sugarCalculation: 0,
                        sugarCalculationGram: 0,
                        sugarString: '',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '',
                },
                check: {
                        count: false,
                        gram: true,
                        sugar: false,
                        message: true,
                },
        },
        {
                details: {
                        productName: `גבינה לבנה/קוטג' (5%)`,
                        value: {
                                value1: 0.5,
                                value2: 5,
                        },
                        gram: 125,
                        sugar: 0,
                        message: '* דל בפחמימות ומכיל יותר חלבון ו/או שומן (120 קלוריות).',
                },
                sugar: {
                        sugarCalculation: 0,
                        sugarCalculationGram: 0,
                        sugarString: '',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(חבילה/כף)',
                },
                check: {
                        count: true,
                        gram: true,
                        sugar: false,
                        message: true,
                },
        },
        {
                details: {
                        productName: 'חלב (3% שומן)',
                        value: 1,
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
                },
                check: {
                        count: true,
                        gram: true,
                        sugar: false,
                        message: false,
                },
        },
        {
                details: {
                        productName: 'יוגורט (22%)',
                        value: 1,
                        gram: 170,
                        sugar: 0,
                        message: '',
                        message: false,
                },
                sugar: {
                        sugarCalculation: 0,
                        sugarCalculationGram: 0,
                        sugarString: '',
                },
                unit: {
                        gramString: '(מ"ל)',
                        measureString: '(גביע קטן)',
                },
                check: {
                        count: true,
                        gram: true,
                        sugar: false,
                        message: false,
                },
        },
        {
                details: {
                        productName: 'יוגורט/קפיר',
                        value: 1,
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
                        gramString: '(גרם)',
                        measureString: '(גביע/כוס)',
                },
                check: {
                        count: true,
                        gram: true,
                        sugar: false,
                        message: false,
                },
        },
        {
                details: {
                        productName: 'לבן (3% שומן)',
                        value: 1,
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
                        gramString: '(גרם)',
                        measureString: '(גביע/כוס)',
                },
                check: {
                        count: true,
                        gram: true,
                        sugar: false,
                        message: false,
                },
        },
        {
                details: {
                        productName: 'לבנה (4.5% שומן)',
                        value: {
                                value1: 1,
                                value2: 0.75,
                        },
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
                        gramString: '(גרם)',
                        measureString: '(גביע קטן/כוס)',
                },
                check: {
                        count: true,
                        gram: true,
                        sugar: false,
                        message: false,
                },
        },
        {
                details: {
                        productName: 'מעדן שוקולד/וניל',
                        value: 1,
                        gram: 125,
                        sugar: 1,
                        message: '',
                },
                sugar: {
                        sugarCalculation: 1,
                        sugarCalculationGram: 125,
                        sugarString: '* יש להוסיף מנות סוכר',
                },
                unit: {
                        gramString: '(מ"ל)',
                        measureString: '(גביע קטן)',
                },
                check: {
                        count: true,
                        gram: true,
                        sugar: true,
                        message: false,
                },
        },
        {
                details: {
                        productName: 'פריגורט',
                        value: 1,
                        gram: 150,
                        sugar: 1,
                        message: '',
                },
                sugar: {
                        sugarCalculation: 1,
                        sugarCalculationGram: 150,
                        sugarString: '* יש להוסיף מנות סוכר',
                },
                unit: {
                        gramString: '(מ"ל)',
                        measureString: '(גביע)',
                },
                check: {
                        count: true,
                        gram: true,
                        sugar: true,
                        message: false,
                },
        },
];
export default milk;  