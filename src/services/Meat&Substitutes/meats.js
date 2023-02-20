const meats = [
        {
                details: {
                        productName: 'איברים פנימיים',
                        value: 0.5,
                        gram: 100,
                        breadFat: 0,
                        message: '',
                },
                breadFat: {
                        breadString: '',
                        fatString: '',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(טחול, כבד, לבבות, קורקבנים)',
                },
                check: {
                        count: true,
                        gram: true,
                        breadFat: false,
                },
        },
        {
                details: {
                        productName: 'בשר בקר',
                        value: 0,
                        gram: 90,
                        breadFat: 0,
                        message: '',
                },
                breadFat: {
                        breadString: '',
                        fatString: '',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '',
                },
                check: {
                        count: false,
                        gram: true,
                        breadFat: false,
                },
        },
        {
                details: {
                        productName: 'בשר הודו',
                        value: 0,
                        gram: 90,
                        breadFat: 0,
                        message: '* מנות עוף/הודו ללא עור להוריד מנת שומן.',
                },
                breadFat: {
                        breadString: '',
                        fatString: '',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '',
                },
                check: {
                        count: false,
                        gram: true,
                        breadFat: false,
                },
        },
        {
                details: {
                        productName: 'בשר עוף (עם עצם)',
                        value: 0.25,
                        gram: 150,
                        breadFat: 0,
                        message: '* מנות עוף/הודו ללא עור להוריד מנת שומן.',
                },
                breadFat: {
                        breadString: '',
                        fatString: '',
                },
                unit: {
                        gramString: '(גרם, שקול עם עצם)',
                        measureString: '(עוף קטן מספר 1)',
                },
                check: {
                        count: true,
                        gram: true,
                        breadFat: false,
                },
        },
        {
                details: {
                        productName: 'בשר עוף',
                        value: 0,
                        gram: 90,
                        breadFat: 0,
                        message: '',
                },
                breadFat: {
                        breadString: '',
                        fatString: '',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '',
                },
                check: {
                        count: false,
                        gram: true,
                        breadFat: false,
                },
        },
        {
                details: {
                        productName: 'דג מעושן/משומר בשמן/מלוח',
                        value: 0,
                        gram: 90,
                        breadFat: 0,
                        message: '',
                },
                breadFat: {
                        breadString: '',
                        fatString: '',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '',
                },
                check: {
                        count: false,
                        gram: true,
                        breadFat: false,
                },
        },
        {
                details: {
                        productName: 'דגים משומרים במים',
                        value: 0,
                        gram: 100,
                        breadFat: 10,
                        message: '',
                },
                breadFat: {
                        breadString: '',
                        fatString: '',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '',
                },
                check: {
                        count: false,
                        gram: true,
                        breadFat: true,
                },
        },
        {
                details: {
                        productName: 'דגים רזים',
                        value: 0,
                        gram: 100,
                        breadFat: 10,
                        message: `מכיל עד 5 גר' שומן ב-100 גרם (מבושל).`,
                },
                breadFat: {
                        breadString: '',
                        fatString: '* להוריד גרם שומן',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '',
                },
                check: {
                        count: false,
                        gram: true,
                        breadFat: true,
                },
        },
        {
                details: {
                        productName: 'דגים רזים (עם עצמות)',
                        value: 0,
                        gram: 150,
                        breadFat: 10,
                        message: `מכיל עד 5 גר' שומן ב-100 גרם (מבושל).`,
                },
                breadFat: {
                        breadString: '',
                        fatString: '* להוריד גרם שומן',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '',
                },
                check: {
                        count: false,
                        gram: true,
                        breadFat: true,
                },
        },
        {
                details: {
                        productName: 'דגים שמנים',
                        value: 0,
                        gram: 100,
                        breadFat: 0,
                        message: '',
                },
                breadFat: {
                        breadString: '',
                        fatString: '',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '',
                },
                check: {
                        count: false,
                        gram: true,
                        breadFat: false,
                },
        },
        {
                details: {
                        productName: 'דגים שמנים (עם עצמות)',
                        value: 0,
                        gram: 150,
                        breadFat: 0,
                        message: '',
                },
                breadFat: {
                        breadString: '',
                        fatString: '',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '',
                },
                check: {
                        count: false,
                        gram: true,
                        breadFat: false,
                },
        },
        {
                details: {
                        productName: 'כבש',
                        value: 0,
                        gram: 100,
                        breadFat: 0,
                        message: '',
                },
                breadFat: {
                        breadString: '',
                        fatString: '',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '',
                },
                check: {
                        count: false,
                        gram: true,
                        breadFat: false,
                },
        },
        {
                details: {
                        productName: 'נקניק',
                        value: 0,
                        gram: 90,
                        breadFat: 0,
                        message: '',
                },
                breadFat: {
                        breadString: '',
                        fatString: '',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '',
                },
                check: {
                        count: false,
                        gram: true,
                        breadFat: false,
                },
        },
        {
                details: {
                        productName: 'נקנקיות',
                        value: 3,
                        gram: 120,
                        breadFat: 0,
                        message: '',
                },
                breadFat: {
                        breadString: '',
                        fatString: '',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: 'יחידה',
                },
                check: {
                        count: true,
                        gram: true,
                        breadFat: false,
                },
        },
        {
                details: {
                        productName: 'פסטרמה',
                        value: 6,
                        gram: 100,
                        breadFat: 10,
                        message: '',
                },
                breadFat: {
                        breadString: '',
                        fatString: '* להוריד גרם שומן',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: 'פרוסה',
                },
                check: {
                        count: true,
                        gram: true,
                        breadFat: true,
                },
        },
        {
                details: {
                        productName: 'שניצל (עוף/הודו)',
                        value: 0,
                        gram: 100,
                        breadFat: 0.5,
                        message: '',
                },
                breadFat: {
                        breadString: '* להוסיף מנת לחם',
                        fatString: '',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '',
                },
                check: {
                        count: false,
                        gram: true,
                        breadFat: true,
                },
        },
];
export default meats;  