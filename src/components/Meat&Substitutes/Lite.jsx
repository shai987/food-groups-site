import { useState } from 'react';
import lite from '../../services/Meat&Substitutes/lite';
import '../../assets/css/basic.css';

const Lite = () => {
        // My states 
        const [products] = useState(lite);
        const [productName, setProductName] = useState(lite[0]['details']['productName']);
        const [productAmount, setProductAmount] = useState(1);
        const [result, setResult] = useState('');

        // Get the product object 
        const product = products.find(product => product?.details?.productName === productName);

        // My handlers
        const calculateValue = (amount) => {
                const numberFormat = { minimumFractionDigits: 2, maximumFractionDigits: 2 };
                const negligibleNumber = 0.25;
                // Calculate count bread reasult  
                const productCalculationCountBread = ` ${(amount / product?.details?.value).toLocaleString(numberFormat)}\n ${product?.fat?.fatString.split(" יש להוריד ")[0]} יש להוריד ${(amount / product?.details?.value).toLocaleString(numberFormat)} ${product?.fat?.fatString.split(" יש להוריד ")[1]}`;

                if (product) {
                        return productCalculationCountBread >= negligibleNumber ? productCalculationCountBread : ' זניח';
                }
                else {
                        return alert('הערך שהוזן אינו קיים');
                }
        };

        const handleProduct = (event) => {
                setProductName(event.target.value);
        };

        const handleAmount = (event) => {
                setProductAmount(event.target.value);
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
                        <h1>תחליפי בשר - לייט</h1>
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
                        <label>
                                סוג המוצר:
                                <input list="productName"
                                        defaultValue={productName}
                                        onChange={handleProduct}
                                        onClick={handleClear}
                                        onFocus={handleClear}
                                />
                                <datalist id="productName">
                                        {
                                                products.map((product) => (
                                                        <option key={product?.details?.productName} name="productName" value={product?.details?.productName}>
                                                                {product?.unit?.measureString}
                                                        </option>
                                                ))
                                        }
                                </datalist>
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

export default Lite;