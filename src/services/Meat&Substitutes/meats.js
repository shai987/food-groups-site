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
                        bread: false,
                },
        },
        {
                details: {
                        productName: 'בשר בקר',
                        value: 0,
                        gram: 90,
                        bread: 0,
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
                        bread: false,
                },
        },
        {
                details: {
                        productName: 'בשר הודו',
                        value: 0,
                        gram: 90,
                        bread: 0,
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
                        bread: false,
                },
        },
        {
                details: {
                        productName: 'בשר עוף (עם עצם)',
                        value: 0.25,
                        gram: 150,
                        bread: 0,
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
                        bread: false,
                },
        },
        {
                details: {
                        productName: 'בשר עוף',
                        value: 0,
                        gram: 90,
                        bread: 0,
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
                        bread: false,
                },
        },
        {
                details: {
                        productName: 'דג מעושן/משומר בשמן/מלוח',
                        value: 0,
                        gram: 90,
                        bread: 0,
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
                        bread: false,
                },
        },
        {
                details: {
                        productName: 'דגים משומרים במים',
                        value: 0,
                        gram: 100,
                        bread: 0,
                        message: '',
                },
                breadFat: {
                        breadString: '',
                        fatString: '',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(כוס)',
                },
                check: {
                        count: false,
                        gram: true,
                        bread: false,
                },
        },
        {
                details: {
                        productName: '',
                        value: 0.5,
                        gram: 100,
                        bread: 0,
                        message: '',
                },
                breadFat: {
                        breadString: '',
                        fatString: '',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(כוס)',
                },
                check: {
                        count: true,
                        gram: true,
                        bread: false,
                },
        },
        {
                details: {
                        productName: '',
                        value: 0.5,
                        gram: 100,
                        bread: 0,
                        message: '',
                },
                breadFat: {
                        breadString: '',
                        fatString: '',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(כוס)',
                },
                check: {
                        count: true,
                        gram: true,
                        bread: false,
                },
        },
        {
                details: {
                        productName: '',
                        value: 0.5,
                        gram: 100,
                        bread: 0,
                        message: '',
                },
                breadFat: {
                        breadString: '',
                        fatString: '',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(כוס)',
                },
                check: {
                        count: true,
                        gram: true,
                        bread: false,
                },
        },
        {
                details: {
                        productName: '',
                        value: 0.5,
                        gram: 100,
                        bread: 0,
                        message: '',
                },
                breadFat: {
                        breadString: '',
                        fatString: '',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(כוס)',
                },
                check: {
                        count: true,
                        gram: true,
                        bread: false,
                },
        },
        {
                details: {
                        productName: '',
                        value: 0.5,
                        gram: 100,
                        bread: 0,
                        message: '',
                },
                breadFat: {
                        breadString: '',
                        fatString: '',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(כוס)',
                },
                check: {
                        count: true,
                        gram: true,
                        bread: false,
                },
        },
        {
                details: {
                        productName: '',
                        value: 0.5,
                        gram: 100,
                        bread: 0,
                        message: '',
                },
                breadFat: {
                        breadString: '',
                        fatString: '',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(כוס)',
                },
                check: {
                        count: true,
                        gram: true,
                        bread: false,
                },
        },
        {
                details: {
                        productName: '',
                        value: 0.5,
                        gram: 100,
                        bread: 0,
                        message: '',
                },
                breadFat: {
                        breadString: '',
                        fatString: '',
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(כוס)',
                },
                check: {
                        count: true,
                        gram: true,
                        bread: false,
                },
        },
];
export default meats;  