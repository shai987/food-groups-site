const fruits = [
        {
                details: {
                        productName: 'אבטיח',
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
                        productName: 'אבטיח (עם קליפה)',
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
                        value: 1,
                        gram: 200,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(פרי)',
                },
        },
        {
                details: {
                        productName: 'אגס קטן',
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
                        value: 0.33333,
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
                        productName: 'מנדרינה/קלמטינה (עם קליפה)',
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
                        productName: 'משמש',
                        value: 3,
                        gram: 150,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(בינוני)',
                },
        },
        {
                details: {
                        productName: 'משמש מיובש',
                        value: 4,
                        gram: 20,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(חצאים)',
                },
        },
        {
                details: {
                        productName: 'סלט פירות',
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
                        productName: 'ענבים',
                        value: 12,
                        gram: 100,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(בינוני)',
                },
        },
        {
                details: {
                        productName: 'פאפיה',
                        value: 0.33333,
                        gram: 120,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(בינוני/כוס קוביות)',
                },
        },
        {
                details: {
                        productName: 'פאפיה (עם קליפה)',
                        value: 0.33333,
                        gram: 150,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(בינוני/כוס קוביות)',
                },
        },
        {
                details: {
                        productName: 'פומלה',
                        value: 0.33333,
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
                        value: 0.5,
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
                        value: 2,
                        gram: 160,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(בינוני)',
                },
        },
        {
                details: {
                        productName: 'צבר',
                        value: 2,
                        gram: 150,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(בינוני)',
                },
        },
        {
                details: {
                        productName: 'צבר (עם קליפה)',
                        value: 2,
                        gram: 300,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(בינוני)',
                },
        },
        {
                details: {
                        productName: 'צימוקים',
                        value: 2,
                        gram: 20,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(כף)',
                },
        },
        {
                details: {
                        productName: 'קיווי',
                        value: 1,
                        gram: 100,
                },
                unit: {
                        gramString: '(גרם, ראוי לאכילה)',
                        measureString: '(גדול)',
                },
        },
        {
                details: {
                        productName: 'רימון',
                        value: 0.5,
                        gram: 90,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(קטן/כוס גרעינים)',
                },
        },
        {
                details: {
                        productName: '(קטן) שזיף',
                        value: 2,
                        gram: 110,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(קטן)',
                },
        },
        {
                details: {
                        productName: '(גדול) שזיף',
                        value: 1,
                        gram: 110,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(גדול)',
                },
        },
        {
                details: {
                        productName: 'שזיף מיובש',
                        value: 3,
                        gram: 25,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(בינוני)',
                },
        },
        {
                details: {
                        productName: 'שסק',
                        value: 4,
                        gram: 120,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(בינוני)',
                },
        },
        {
                details: {
                        productName: 'תאנים (קטנים)',
                        value: 2,
                        gram: 80,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(קטן)',
                },
        },
        {
                details: {
                        productName: 'תאנים (גדולים)',
                        value: 1,
                        gram: 80,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(גדול)',
                },
        },
        {
                details: {
                        productName: 'תאנה מיובשת',
                        value: 1,
                        gram: 20,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(בינוני)',
                },
        },
        {
                details: {
                        productName: 'תות שדה',
                        value: 1.5,
                        gram: 200,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(כוס)',
                },
        },
        {
                details: {
                        productName: 'תמר לח',
                        value: 4,
                        gram: 55,
                },
                unit: {
                        gramString: '(גרם, עם גלעינים)',
                        measureString: '(בינוני)',
                },
        },
        {
                details: {
                        productName: 'תמר מיובש',
                        value: 2,
                        gram: 25,
                },
                unit: {
                        gramString: '(גרם, עם גלעינים)',
                        measureString: '(בינוני)',
                },
        },
        {
                details: {
                        productName: 'תפוז',
                        value: 1,
                        gram: 150,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(קטן)',
                },
        },
        {
                details: {
                        productName: 'תפוח',
                        value: 1,
                        gram: 100,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(בינוני)',
                },
        },
        {
                details: {
                        productName: 'תפוח עץ - רסק',
                        value: 0.66667,
                        gram: 150,
                },
                unit: {
                        gramString: '(גרם)',
                        measureString: '(כוס)',
                },
        },

];
export default fruits;  