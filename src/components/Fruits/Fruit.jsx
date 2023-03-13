import { useState, useEffect } from 'react';
import fruits from '../../services/Fruits/fruits';
import '../../assets/css/basic.css';

const Fruit = () => {
        //  array of type calculation
        const types = ['כמות', 'גרם'];

        // My states 
        const [products] = useState(fruits);
        const [productName, setProductName] = useState(fruits[0]['details']['productName']);
        const [productType, setProductType] = useState(types[0]);
        // Get the product object 
        const product = products.find(product => product?.details?.productName === productName);
        //  array of value calculation
        const values = [product?.unit?.measures[0], product?.unit?.measures[1]];
        const [productValues, setProductValues] = useState(values[0]);
        const [productAmount, setProductAmount] = useState(1);
        const [result, setResult] = useState('');

        // Get array of type
        const type = types.find(type => type === productType);
        // Get array of value
        const value = values.find(value => value === productValues);

        useEffect(() => {
                if (values[0]) {
                        setProductValues(values[0]);
                }
                else {
                        setProductValues(values[1]);
                }
        }, [productType, product]);

        // My handlers
        const calculateValue = (amount, productType, productValues) => {
                // Calculate count value1 reasult
                const productCalculationCountValue1 = ` ${(amount / product?.details?.value1).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
                // Calculate count value1 reasult
                const productCalculationCountValue2 = ` ${(amount / product?.details?.value2).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
                // Calculate gram reasult
                const productCalculationGram = ` ${(amount / product?.details?.gram).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

                if (product && type && value) {
                        if (product?.check?.value) {
                                if (productType === types[0])
                                        return productValues === values[0] ? productCalculationCountValue1 : productCalculationCountValue2;
                                else
                                        return productCalculationGram;
                        }
                        else {
                                return productType === types[0] ? productCalculationCountValue1 : productCalculationGram;
                        }
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

        const handleProductType = (event) => {
                setProductType(event.target.value);
        };

        const handleProductValues = (event) => {
                setProductValues(event.target.value);
        };

        // Clean input field when click it 
        const handleClear = (event) => {
                event.target.value = "";
        };

        const handleSubmit = (e) => {
                // Prevent reload the page
                e.preventDefault();
                setResult(calculateValue(productAmount, productType, productValues));
        };

        return (
                <form onSubmit={handleSubmit}>
                        <h1>פירות</h1>
                        <label>
                                חישוב לפי כמות או גרמים:
                                <input list="productType"
                                        defaultValue={productType}
                                        onChange={handleProductType}
                                        onClick={handleClear}
                                        onFocus={handleClear}
                                />
                                <datalist id="productType">
                                        {
                                                types.map((type) => (
                                                        <option key={type} name="productType" value={type}>
                                                                {type}
                                                        </option>
                                                ))
                                        }
                                </datalist>
                        </label>
                        <br />
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
                        <br />
                        <label>
                                סוג הפרי:
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
                                                                {productType === types[0] ? product?.unit?.measureString : product?.unit?.gramString}
                                                        </option>
                                                ))
                                        }
                                </datalist>
                        </label>
                        <br />
                        {product?.check?.value === true && productType === types[0] && <div>
                                <label>
                                        בחירת סוג חישוב כמות
                                        <input list="productValues"
                                                value={productValues || ''}
                                                onChange={handleProductValues}
                                                onClick={handleClear}
                                                onFocus={handleClear}
                                        />
                                        <datalist id="productValues">
                                                {
                                                        values.map((value) => (
                                                                <option key={value} name="productValues" value={value || ''}>
                                                                        {value}
                                                                </option>
                                                        ))
                                                }
                                        </datalist>
                                </label>
                        </div>}
                        <br />
                        <div className='div1'>
                                מספר מנות:
                                {result}
                        </div>
                        <button type="submit">חשב</button>
                </form >
        );
};

export default Fruit;