import React, { useState } from 'react';



const FakePaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment Details:', { cardNumber, expiryDate, cvv });
    setSubmitted(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'cardNumber') {
      setCardNumber(value);
    } else if (name === 'expiryDate') {
      setExpiryDate(value);
    } else if (name === 'cvv') {
      setCvv(value);
    }
  };

  return (
    <div className='payment-form'>
      <form onSubmit={handleSubmit}>
        <h1 className='Payment-head'>Transaction Method</h1>
        <div className='Card-number'>
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={cardNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='Card-number'>
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            value={expiryDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='Card-number'>
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={cvv}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Pay Now</button>
      </form>
      {submitted && (
        <div className="popup">
          <div className="popup-content">
            <h2>Payment Successful!</h2>
            <p>Thank you for your payment.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FakePaymentForm;

