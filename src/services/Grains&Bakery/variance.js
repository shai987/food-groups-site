const variance = [
        {
                details: {
                        productName: 'קורנפלקס',
                        value: 0.5,
                        gram: 20,
                        fat: 0,
                        sugar: 0,
                },
                fat: {
                        fatString: '',
                },
                sugar: {
                        sugarCalculation: 0,
                        sugarCalculationGram: 0,
                        sugarString: '',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(כוס)',
                },
                check: {
                        count: true,
                        gram: true,
                        fat: false,
                        sugar: false,
                },
        },
        {
                details: {
                        productName: 'ברנפלקס',
                        value: 0.5,
                        gram: 25,
                        fat: 0,
                        sugar: 0,
                },
                fat: {
                        fatString: '',
                },
                sugar: {
                        sugarCalculation: 0,
                        sugarCalculationGram: 0,
                        sugarString: '',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(כוס)',
                },
                check: {
                        count: true,
                        gram: true,
                        fat: false,
                        sugar: false,
                },
        },
        {
                details: {
                        productName: 'גרנולה',
                        value: 3,
                        gram: 30,
                        fat: 1,
                        sugar: 0,
                },
                fat: {
                        fatString: ' יש להוסיף מנות שומן *',
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
                        fat: true,
                        sugar: false,
                },
        },
        {
                details: {
                        productName: 'פצפוצי אורז',
                        value: 0.5,
                        gram: 30,
                        fat: 0,
                        sugar: 0,
                },
                fat: {
                        fatString: '',
                },
                sugar: {
                        sugarCalculation: 0,
                        sugarCalculationGram: 0,
                        sugarString: '',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(כוס)',
                },
                check: {
                        count: true,
                        gram: true,
                        fat: false,
                        sugar: false,
                },
        },
        {
                details: {
                        productName: 'בייגלה - מקלות',
                        value: 20,
                        gram: 20,
                        fat: 0,
                        sugar: 0,
                },
                fat: {
                        fatString: '',
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
                        gram: true,
                        fat: false,
                        sugar: false,
                },
        },
        {
                details: {
                        productName: 'פופקורן מוכן ללא שמן',
                        value: 3,
                        gram: 20,
                        fat: 0,
                        sugar: 0,
                },
                fat: {
                        fatString: '',
                },
                sugar: {
                        sugarCalculation: 0,
                        sugarCalculationGram: 0,
                        sugarString: '',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(כוס)',
                },
                check: {
                        count: true,
                        gram: true,
                        fat: false,
                        sugar: false,
                },
        },
        {
                details: {
                        productName: 'פופקורן מותפח בשמן',
                        value: 3,
                        gram: 0,
                        fat: 1,
                        sugar: 0,
                },
                fat: {
                        fatString: ' יש להוסיף מנות שומן *',
                },
                sugar: {
                        sugarCalculation: 0,
                        sugarCalculationGram: 0,
                        sugarString: '',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(כוס)',
                },
                check: {
                        count: true,
                        gram: true,
                        fat: true,
                        sugar: false,
                },
        },
        {
                details: {
                        productName: 'ופלים/עוגיות',
                        value: 2,
                        gram: 20,
                        fat: 1,
                        sugar: 1,
                },
                fat: {
                        fatString: ' יש להוסיף מנות שומן *',
                },
                sugar: {
                        sugarCalculation: 2,
                        sugarCalculationGram: 20,
                        sugarString: ' יש להוסיף מנות סוכר *',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(קטן)',
                },
                check: {
                        count: true,
                        gram: true,
                        fat: true,
                        sugar: true,
                },
        },
        {
                details: {
                        productName: 'עוגה יבשה',
                        value: 1,
                        gram: 50,
                        fat: 1,
                        sugar: 2,
                },
                fat: {
                        fatString: ' יש להוסיף מנות שומן *',
                },
                sugar: {
                        sugarCalculation: 0.5,
                        sugarCalculationGram: 25,
                        sugarString: ' יש להוסיף מנות סוכר *',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(פרוסה קטנה)',
                },
                check: {
                        count: true,
                        gram: true,
                        fat: true,
                        sugar: true,
                },
        },
        {
                details: {
                        productName: 'קרקרים קטנים',
                        value: 4,
                        gram: 0,
                        fat: 1,
                        sugar: 0,
                },
                fat: {
                        fatString: ' יש להוסיף מנות שומן *',
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
                        fat: true,
                        sugar: false,
                },
        },
        {
                details: {
                        productName: 'קרקרים גדולים',
                        value: 2,
                        gram: 0,
                        fat: 1,
                        sugar: 0,
                },
                fat: {
                        fatString: ' יש להוסיף מנות שומן *',
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
                        fat: true,
                        sugar: false,
                },
        },
        {
                details: {
                        productName: 'שקדי מרק',
                        value: 3,
                        gram: 25,
                        fat: 1,
                        sugar: 0,
                },
                fat: {
                        fatString: ' יש להוסיף מנות שומן *',
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
                        fat: true,
                        sugar: false,
                },
        },

];
export default variance;  