// import { useState } from 'react';
// import flours from '../../services/Grains&Bakery/flours';
// import '../../assets/css/basic.css';

// const Flour = () => {
//         //  array of type calculation
//         const types = ['כמות', 'גרם'];

//         // My form variables
//         const initialFormData = {
//                 products: flours,
//                 productNameFlour: flours[0]['details']['productName'],
//                 productTypeFlour: types[0],
//                 productAmount: 1,
//         }

//         // My states
//         const [formData, setFormData] = useState(initialFormData);
//         const [result, setResult] = useState('');

//         // My handlers
//         const calculateValue = (productName, amount, productType) => {
//                 // Get the product object
//                 const product = formData.products.find(product => product.details?.productName === productName);
//                 // Calculate count reasult
//                 const productCalculationCount = ` ${(amount / product.details?.value).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
//                 // Calculate gram reasult
//                 const productCalculationGram = ` ${(amount / product.details?.gram).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

//                 return productType === 'כמות' ? productCalculationCount : productCalculationGram;
//         };

//         const handleChange = (e) => {
//                 setFormData({
//                         ...formData,
//                         [e.target.name]: e.target.value,
//                 })
//         }

//         // Clean input field when click it
//         const handleClear = (event) => {
//                 event.target.value = "";
//         };

//         const handleSubmit = (e) => {
//                 // Prevent reload the page
//                 e.preventDefault();
//                 setResult(calculateValue(formData.productNameFlour, formData.productAmount, formData.productTypeFlour));
//         };

//         return (
//                 <form onSubmit={handleSubmit}>
//                         <h1>קמחים (לא מבושל)</h1>
//                         <label>
//                                 חישוב לפי כמות או גרמים:
//                                 <input list="productTypeFlour"
//                                         name='productTypeFlour'
//                                         defaultValue={formData.productTypeFlour}
//                                         onChange={handleChange}
//                                         onClick={handleClear}
//                                         onFocus={handleClear}
//                                 />
//                                 <datalist id="productTypeFlour">
//                                         {
//                                                 types.map((type) => (
//                                                         <option key={type} name="productTypeFlour" value={type}>
//                                                                 {type}
//                                                         </option>
//                                                 ))
//                                         }
//                                 </datalist>
//                         </label>
//                         <br />
//                         <label htmlFor="productAmount">
//                                 כמות נצרכת:
//                                 <input
//                                         name='productAmount'
//                                         type="number"
//                                         id="productAmount"
//                                         min="0"
//                                         max="1000"
//                                         step="any"
//                                         value={formData.productAmount}
//                                         onChange={handleChange}
//                                 />
//                         </label>
//                         <br />
//                         <label>
//                                 סוג הקמח:
//                                 <input list="productNameFlour"
//                                         name='productNameFlour'
//                                         defaultValue={formData.productName}
//                                         onChange={handleChange}
//                                         onClick={handleClear}
//                                         onFocus={handleClear}
//                                 />
//                                 <datalist id="productNameFlour">
//                                         {
//                                                 formData.products.map((product) => (
//                                                         <option key={product.details?.productName} name="productNameFlour" value={product.details?.productName}>
//                                                                 {formData.productTypeFlour === 'כמות' ? product.unit?.measureString : product.unit?.gramString}
//                                                         </option>
//                                                 ))
//                                         }
//                                 </datalist>
//                         </label>
//                         <br /><br />
//                         <div className='div1'>
//                                 מספר מנות:
//                                 {result}
//                         </div>
//                         <button type="submit">חשב</button>
//                 </form >
//         );
// };

// export default Flour;