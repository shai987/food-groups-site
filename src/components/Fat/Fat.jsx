// import react states
import { useState, useEffect } from 'react';
// import from react-select
import Select from 'react-select';
// import service 
import fats from '../../services/Fats/fats';
// import variables 
import { variables, getMaxHeight } from '../variables';
// import container 
import FormFrame from '../FormFrame';
// import css
import '../../assets/css/basic.css';

const Fat = () => {
        //  array of type calculation
        const types = ['כמות', 'גרם'];

        // My states 
        const [products] = useState(fats);
        const [productName, setProductName] = useState(fats[0]['details']['productName']);
        const [productType, setProductType] = useState(types[0]);
        const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
        // Get the product object 
        const product = products.find(product => product?.details?.productName === productName);
        //  array of value calculation
        const values = [product?.unit?.measures[0], product?.unit?.measures[1]];
        const [productValues, setProductValues] = useState(values[0]);
        const [productAmount, setProductAmount] = useState(1);
        const [result, setResult] = useState('');
        const [flag, setFlag] = useState(false);

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
        }, [product]);

        useEffect(() => {
                // Add event listener on mount
                window.addEventListener('resize', handleResize);

                // Clean up the event listener on unmount
                return () => {
                        window.removeEventListener('resize', handleResize);
                };
        }, []);

        // My handlers
        const calculateValue = (productName, amount, productType, productValues) => {
                // Calculate count 
                const count = (amount / product?.details?.value1).toLocaleString(variables?.numberFormat);
                // Calculate countValue2 
                const countValue2 = (amount / product?.details?.value2).toLocaleString(variables?.numberFormat);
                // Calculate gram 
                const gram = (amount / product?.details?.gram).toLocaleString(variables?.numberFormat);
                // Calculate message 
                const message = product?.details?.message;
                // Calculate sugar 
                const sugar = (amount / product?.sugar?.sugarCalculation).toLocaleString(variables?.numberFormat);
                // Calculate sugarGram 
                const sugarGram = (amount / product?.sugar?.sugarCalculationGram).toLocaleString(variables?.numberFormat);
                // Calculate sugarString0 
                const sugarString0 = `${product?.sugar?.sugarString.split(" יש להוסיף ")[0]} יש להוסיף`;
                // Calculate sugarString1 
                const sugarString1 = product?.sugar?.sugarString.split(" יש להוסיף ")[1];

                // Match count with NEGLIGIBLE_NUMBER
                const calculationCountFraction = ` ${count}`;
                // Calculate count reasult using toFraction 
                const calculationCount = ` ${variables?.fractionCalculation(count)}`;
                // Calculate count message reasult using toFraction 
                const calculationCountMessage = ` ${variables?.fractionCalculation(count)}\n ${message}`;
                // Calculate count sugar reasult using toFraction  
                const calculationCountSugar = ` ${variables?.fractionCalculation(count)}\n ${sugarString0} ${variables?.fractionCalculation(sugar)} ${sugarString1}`;
                // Use to comparison count value with NEGLIGIBLE_NUMBER
                const calculationCountValueFraction = ` ${countValue2}`;
                // Calculate count value2 reasult using toFraction 
                const calculationCountValue2 = ` ${variables?.fractionCalculation(countValue2)}`;

                // Match gram with NEGLIGIBLE_NUMBER
                const calculationGramFraction = ` ${gram}`;
                // Calculate gram reasult using toFraction 
                const calculationGram = ` ${variables?.fractionCalculation(gram)}`;
                // Calculate gram sugar reasult using toFraction 
                const calculationGramSugar = ` ${variables?.fractionCalculation(gram)}\n ${sugarString0} ${variables?.fractionCalculation(sugarGram)} ${sugarString1}`;
                // Calculate gram message reasult using toFraction 
                const calculationGramMessage = ` ${variables?.fractionCalculation(gram)}\n ${message}`;

                if (isNaN(productAmount)) {
                        return alert(variables.stringProductAmount);
                }
                if (product && type && value) {
                        if (product?.check?.gram && product?.check?.sugar) {
                                return productType === types[0] && calculationCountFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationCountSugar
                                        : productType === types[1] && calculationGramFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationGramSugar
                                                : ' זניח';
                        }
                        else if (product?.check?.gram && product?.check?.message) {
                                return productType === types[0] && calculationCountFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationCountMessage
                                        : productType === types[1] && calculationGramFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationGramMessage
                                                : ' זניח';
                        }
                        else if (product?.check?.gram && product?.check?.value) {
                                if (productType === types[0]) {
                                        return productValues === values[0] && calculationCountFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationCount
                                                : productValues === values[1] && calculationCountValueFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationCountValue2
                                                        : ' זניח';
                                }
                                else {
                                        return calculationGramFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationGram : ' זניח';
                                }
                        }
                        else if (product?.check?.gram) {
                                return productType === types[0] && calculationCountFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationCount
                                        : productType === types[1] && calculationGramFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationGram
                                                : 'זניח';
                        }
                        else {
                                return productType === types[1] ? ` לא ניתן לבצע חישוב לפי גרמים לערך ${productName} `
                                        : calculationCountFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationCount
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

        const handleProductValues = (event) => {
                setProductValues(event.target.value);
        };

        const handleProductValuesPC = (selectedOption) => {
                setProductValues(selectedOption ? selectedOption.value : null);
        };

        const handleResize = () => {
                setViewportWidth(window.innerWidth);
        };

        const handleSubmit = (e) => {
                // Prevent reload the page
                e.preventDefault();
                try {
                        setResult(calculateValue(productName, productAmount, productType, productValues));
                        setFlag(true);
                }
                catch (err) {
                        console.log(err.message);
                        setResult(variables.stringResult);
                }
        };

        const productsOptions = products.map((product) => {
                const shouldShowOption = (product?.check?.gram && productType === types[1])
                        || productType === types[0];

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

        const valuesOptions = values.map((value) => ({
                value: value || '',
                label: value
        }));

        return (
                <>
                        <FormFrame>
                                <form onSubmit={handleSubmit}>
                                        <h1>שומן</h1>
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
                                                סוג המוצר:
                                                {viewportWidth <= 600 ? (
                                                        <select
                                                                value={productName}
                                                                onChange={handleProduct}
                                                        >
                                                                {products.map((product) => {
                                                                        const shouldShowOption = (product?.check?.gram && productType === types[1])
                                                                                || productType === types[0];
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
                                        {product?.check?.value === true && productType === types[0] && <div>
                                                <label id='productValues'>
                                                        בחירת סוג חישוב כמות
                                                        {viewportWidth <= 600 ? (
                                                                <select
                                                                        id='productValues'
                                                                        value={productValues || ''}
                                                                        onChange={handleProductValues}
                                                                >
                                                                        {
                                                                                values.map((value) => (
                                                                                        <option key={value} name="productValues" value={value || ''}>
                                                                                                {value}
                                                                                        </option>
                                                                                ))
                                                                        }
                                                                </select>
                                                        ) : (
                                                                <Select
                                                                        id='productValues'
                                                                        options={valuesOptions}
                                                                        isSearchable
                                                                        isClearable
                                                                        noOptionsMessage={() => variables.stringSelectProductNameNoOptionsMessage}
                                                                        placeholder={variables.stringSelect}
                                                                        value={valuesOptions.find((option) => option.value === productValues || '')}
                                                                        onChange={handleProductValuesPC}
                                                                />
                                                        )}
                                                </label>
                                        </div>}
                                        <div className='div-result div-result-pc'>
                                                {flag === true && 'מספר מנות:'}
                                                <div className='result'>{result}</div>
                                        </div>
                                        <button type="submit">חשב</button>
                                </form >
                        </FormFrame>
                </>
        );
};

export default Fat;