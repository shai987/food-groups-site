import { useState } from 'react';
import cookedFoods from '../../services/Pulse&Amylum/cookedFoods';
import '../../assets/css/basic.css';

const CookedFoodsPA = () => {
        const types = ['כמות', 'גרם'];
        const [products] = useState(cookedFoods);
        const [productName, setProductName] = useState(cookedFoods[0]['details']['productName']);
        const [productType, setProductType] = useState(types[0]);
        const [productAmount, setProductAmount] = useState(1);
        const [result, setResult] = useState('');

        const calculateValue = (productName, amount, productType) => {
                // Get the product object 
                const product = products.find(product => product.details?.productName === productName);
                // For basic reasult multiplication operation
                const productMultiplication = ` ${(amount * product.details?.calculationValue).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
                // For basic reasult division operation
                const productDivision = ` ${(amount / product.details?.calculationValue).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
                // For basic gram reasult division operation
                const productDivisionGram = ` ${(amount / product.details?.gram).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

                switch (productType) {
                        case 'כמות':
                                {
                                        switch (productName) {
                                                case 'שעועית לבנה':
                                                case 'אפונה ירוקה':
                                                case 'עדשים':
                                                case 'פול':
                                                case 'פולי סויה':
                                                case 'חומוס גרגרים':
                                                        return productMultiplication;
                                                case 'חומוס סלט':
                                                case 'פלאפל':
                                                        return productDivision;

                                                default:
                                                        return 0;
                                        }
                                }
                        case 'גרם':
                                {
                                        switch (productName) {
                                                case 'שעועית לבנה':
                                                case 'אפונה ירוקה':
                                                case 'עדשים':
                                                case 'פול':
                                                case 'פולי סויה':
                                                case 'חומוס גרגרים':
                                                case 'חומוס סלט':
                                                case 'פלאפל':
                                                        return product.details.gram === 0 ? 0 : productDivisionGram; // prevent infinity
                                                default:
                                                        return 0;
                                        }
                                }
                        default:
                                return 0;
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
                setResult(calculateValue(productName, productAmount, productType));
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
                                                        <option key={product.details?.productName} name="productName" value={product.details?.productName}>
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

export default CookedFoodsPA;