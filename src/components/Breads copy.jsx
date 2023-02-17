import { useState } from 'react';

const Breads = () => {

        const breads = [
                { key: 'לחם לבן/שחור/חלה/חי', value: 1 },
                { key: 'לחם דל קלוריות', value: 2 },
                { key: 'לחמנייה קטנה', value: 0.5 },
                { key: 'לחמנייה גדולה', value: 0.25 },
                { key: 'מצה רגילה', value: 0.5 },
                { key: 'מצה קלה', value: 1 },
                { key: 'פת מצה', value: 2 },
                { key: 'פיתה רגילה', value: 0.75 },
                { key: 'פיתה גדולה', value: 0.25 },
                { key: 'פיתה ביס', value: 1 },
                { key: 'פריכיות אורז', value: 3 },
                { key: 'פתית/לחמית', value: 2 },
                { key: 'בייגלה עגול', value: 0.25 },
        ];

        const [selectedBread, setSelectedBread] = useState("לחם לבן/שחור/חלה/חי");
        const [selectedAmount, setSelectedAmount] = useState(1);
        const [result, setResult] = useState(0);

        const calculateValue = (selectedBread, amount) => {
                // represents the selected bread object 
                const selected = breads.find(bread => bread.key === selectedBread);
                console.log(selected)

                switch (selectedBread) {
                        case 'לחם לבן/שחור/חלה/חי':
                        case 'מצה קלה':
                        case 'פיתה ביס':
                                return selected.value * amount;
                        case 'לחם דל קלוריות':
                        case 'פת מצה':
                        case 'פתית/לחמית':
                                return amount / 2;
                        case 'לחמנייה קטנה':
                        case 'מצה רגילה':
                                return amount * 2;
                        case 'לחמנייה גדולה':
                        case 'פיתה גדולה':
                        case 'בייגלה עגול':
                                return amount * 4;
                        case 'פיתה רגילה':
                                return amount * 3;
                        case 'פריכיות אורז':
                                return amount / 3;
                        default:
                                return 0;
                }
        };

        const handleBread = (event) => {
                setSelectedBread(event.target.value);
        };

        const handleAmount = (event) => {
                setSelectedAmount(event.target.value);
        };
        const handleSubmit = (e) => {
                //prevent reload the page
                e.preventDefault();
                setResult(calculateValue(selectedBread, selectedAmount));
        };

        return (

                <form onSubmit={handleSubmit} dir="rtl">
                        <h1>לחמים</h1>
                        <label htmlFor="selectedAmount">
                                מספר פרוסות:
                                <input
                                        name='selectedAmount'
                                        type="number"
                                        id="selectedAmount"
                                        min="0"
                                        max="100"
                                        step="0.5"
                                        value={selectedAmount}
                                        onChange={handleAmount}
                                />
                        </label>
                        <br />
                        <label htmlFor="selectedBread">
                                סוג הלחם:
                                <select id="selectedBread" name='selectedBread' value={selectedBread} onChange={handleBread}>
                                        {
                                                breads.map((bread) => (
                                                        <option key={bread.key} value={bread.key}>
                                                                {bread.key}
                                                        </option>
                                                ))
                                        }
                                </select>
                        </label>
                        <br />
                        <label htmlFor="result">
                                מספר מנות:
                                <input
                                        type="text"
                                        id="result"
                                        value={result}
                                        disabled
                                />
                        </label>
                        <button type="submit">חשב</button>
                </form>
        );
};

export default Breads;