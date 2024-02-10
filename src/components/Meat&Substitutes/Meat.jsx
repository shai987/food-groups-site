// import react state
import { useState, useEffect } from 'react';
// import from react-select
import Select from 'react-select';
// import service 
import meats from '../../services/Meat&Substitutes/meats';
// import variables 
import { variables, getMaxHeight } from '../variables';
// import container 
import FormFrame from '../FormFrame';
// import css
import '../../assets/css/basic.css';

const Meat = () => {
        //  array of type calculation
        const types = ['כמות', 'גרם'];

        // My states 
        const [products] = useState(meats);
        const [productName, setProductName] = useState(meats[4]['details']['productName']);
        const [productType, setProductType] = useState(types[0]);
        const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
        const [productAmount, setProductAmount] = useState(1);
        const [result, setResult] = useState('');
        const [flag, setFlag] = useState(false);
        // Get the product object 
        const product = products.find(product => product?.details?.productName === productName);
        // Get array of type
        const type = types.find(type => type === productType);

        useEffect(() => {
                // Add event listener on mount
                window.addEventListener('resize', handleResize);

                // Clean up the event listener on unmount
                return () => {
                        window.removeEventListener('resize', handleResize);
                };
        }, []);

        // My handlers
        const calculateValue = (productName, amount, productType) => {
                // Calculate count 
                const count = (amount / product?.details?.value).toLocaleString(variables?.numberFormat);
                // Calculate countPortionFat 
                const countPortionFat = (amount / product?.breadFat?.portionFatCalculationCount).toLocaleString(variables?.numberFormat);
                // Calculate countFat 
                const countFat = (amount / product?.breadFat?.fatCalculationCount).toLocaleString(variables?.numberFormat);
                // Calculate gram 
                const gram = (amount / product?.details?.gram).toLocaleString(variables?.numberFormat);
                // Calculate gramPortionFat 
                const gramPortionFat = (amount / product?.breadFat?.portionFatCalculationGram).toLocaleString(variables?.numberFormat);
                // Calculate gramFat 
                const gramFat = (amount / product?.details?.fat).toLocaleString(variables?.numberFormat);
                // Calculate gramBread 
                const gramBread = (amount / product?.breadFat?.breadCalculationGram).toLocaleString(variables?.numberFormat);
                // Calculate message 
                const message = product?.details?.message;
                // Calculate fatString0 
                const fatString0 = `${product?.breadFat?.fatString.split(" יש להוריד ")[0]} יש להוריד`;
                // Calculate fatString1 
                const fatString1 = product?.breadFat?.fatString.split(" יש להוריד ")[1];
                // Calculate portionFatString0 
                const portionFatString0 = `${product?.breadFat?.portionFatString.split(" יש להוריד ")[0]} יש להוריד`;
                // Calculate portionFatString1 
                const portionFatString1 = product?.breadFat?.portionFatString.split(" יש להוריד ")[1];
                // Calculate breadString0 
                const breadString0 = `${product?.breadFat?.breadString.split(" יש להוסיף ")[0]} יש להוסיף`;
                // Calculate breadString1 
                const breadString1 = product?.breadFat?.breadString.split(" יש להוסיף ")[1];

                // Match count with NEGLIGIBLE_NUMBER
                const calculationCountFraction = ` ${count}`;
                // Calculate count reasult using toFraction 
                const calculationCount = ` ${variables?.fractionCalculation(count)}`;
                // Calculate count portionFat reasult using toFraction   
                const calculationCountPortionFat = ` ${variables?.fractionCalculation(count)}\n ${portionFatString0} ${variables?.fractionCalculation(countPortionFat)} ${portionFatString1}`;
                // Calculate count fat reasult using toFraction  
                const calculationCountFat = ` ${variables?.fractionCalculation(count)}\n ${fatString0} ${variables?.fractionCalculation(countFat)} ${fatString1}`;

                // Match gram with NEGLIGIBLE_NUMBER
                const calculationGramFraction = ` ${gram}`;
                // Calculate gram reasult using toFraction
                const calculationGram = ` ${variables?.fractionCalculation(gram)}`;
                // Calculate gram portionFat reasult using toFraction  
                const calculationGramPortionFat = ` ${variables?.fractionCalculation(gram)}\n ${portionFatString0} ${variables?.fractionCalculation(gramPortionFat)} ${portionFatString1}`;
                // Calculate gram fat reasult using toFraction 
                const calculationGramFat = ` ${variables?.fractionCalculation(gram)}\n ${fatString0} ${variables?.fractionCalculation(gramFat)} ${fatString1}`;
                // Calculate gram bread reasult using toFraction
                const calculationGramBread = ` ${variables?.fractionCalculation(gram)}\n ${breadString0} ${variables?.fractionCalculation(gramBread)} ${breadString1}`;
                // Calculate gram fat message reasult using toFraction 
                const calculationGramFatMessage = ` ${variables?.fractionCalculation(gram)}\n ${fatString0} ${variables?.fractionCalculation(gramFat)} ${fatString1}\n ${message}`;

                if (isNaN(productAmount)) {
                        return alert(variables.stringProductAmount);
                }
                if (product && type) {
                        if (product?.check?.count && product?.check?.gram && product?.check?.portionFat) {
                                return productType === types[0] && calculationCountFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationCountPortionFat
                                        : productType === types[1] && calculationGramFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationGramPortionFat
                                                : ' זניח';
                        }
                        else if (product?.check?.count && product?.check?.gram && product?.check?.fat) {
                                return productType === types[0] && calculationCountFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationCountFat
                                        : productType === types[1] && calculationGramFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationGramFat
                                                : ' זניח';
                        }
                        else if (product?.check?.count && product?.check?.gram) {
                                return productType === types[0] && calculationCountFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationCount
                                        : productType === types[1] && calculationGramFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationGram
                                                : 'זניח';
                        }
                        else if (product?.check?.gram && product?.check?.portionFat) {
                                return productType === types[0] ? ` לא ניתן לבצע חישוב לפי כמות לערך ${productName} `
                                        : calculationGramFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationGramPortionFat
                                                : 'זניח';
                        }
                        else if (product?.check?.gram && product?.check?.fat && product?.check?.message) {
                                return productType === types[0] ? ` לא ניתן לבצע חישוב לפי כמות לערך ${productName} `
                                        : calculationGramFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationGramFatMessage
                                                : 'זניח';
                        }
                        else if (product?.check?.gram && product?.check?.fat) {
                                return productType === types[0] ? ` לא ניתן לבצע חישוב לפי כמות לערך ${productName} `
                                        : calculationGramFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationGramFat
                                                : 'זניח';
                        }
                        else if (product?.check?.gram && product?.check?.bread) {
                                return productType === types[0] ? ` לא ניתן לבצע חישוב לפי כמות לערך ${productName} `
                                        : calculationGramFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationGramBread
                                                : 'זניח';
                        }
                        else {
                                return productType === types[0] ? ` לא ניתן לבצע חישוב לפי כמות לערך ${productName} `
                                        : calculationGramFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationGram
                                                : 'זניח';
                        }
                }
                else {
                        return alert(variables.stringAlert);
                }
        };

        const handleProduct = (event) => {
                setProductName(event.target.value);
        };

        const handleProductPC = (selectedOption) => {
                setProductName(selectedOption ? selectedOption.value : null);
        };

        const handleAmount = (event) => {
                setProductAmount(event.target.value);
        };

        const handleProductType = (event) => {
                setProductType(event.target.value);
        };

        const handleProductTypePC = (selectedOption) => {
                setProductType(selectedOption ? selectedOption.value : null);
        };

        const handleResize = () => {
                setViewportWidth(window.innerWidth);
        };

        const handleSubmit = (e) => {
                // Prevent reload the page
                e.preventDefault();
                try {
                        setResult(calculateValue(productName, productAmount, productType));
                        setFlag(true);
                }
                catch (err) {
                        console.log(err.message);
                        setResult(variables.stringResult);
                }
        };

        const productsOptions = products.map((product) => {
                const shouldShowOption = (product?.check?.count && productType === types[0])
                        || productType === types[1];

                return shouldShowOption ? (
                        {
                                value: product?.details?.productName,
                                label: productType === types[0]
                                        ? `${product?.details?.productName} ${product?.unit?.measureString}`
                                        : `${product?.details?.productName} ${product?.unit?.gramString}`
                        }
                ) : null;
        });

        const filteredProductsOptions = productsOptions.filter(option => option !== null);

        const typesOptions = types.map((type) => ({
                value: type,
                label: type
        }));

        return (
                <>
                        <FormFrame>
                                <form onSubmit={handleSubmit}>
                                        <div>
                                                <h1>בשרים</h1>
                                                <h3>*כ-100 גרם בשר מבושל הם שווה ערך ל-130 גרם בשר טרי. הערכים הינם לאחר בישול.</h3>
                                        </div>
                                        <label id='productType'>
                                                חישוב לפי כמות או גרמים:
                                                {viewportWidth <= 600 ? (
                                                        <select
                                                                id='productType'
                                                                name='productType'
                                                                value={productType}
                                                                onChange={handleProductType}
                                                        >
                                                                {
                                                                        types.map((type) => (
                                                                                <option key={type} name="productType" value={type}>
                                                                                        {type}
                                                                                </option>
                                                                        ))
                                                                }
                                                        </select>
                                                ) : (
                                                        <Select
                                                                id='productType'
                                                                name='productType'
                                                                options={typesOptions}
                                                                isSearchable
                                                                isClearable
                                                                noOptionsMessage={() => variables.stringSelectProductTypeNoOptionsMessage}
                                                                placeholder={variables.stringSelect}
                                                                value={typesOptions.find((option) => option.value === productType)}
                                                                onChange={handleProductTypePC}
                                                        />
                                                )}
                                        </label>
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
                                        <label>
                                                סוג הבשר:
                                                {viewportWidth <= 600 ? (
                                                        <select
                                                                value={productName}
                                                                onChange={handleProduct}
                                                        >
                                                                {products.map((product) => {
                                                                        const shouldShowOption = (product?.check?.count && productType === types[0])
                                                                                || productType === types[1];
                                                                        return shouldShowOption ? (
                                                                                <option
                                                                                        key={product?.details?.productName}
                                                                                        value={product?.details?.productName}
                                                                                >
                                                                                        {
                                                                                                productType === types[0]
                                                                                                        ? `${product?.details?.productName} ${product?.unit?.measureString}`
                                                                                                        : `${product?.details?.productName} ${product?.unit?.gramString}`
                                                                                        }
                                                                                </option>
                                                                        ) : null;
                                                                })}
                                                        </select>
                                                ) : (
                                                        <Select
                                                                styles={{
                                                                        menu: (provided) => ({
                                                                                ...provided,
                                                                                maxHeight: getMaxHeight(viewportWidth),
                                                                                overflowY: 'auto',
                                                                        }),
                                                                }}
                                                                options={filteredProductsOptions}
                                                                isSearchable
                                                                isClearable
                                                                noOptionsMessage={() => variables.stringSelectProductNameNoOptionsMessage}
                                                                placeholder={variables.stringSelect}
                                                                value={filteredProductsOptions.find((option) => option.value === productName)}
                                                                onChange={handleProductPC}
                                                        />
                                                )}
                                        </label>
                                        <div className='div-result div-result-pc'>
                                                {flag === true && 'מספר מנות:'}
                                                <div className='result'>{result}</div>
                                        </div>
                                        <button type="submit">חשב</button>
                                </form >
                        </FormFrame >
                </>
        );
};

export default Meat;