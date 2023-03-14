import { useState } from 'react';
import cookedFoods from '../../services/Legumes&Amylum/cookedFoods';
import '../../assets/css/basic.css';

const CookedFoodsPA = () => {
        //  array of type calculation
        const types = ['כמות', 'גרם'];

        // My states 
        const [products] = useState(cookedFoods);
        const [productName, setProductName] = useState(cookedFoods[0]['details']['productName']);
        const [productType, setProductType] = useState(types[0]);
        const [productAmount, setProductAmount] = useState(1);
        const [result, setResult] = useState('');

        // Get the product object 
        const product = products.find(product => product?.details?.productName === productName);
        // Get array of type
        const type = types.find(type => type === productType);

        // My handlers
        const calculateValue = (amount, productType) => {
                const numberFormat = { minimumFractionDigits: 2, maximumFractionDigits: 2 };
                const negligibleNumber = 0.25;
                // Basic calculate count reasult 
                const productCalculationCount = ` ${(amount / product?.details?.value).toLocaleString(numberFormat)}`;
                // Calculate count fat reasult 
                const productCalculationCountFat = ` ${(amount / product?.details?.value).toLocaleString(numberFormat)}\n ${product?.fat?.fatString.split(" יש להוסיף ")[0]} יש להוסיף ${(amount / product?.details?.value).toLocaleString(numberFormat)} ${product?.fat?.fatString.split(" יש להוסיף ")[1]}`;
                // Calculate gram fat reasult
                const productCalculationGramFat = ` ${(amount / product?.details?.gram).toLocaleString(numberFormat)}\n ${product?.fat?.fatString.split(" יש להוסיף ")[0]} יש להוסיף ${(amount / product?.details?.gram).toLocaleString(numberFormat)} ${product?.fat?.fatString.split(" יש להוסיף ")[1]}`;
                // Basic calculate gram reasult
                const productCalculationGram = ` ${(amount / product?.details?.gram).toLocaleString(numberFormat)}`;

                if (product && type) {
                        if (product?.check?.fat) {
                                const answer = productType === types[0] ? productCalculationCountFat : productCalculationGramFat;
                                return answer >= negligibleNumber ? answer : ' זניח';
                        }
                        else {
                                const answer = productType === types[0] ? productCalculationCount : productCalculationGram;
                                return answer >= negligibleNumber ? answer : ' זניח';
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

        // Clean input field when click it 
        const handleClear = (event) => {
                event.target.value = "";
        };

        const handleSubmit = (e) => {
                // Prevent reload the page
                e.preventDefault();
                setResult(calculateValue(productAmount, productType));
        };

        return (
                <form onSubmit={handleSubmit}>
                        <h1>מזונות מבושלים (ללא שמן)</h1>
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
                                סוג המזון המבושל:
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
                        <br /><br />
                        <div className='div1'>
                                מספר מנות:
                                {result}
                        </div>
                        <button type="submit">חשב</button>
                </form >
        );
};

export default CookedFoodsPA;