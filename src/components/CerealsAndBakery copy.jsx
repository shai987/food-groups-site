import { useState } from 'react';
import cerealsAndBakery from '../services/cerealsAndBakery';

const CerealsAndBakery = () => {

        const cookedFoods = [
                { key: 'קורנפלקס', value: 0.5 },
                { key: 'ברנפלקס', value: 0.5 },
                { key: 'גרנולה', value: 3 },
                { key: 'פצפוצי אורז', value: 0.5 },
                { key: 'בייגלה - מקלות', value: 20 },
                { key: 'פופקורן מוכן ללא שמן', value: 3 },
                { key: 'פופקורן מותפח בשמן', value: 3 },
                { key: 'ופלים/עוגיות', value: 2 },
                { key: 'עוגה יבשה', value: 1 },
                { key: 'קרקרים', value: 2 },
                { key: 'שקדי מרק', value: 3 },
        ];

        const [selectedCookedFoods, setSelectedCookedFoods] = useState('קורנפלקס');
        // const [selectedCookedFoods, setSelectedCookedFoods] = useState(cerealsAndBakery);

        const [selectedAmount, setSelectedAmount] = useState(1);
        const [result, setResult] = useState(0);

        const calculateValue = (selectedCookedFoods, amount) => {
                // represents the selected cookedFoods object 
                const selected = cookedFoods.find(cooked => cooked.key === selectedCookedFoods);

                switch (selectedCookedFoods) {
                        case 'קורנפלקס':
                        case 'ברנפלקס':
                        case 'פצפוצי אורז':
                                return `${amount * 2} כוסות`;
                        case 'גרנולה':
                                return `${amount / 3} כפות (להוסיף מנת שומן)`;
                        case 'תירס משומר מתוק (גרעינים)':
                        case 'בייגלה - מקלות':
                        case 'פופקורן מוכן ללא שמן':
                                return amount * 2;
                        case 'פופקורן מותפח בשמן':
                                return `${amount * 2} כוס`;

                        case 'פצפוצי אורז':
                                return
                        case 'ברנפלקס':
                                return
                        case 'ופלים/עוגיות':
                                return
                        case 'עוגה יבשה':
                                return
                        default:
                                return 0;
                }
        };

        const handleCookedFoods = (event) => {
                setSelectedCookedFoods(event.target.value);
        };

        const handleAmount = (event) => {
                setSelectedAmount(event.target.value);
        };
        const handleSubmit = (e) => {
                //prevent reload the page
                e.preventDefault();
                setResult(calculateValue(selectedCookedFoods, selectedAmount));
        };

        return (

                <form onSubmit={handleSubmit} dir="rtl">
                        <h1>דגנים ומוצרי מאפה</h1>
                        <label htmlFor="selectedAmount">
                                מספר כוסות:
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
                                סוג הדגנים/מוצרי המאפה:
                                <select id="selectedBread" name='selectedBread' value={selectedCookedFoods} onChange={handleCookedFoods}>
                                        {
                                                cookedFoods.map((coocked) => (
                                                        <option key={coocked.key} value={coocked.key}>
                                                                {coocked.key}
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

export default CerealsAndBakery;