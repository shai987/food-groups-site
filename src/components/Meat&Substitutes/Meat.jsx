import { useState } from 'react';
import meats from '../../services/Meat&Substitutes/meats';
import '../../assets/css/basic.css';

const Meat = () => {
        //  array of type calculation
        const types = ['כמות', 'גרם'];

        // My states 
        const [products] = useState(meats);
        const [productName, setProductName] = useState(meats[0]['details']['productName']);
        const [productType, setProductType] = useState(types[0]);
        const [productAmount, setProductAmount] = useState(1);
        const [result, setResult] = useState('');

        // My handlers
        const calculateValue = (productName, amount, productType) => {
                // Get the product object 
                const product = products.find(product => product?.details?.productName === productName);
                // Basic calculate count reasult 
                const productCalculationCount = ` ${(amount / product?.details?.value).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
                // Calculate count portionFat reasult  
                const productCalculationCountPortionFat = ` ${(amount / product?.details?.value).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n ${product?.breadFat?.portionFatString.split(" יש להוריד ")[0]} יש להוריד ${(amount / product?.breadFat?.portionFatCalculationCount).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${product?.breadFat?.portionFatString.split(" יש להוריד ")[1]}`;
                // Calculate count fat reasult  
                const productCalculationCountFat = ` ${(amount / product?.details?.value).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n ${product?.breadFat?.fatString.split(" יש להוריד ")[0]} יש להוריד ${(amount / product?.breadFat?.fatCalculationCount).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${product?.breadFat?.fatString.split(" יש להוריד ")[1]}`;
                // Basic calculate gram reasult
                const productCalculationGram = ` ${(amount / product?.details?.gram).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
                // Calculate gram portionFat reasult  
                const productCalculationGramPortionFat = ` ${(amount / product?.details?.gram).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n ${product?.breadFat?.portionFatString.split(" יש להוריד ")[0]} יש להוריד ${(amount / product?.breadFat?.portionFatCalculationGram).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${product?.breadFat?.portionFatString.split(" יש להוריד ")[1]}`;
                // Calculate gram fat reasult  
                const productCalculationGramFat = ` ${(amount / product?.details?.gram).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n ${product?.breadFat?.fatString.split(" יש להוריד ")[0]} יש להוריד ${(amount / product?.details?.fat).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${product?.breadFat?.fatString.split(" יש להוריד ")[1]}`;
                // Calculate gram bread reasult  
                const productCalculationGramBread = ` ${(amount / product?.details?.gram).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n ${product?.breadFat?.breadString.split(" יש להוסיף ")[0]} יש להוסיף ${(amount / product?.breadFat?.breadCalculationGram).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${product?.breadFat?.breadString.split(" יש להוסיף ")[1]}`;
                // Calculate gram fat message reasult 
                const productCalculationGramFatMessage = ` ${(amount / product?.details?.gram).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n ${product?.breadFat?.fatString.split(" יש להוריד ")[0]} יש להוריד ${(amount / product?.details?.fat).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${product?.breadFat?.fatString.split(" יש להוריד ")[1]}\n ${product?.details?.message}`;

                if (product) {
                        if (product?.check?.count && product?.check?.gram && product?.check?.portionFat) {
                                return productType === 'כמות' ? productCalculationCountPortionFat : productCalculationGramPortionFat;
                        }
                        else if (product?.check?.count && product?.check?.gram && product?.check?.fat) {
                                return productType === 'כמות' ? productCalculationCountFat : productCalculationGramFat;
                        }
                        else if (product?.check?.count && product?.check?.gram) {
                                return productType === 'כמות' ? productCalculationCount : productCalculationGram;
                        }
                        else if (product?.check?.gram && product?.check?.portionFat) {
                                return productType === 'כמות' ? ` לא ניתן לבצע חישוב לפי כמות לערך ${productName} ` : productCalculationGramPortionFat;
                        }
                        else if (product?.check?.gram && product?.check?.fat && product?.check?.message) {
                                return productType === 'כמות' ? ` לא ניתן לבצע חישוב לפי כמות לערך ${productName} ` : productCalculationGramFatMessage;
                        }
                        else if (product?.check?.gram && product?.check?.fat) {
                                return productType === 'כמות' ? ` לא ניתן לבצע חישוב לפי כמות לערך ${productName} ` : productCalculationGramFat;
                        }
                        else if (product?.check?.gram && product?.check?.bread) {
                                return productType === 'כמות' ? ` לא ניתן לבצע חישוב לפי כמות לערך ${productName} ` : productCalculationGramBread;
                        }
                        else {
                                return productType === 'כמות' ? ` לא ניתן לבצע חישוב לפי כמות לערך ${productName} ` : productCalculationGram;
                        }
                }
                else {
                        return alert('המוצר לא קיים');
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
                        <h1>בשר</h1>
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
                        <label>
                                סוג הבשר:
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

export default Meat;