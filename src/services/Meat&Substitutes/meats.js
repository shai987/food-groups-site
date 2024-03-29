const meats = [
        {
                details: {
                        productName: 'איברים פנימיים',
                        value: 0,
                        gram: 100,
                        bread: 0,
                        fat: 0,
                        portionFat: 0,
                        message: '',
                },
                breadFat: {
                        breadString: '',
                        fatString: '',
                        portionFatString: '',
                        fatCalculationCount: 0,
                        portionFatCalculationGram: 0,
                        portionFatCalculationCount: 0,
                        breadCalculationGram: 0,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(טחול, כבד, לבבות, קורקבנים)',
                },
                check: {
                        count: false,
                        gram: true,
                        bread: false,
                        fat: false,
                        portionFat: false,
                        message: false,
                },
        },
        {
                details: {
                        productName: 'בשר בקר',
                        value: 0,
                        gram: 90,
                        bread: 0,
                        fat: 0,
                        portionFat: 0,
                        message: '',
                },
                breadFat: {
                        breadString: '',
                        fatString: '',
                        portionFatString: '',
                        fatCalculationCount: 0,
                        portionFatCalculationGram: 0,
                        portionFatCalculationCount: 0,
                        breadCalculationGram: 0,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '',
                },
                check: {
                        count: false,
                        gram: true,
                        bread: false,
                        fat: false,
                        portionFat: false,
                        message: false,
                },
        },
        {
                details: {
                        productName: 'בשר הודו ללא עור',
                        value: 0,
                        gram: 90,
                        bread: 0,
                        fat: 0,
                        portionFat: 1,
                        message: '',
                },
                breadFat: {
                        breadString: '',
                        fatString: '',
                        portionFatString: ' יש להוריד מנת שומן *',
                        fatCalculationCount: 0,
                        portionFatCalculationGram: 90,
                        portionFatCalculationCount: 0,
                        breadCalculationGram: 0,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '',
                },
                check: {
                        count: false,
                        gram: true,
                        bread: false,
                        fat: false,
                        portionFat: true,
                        message: false,
                },
        },
        {
                details: {
                        productName: 'בשר הודו עם עור',
                        value: 0,
                        gram: 90,
                        bread: 0,
                        fat: 0,
                        portionFat: 0,
                        message: '',
                },
                breadFat: {
                        breadString: '',
                        fatString: '',
                        portionFatString: '',
                        fatCalculationCount: 0,
                        portionFatCalculationGram: 0,
                        portionFatCalculationCount: 0,
                        breadCalculationGram: 0,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '',
                },
                check: {
                        count: false,
                        gram: true,
                        bread: false,
                        fat: false,
                        portionFat: false,
                        message: false,
                },
        },
        {
                details: {
                        productName: 'בשר עוף ללא עור (עם עצם)',
                        value: 0.25,
                        gram: 150,
                        bread: 0,
                        fat: 0,
                        portionFat: 1,
                        message: '',
                },
                breadFat: {
                        breadString: '',
                        fatString: '',
                        portionFatString: ' יש להוריד מנת שומן *',
                        fatCalculationCount: 0,
                        portionFatCalculationGram: 150,
                        portionFatCalculationCount: 0.25,
                        breadCalculationGram: 0,
                },
                unit: {
                        gramString: '(גרם, שקול עם עצם)',
                        measureString: '(עוף קטן מספר 1)',
                },
                check: {
                        count: true,
                        gram: true,
                        bread: false,
                        fat: false,
                        portionFat: true,
                        message: false,
                },
        },
        {
                details: {
                        productName: 'בשר עוף עם עור (עם עצם)',
                        value: 0.25,
                        gram: 150,
                        bread: 0,
                        fat: 0,
                        portionFat: 0,
                        message: '',
                },
                breadFat: {
                        breadString: '',
                        fatString: '',
                        portionFatString: '',
                        fatCalculationCount: 0,
                        portionFatCalculationGram: 0,
                        portionFatCalculationCount: 0,
                        breadCalculationGram: 0,
                },
                unit: {
                        gramString: '(גרם, שקול עם עצם)',
                        measureString: '(עוף קטן מספר 1)',
                },
                check: {
                        count: true,
                        gram: true,
                        bread: false,
                        fat: false,
                        portionFat: false,
                        message: false,
                },
        },
        {
                details: {
                        productName: 'בשר עוף',
                        value: 0,
                        gram: 90,
                        bread: 0,
                        fat: 0,
                        portionFat: 0,
                        message: '',
                },
                breadFat: {
                        breadString: '',
                        fatString: '',
                        portionFatString: '',
                        fatCalculationCount: 0,
                        portionFatCalculationGram: 0,
                        portionFatCalculationCount: 0,
                        breadCalculationGram: 0,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '',
                },
                check: {
                        count: false,
                        gram: true,
                        bread: false,
                        fat: false,
                        portionFat: false,
                        message: false,
                },
        },
        {
                details: {
                        productName: 'דג מעושן/משומר בשמן/מלוח',
                        value: 0,
                        gram: 90,
                        bread: 0,
                        fat: 0,
                        portionFat: 0,
                        message: '',
                },
                breadFat: {
                        breadString: '',
                        fatString: '',
                        portionFatString: '',
                        fatCalculationCount: 0,
                        portionFatCalculationGram: 0,
                        portionFatCalculationCount: 0,
                        breadCalculationGram: 0,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '',
                },
                check: {
                        count: false,
                        gram: true,
                        bread: false,
                        fat: false,
                        portionFat: false,
                        message: false,
                },
        },
        {
                details: {
                        productName: 'דגים משומרים במים',
                        value: 0,
                        gram: 100,
                        bread: 0,
                        fat: 10,
                        portionFat: 0,
                        message: '',
                },
                breadFat: {
                        breadString: '',
                        fatString: ' יש להוריד גרם שומן *',
                        portionFatString: '',
                        fatCalculationCount: 0,
                        portionFatCalculationGram: 0,
                        portionFatCalculationCount: 0,
                        breadCalculationGram: 0,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '',
                },
                check: {
                        count: false,
                        gram: true,
                        bread: false,
                        fat: true,
                        portionFat: false,
                        message: false,
                },
        },
        {
                details: {
                        productName: 'דגים רזים',
                        value: 0,
                        gram: 100,
                        bread: 0,
                        fat: 10,
                        portionFat: 0,
                        message: `.(מכיל עד 5 גר' שומן ב-100 גרם (מבושל *`,
                },
                breadFat: {
                        breadString: '',
                        fatString: ' יש להוריד גרם שומן *',
                        portionFatString: '',
                        fatCalculationCount: 0,
                        portionFatCalculationGram: 0,
                        portionFatCalculationCount: 0,
                        breadCalculationGram: 0,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '',
                },
                check: {
                        count: false,
                        gram: true,
                        bread: false,
                        fat: true,
                        portionFat: false,
                        message: true,
                },
        },
        {
                details: {
                        productName: 'דגים רזים (עם עצמות)',
                        value: 0,
                        gram: 150,
                        bread: 0,
                        fat: 10,
                        portionFat: 0,
                        message: `.(מכיל עד 5 גר' שומן ב-100 גרם (מבושל *`,
                },
                breadFat: {
                        breadString: '',
                        fatString: ' יש להוריד גרם שומן *',
                        portionFatString: '',
                        fatCalculationCount: 0,
                        portionFatCalculationGram: 0,
                        portionFatCalculationCount: 0,
                        breadCalculationGram: 0,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '',
                },
                check: {
                        count: false,
                        gram: true,
                        bread: false,
                        fat: true,
                        portionFat: false,
                        message: true,
                },
        },
        {
                details: {
                        productName: 'דגים שמנים',
                        value: 0,
                        gram: 100,
                        bread: 0,
                        fat: 0,
                        portionFat: 0,
                        message: '',
                },
                breadFat: {
                        breadString: '',
                        fatString: '',
                        portionFatString: '',
                        fatCalculationCount: 0,
                        portionFatCalculationGram: 0,
                        portionFatCalculationCount: 0,
                        breadCalculationGram: 0,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '',
                },
                check: {
                        count: false,
                        gram: true,
                        bread: false,
                        fat: false,
                        portionFat: false,
                        message: false,
                },
        },
        {
                details: {
                        productName: 'דגים שמנים (עם עצמות)',
                        value: 0,
                        gram: 150,
                        bread: 0,
                        fat: 0,
                        portionFat: 0,
                        message: '',
                },
                breadFat: {
                        breadString: '',
                        fatString: '',
                        portionFatString: '',
                        fatCalculationCount: 0,
                        portionFatCalculationGram: 0,
                        portionFatCalculationCount: 0,
                        breadCalculationGram: 0,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '',
                },
                check: {
                        count: false,
                        gram: true,
                        bread: false,
                        fat: false,
                        portionFat: false,
                        message: false,
                },
        },
        {
                details: {
                        productName: 'כבש',
                        value: 0,
                        gram: 100,
                        bread: 0,
                        fat: 0,
                        portionFat: 0,
                        message: '',
                },
                breadFat: {
                        breadString: '',
                        fatString: '',
                        portionFatString: '',
                        fatCalculationCount: 0,
                        portionFatCalculationGram: 0,
                        portionFatCalculationCount: 0,
                        breadCalculationGram: 0,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '',
                },
                check: {
                        count: false,
                        gram: true,
                        bread: false,
                        fat: false,
                        portionFat: false,
                        message: false,
                },
        },
        {
                details: {
                        productName: 'נקניק',
                        value: 0,
                        gram: 90,
                        bread: 0,
                        fat: 0,
                        portionFat: 0,
                        message: '',
                },
                breadFat: {
                        breadString: '',
                        fatString: '',
                        portionFatString: '',
                        fatCalculationCount: 0,
                        portionFatCalculationGram: 0,
                        portionFatCalculationCount: 0,
                        breadCalculationGram: 0,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '',
                },
                check: {
                        count: false,
                        gram: true,
                        bread: false,
                        fat: false,
                        portionFat: false,
                        message: false,
                },
        },
        {
                details: {
                        productName: 'נקנקיות',
                        value: 3,
                        gram: 120,
                        bread: 0,
                        fat: 0,
                        portionFat: 0,
                        message: '',
                },
                breadFat: {
                        breadString: '',
                        fatString: '',
                        portionFatString: '',
                        fatCalculationCount: 0,
                        portionFatCalculationGram: 0,
                        portionFatCalculationCount: 0,
                        breadCalculationGram: 0,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(יחידה)',
                },
                check: {
                        count: true,
                        gram: true,
                        bread: false,
                        fat: false,
                        portionFat: false,
                        message: false,
                },
        },
        {
                details: {
                        productName: 'פסטרמה',
                        value: 6,
                        gram: 100,
                        bread: 0,
                        fat: 10,
                        portionFat: 0,
                        message: '',
                },
                breadFat: {
                        breadString: '',
                        fatString: ' יש להוריד גרם שומן *',
                        portionFatString: '',
                        fatCalculationCount: 0.6,
                        portionFatCalculationGram: 0,
                        portionFatCalculationCount: 0,
                        breadCalculationGram: 0,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(פרוסה)',
                },
                check: {
                        count: true,
                        gram: true,
                        bread: false,
                        fat: true,
                        portionFat: false,
                        message: false,
                },
        },
        {
                details: {
                        productName: 'שניצל (עוף/הודו)',
                        value: 0,
                        gram: 100,
                        bread: 0.5,
                        fat: 0,
                        portionFat: 0,
                        message: '',
                },
                breadFat: {
                        breadString: ' יש להוסיף מנת לחם *',
                        fatString: '',
                        portionFatString: '',
                        fatCalculationCount: 0,
                        portionFatCalculationGram: 0,
                        portionFatCalculationCount: 0,
                        breadCalculationGram: 200,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '',
                },
                check: {
                        count: false,
                        gram: true,
                        bread: true,
                        fat: false,
                        portionFat: false,
                        message: false,
                },
        },
];
export default meats;  