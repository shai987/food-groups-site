import { useState } from 'react';
import flours from '../../services/Grains&Bakery/flours';
import '../../assets/css/basic.css';

const Flour = () => {
        //  array of type calculation
        const types = ['כמות', 'גרם'];

        // My states  
        const [products] = useState(flours);
        const [productName, setProductName] = useState(flours[0]['details']['productName']);
        const [productType, setProductType] = useState(types[0]);
        const [productAmount, setProductAmount] = useState(1);
        const [result, setResult] = useState('');

        // My handlers
        const calculateValue = (productName, amount, productType) => {
                // Get the product object 
                const product = products.find(product => product.details?.productName === productName);
                // Calculate count reasult
                const productCalculationCount = ` ${(amount / product.details?.value).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
                // Calculate gram reasult
                const productCalculationGram = ` ${(amount / product.details?.gram).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

                return productType === 'כמות' ? productCalculationCount : productCalculationGram;
        };

        const handleProduct = (event) => {
                setProductName(event.target.value);
        };

        const handleAmount = (event) => {
                setProductAmount(event.target.value);
        };

        const handleProductType = (event) => {
                setProductType(event.target.value);
        };

        // Clean input field when click it 
        const handleClear = (event) => {
                event.target.value = "";
        };

        const handleSubmit = (e) => {
                // Prevent reload the page
                e.preventDefault();
                setResult(calculateValue(productName, productAmount, productType));
        };

        return (
                <form onSubmit={handleSubmit}>
                        <h1>קמחים (לא מבושל)</h1>
                        <label>
                                חישוב לפי כמות או גרמים:
                                <input list="productTypeFlour"
                                        defaultValue={productType}
                                        onChange={handleProductType}
                                        onClick={handleClear}
                                        onFocus={handleClear}
                                />
                                <datalist id="productTypeFlour">
                                        {
                                                types.map((type) => (
                                                        <option key={type} name="productTypeFlour" value={type}>
                                                                {type}
                                                        </option>
                                                ))
                                        }
                                </datalist>
                        </label>
                        <br />
                        <label htmlFor="productAmount">
                                כמות נצרכת:
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
                        <br />
                        <label>
                                סוג הקמח:
                                <input list="productNameFlour"
                                        name='productNameFlour'
                                        defaultValue={productName}
                                        onChange={handleProduct}
                                        onClick={handleClear}
                                        onFocus={handleClear}
                                />
                                <datalist id="productNameFlour">
                                        {
                                                products.map((product) => (
                                                        <option key={product.details?.productName} name="productNameFlour" value={product.details?.productName}>
                                                                {productType === 'כמות' ? product.unit?.measureString : product.unit?.gramString}
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

export default Flour;