import { useState } from 'react';
import vegetables from '../../services/Vegetables/vegetables';
import '../../assets/css/basic.css';

const Vegetable = () => {
        // My states 
        const [typesName] = useState(vegetables);
        const [typeName, setTypeName] = useState(vegetables[0]['details']['typeName']);
        const [productAmount, setProductAmount] = useState(1);
        const [result, setResult] = useState('');

        // Get typeName object 
        const type = typesName.find(type => type?.details?.typeName === typeName);

        // My handlers
        const calculateValue = (amount) => {
                const numberFormat = { minimumFractionDigits: 2, maximumFractionDigits: 2 };
                const negligibleNumber = 0.25;
                // Calculate count reasult
                const productCalculationCount = ` ${(amount / type?.details?.value).toLocaleString(numberFormat)}`;

                if (type) {
                        return productCalculationCount >= negligibleNumber ? productCalculationCount : ' זניח';
                }
                else {
                        return alert('הערך שהוזן אינו קיים');
                }
        };

        const handleAmount = (event) => {
                setProductAmount(event.target.value);
        };

        const handleProductType = (event) => {
                setTypeName(event.target.value);
        };

        // Clean input field when click it 
        const handleClear = (event) => {
                event.target.value = "";
        };

        const handleSubmit = (e) => {
                // Prevent reload the page
                e.preventDefault();
                setResult(calculateValue(productAmount));
        };

        return (
                <form onSubmit={handleSubmit}>
                        <h1>ירקות</h1>
                        <label>
                                חישוב לפי כמות:
                                <input list="typeName"
                                        defaultValue={typeName}
                                        onChange={handleProductType}
                                        onClick={handleClear}
                                        onFocus={handleClear}
                                />
                                <datalist id="typeName">
                                        {
                                                typesName.map((type) => (
                                                        <option key={type?.details?.typeName} name="typeName" value={type?.details?.typeName}>
                                                                {type?.details?.typeName}
                                                        </option>
                                                ))
                                        }
                                </datalist>
                        </label>
                        <br /><br />
                        <label htmlFor="productAmount">
                                כמות נאכלת:
                                <input
                                        name='productAmount'
                                        type="number"
                                        id="productAmount"
                                        min="0"
                                        max="1000"
                                        step="any"
                                        value={productAmount}
                                        onChange={handleAmount}
                                />
                        </label>
                        <br /><br />
                        <div className='div1'>
                                מספר מנות:
                                {result}
                        </div>
                        <button type="submit">חשב</button>
                </form >
        );
};

export default Vegetable;