const fruits = [
        {
                details: {
                        productName: 'אבטיח',
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
                        value: true,
                },
        },
        {
                details: {
                        productName: 'אבטיח (עם קליפה)',
                        value1: 1,
                        value2: 0,
                        gram: 400,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(פלח עם קליפה)',
                        measures: ['פלח עם קליפה', ''],
                },
                check: {
                        value: false,
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
                        measureString: '(פרי)',
                        measures: ['פרי', ''],
                },
                check: {
                        value: false,
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
                        measureString: '(פרי)',
                        measures: ['פרי', ''],
                },
                check: {
                        value: false,
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
                        measureString: '(אננס/כוס)',
                        measures: ['אננס', 'כוס'],
                },
                check: {
                        value: true,
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
                        value: true,
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
                        measures: ['קטן', '']
                },
                check: {
                        value: false,
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
                        measures: ['בינוני', '']
                },
                check: {
                        value: false,
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
                        measures: ['בינוני', '']
                },
                check: {
                        value: false,
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
                        measures: ['בינוני', '']
                },
                check: {
                        value: false,
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
                        measures: ['כף', '']
                },
                check: {
                        value: false,
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
                        measures: ['גדול', '']
                },
                check: {
                        value: false,
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
                        measures: ['קטן', 'כוס גרעינים']
                },
                check: {
                        value: true,
                },
        },
        {
                details: {
                        productName: '(קטן) שזיף',
                        value1: 2,
                        value2: 0,
                        gram: 110,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(קטן)',
                        measures: ['קטן', '']
                },
                check: {
                        value: false,
                },
        },
        {
                details: {
                        productName: '(גדול) שזיף',
                        value1: 1,
                        value2: 0,
                        gram: 110,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(גדול)',
                        measures: ['גדול', '']
                },
                check: {
                        value: false,
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
                        measures: ['בינוני', '']
                },
                check: {
                        value: false,
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
                        measures: ['בינוני', '']
                },
                check: {
                        value: false,
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
                        measureString: '(קטן)',
                        measures: ['קטן', '']
                },
                check: {
                        value: false,
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
                        measureString: '(גדול)',
                        measures: ['גדול', '']
                },
                check: {
                        value: false,
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
                        measures: ['בינוני', '']
                },
                check: {
                        value: false,
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
                        measures: ['כוס', '']
                },
                check: {
                        value: false,
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
                        measures: ['בינוני', '']
                },
                check: {
                        value: false,
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
                        measures: ['בינוני', '']
                },
                check: {
                        value: false,
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
                        measures: ['קטן', '']
                },
                check: {
                        value: false,
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
                        measures: ['בינוני', '']
                },
                check: {
                        value: false,
                },
        },
        {
                details: {
                        productName: 'תפוח עץ - רסק',
                        value1: 0.66667,
                        value2: 0,
                        gram: 150,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(כוס)',
                        measures: ['כוס', '']
                },
                check: {
                        value: false,
                },
        },

];
export default fruits;  