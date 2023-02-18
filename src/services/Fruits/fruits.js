const fruits = [
        {
                details: {
                        productName: 'אבטיח',
                        calculationValue: 1,
                        value: 1,
                        gram: 200,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(פלח בינוני/כוס קוביות)',
                },
        },
        {
                details: {
                        productName: 'אבטיח עם קליפה',
                        calculationValue: 1,
                        value: 1,
                        gram: 400,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(פלח עם קליפה)',
                },
        },
        {
                details: {
                        productName: 'אגס גדול',
                        calculationValue: 1,
                        value: 1,
                        gram: 120,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(פרי)',
                },
        },
        {
                details: {
                        productName: 'אגס קטן',
                        calculationValue: 2,
                        value: 2,
                        gram: 120,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(פרי)',
                },
        },
        {
                details: {
                        productName: 'אנונה',
                        calculationValue: 1,
                        value: 1,
                        gram: 60,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(קטן)',
                },
        },
        {
                details: {
                        productName: 'אננס טרי',
                        calculationValue: 4,
                        value: 0.25,
                        gram: 120,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(פרי/כוס)',
                },
        },
        {
                details: {
                        productName: 'אננס משומר',
                        calculationValue: 2,
                        value: 0.5,
                        gram: 120,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(כוס)',
                },
        },
        {
                details: {
                        productName: 'אפרסימון',
                        calculationValue: 2,
                        value: 0.5,
                        gram: 100,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(פרי)',
                },
        },
        {
                details: {
                        productName: 'אפרסק',
                        calculationValue: 1,
                        value: 1,
                        gram: 140,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(בינוני)',
                },
        },
        {
                details: {
                        productName: 'אשכולית',
                        calculationValue: 2,
                        value: 0.5,
                        gram: 160,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(בינוני)',
                },
        },
        {
                details: {
                        productName: 'בננה',
                        calculationValue: 2,
                        value: 0.5,
                        gram: 100,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(בינוני)',
                },
        },
        {
                details: {
                        productName: 'גויאבה',
                        calculationValue: 1,
                        value: 1,
                        gram: 120,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(גדול)',
                },
        },
        {
                details: {
                        productName: 'דובדבנים',
                        calculationValue: 10,
                        value: 10,
                        gram: 100,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(גדול עם גלעינים)',
                },
        },
        {
                details: {
                        productName: 'חבוש',
                        calculationValue: 2,
                        value: 0.5,
                        gram: 90,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(בינוני)',
                },
        },
        {
                details: {
                        productName: 'כוכבנית/קרמבולה',
                        calculationValue: 1,
                        value: 1,
                        gram: 200,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(בינוני)',
                },
        },
        {
                details: {
                        productName: `ליצ'י`,
                        calculationValue: 8,
                        value: 8,
                        gram: 150,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(בינוני)',
                },
        },
        {
                details: {
                        productName: 'מיץ פרי טבעי',
                        calculationValue: 2,
                        value: 0.5,
                        gram: 120,
                },
                unit: {
                        gramString: '(מ"ל)',
                        measureString: '(כוס)',
                },
        },
        {
                details: {
                        productName: 'מלון',
                        calculationValue: 1,
                        value: 1,
                        gram: 200,
                },
                unit: {
                        gramString: '(גרם, ראוי לאכילה)',
                        measureString: '(פלח/כוס קוביות)',
                },
        },
        {
                details: {
                        productName: 'מנגו',
                        calculationValue: 3,
                        value: 0.75,
                        gram: 100,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(קטן)',
                },
        },
        {
                details: {
                        productName: 'מנדרינה/קלמטינה',
                        calculationValue: 1,
                        value: 1,
                        gram: 150,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(בינוני)',
                },
        },
        {
                details: {
                        productName: 'משמש',
                        calculationValue: 1,
                        value: 1,
                        gram: 200,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(קטן)',
                },
        },
        {
                details: {
                        productName: 'משמש מיובש',
                        calculationValue: 1,
                        value: 1,
                        gram: 200,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(קטן)',
                },
        },
        {
                details: {
                        productName: 'סלט פירות',
                        calculationValue: 1,
                        value: 1,
                        gram: 200,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(קטן)',
                },
        },
        {
                details: {
                        productName: 'ענבים',
                        calculationValue: 1,
                        value: 1,
                        gram: 200,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(קטן)',
                },
        },
        {
                details: {
                        productName: 'פאפיה',
                        calculationValue: 1,
                        value: 1,
                        gram: 200,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(קטן)',
                },
        },
        {
                details: {
                        productName: 'פומלה',
                        calculationValue: 1,
                        value: 1,
                        gram: 200,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(קטן)',
                },
        },
        {
                details: {
                        productName: 'פומלית (SWEETY)',
                        calculationValue: 1,
                        value: 1,
                        gram: 200,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(קטן)',
                },
        },
        {
                details: {
                        productName: `פיג’ויאה`,
                        calculationValue: 1,
                        value: 1,
                        gram: 200,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(קטן)',
                },
        },
        {
                details: {
                        productName: 'צבר',
                        calculationValue: 1,
                        value: 1,
                        gram: 200,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(קטן)',
                },
        },
        {
                details: {
                        productName: 'צימוקים',
                        calculationValue: 1,
                        value: 1,
                        gram: 200,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(קטן)',
                },
        },
        {
                details: {
                        productName: 'קיווי',
                        calculationValue: 1,
                        value: 1,
                        gram: 200,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(קטן)',
                },
        },
        {
                details: {
                        productName: 'רימון',
                        calculationValue: 1,
                        value: 1,
                        gram: 200,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(קטן)',
                },
        },
        {
                details: {
                        productName: 'שזיף',
                        calculationValue: 1,
                        value: 1,
                        gram: 200,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(קטן)',
                },
        },
        {
                details: {
                        productName: 'שזיף מיובש',
                        calculationValue: 1,
                        value: 1,
                        gram: 200,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(קטן)',
                },
        },
        {
                details: {
                        productName: 'שסק',
                        calculationValue: 1,
                        value: 1,
                        gram: 200,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(קטן)',
                },
        },
        {
                details: {
                        productName: 'תאנים',
                        calculationValue: 1,
                        value: 1,
                        gram: 200,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(קטן)',
                },
        },
        {
                details: {
                        productName: 'תאנה מיובשת',
                        calculationValue: 1,
                        value: 1,
                        gram: 200,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(קטן)',
                },
        },
        {
                details: {
                        productName: 'תות שדה',
                        calculationValue: 1,
                        value: 1,
                        gram: 200,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(קטן)',
                },
        },
        {
                details: {
                        productName: 'תמר לח',
                        calculationValue: 1,
                        value: 1,
                        gram: 200,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(קטן)',
                },
        },
        {
                details: {
                        productName: 'תמר מיובש',
                        calculationValue: 1,
                        value: 1,
                        gram: 200,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(קטן)',
                },
        },
        {
                details: {
                        productName: 'תפוז',
                        calculationValue: 1,
                        value: 1,
                        gram: 200,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(קטן)',
                },
        },
        {
                details: {
                        productName: 'תפוח',
                        calculationValue: 1,
                        value: 1,
                        gram: 200,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(קטן)',
                },
        },
        {
                details: {
                        productName: 'תפוח עץ- רסק',
                        calculationValue: 1,
                        value: 1,
                        gram: 200,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(קטן)',
                },
        },

];
export default fruits;  