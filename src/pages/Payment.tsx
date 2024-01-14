import React, { useState, ChangeEvent } from 'react';

const Payment = () => {
    const [paymentData, setPaymentData] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPaymentData({ ...paymentData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // כאן תוכל להוסיף את הפעולה של שליחת פרטי התשלום לשרת או עיבוד נוסף
        console.log('Payment submitted:', paymentData);
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <div
                style={{
                    border: '2px solid gold',
                    borderRadius: '8px',
                    padding: '20px',
                    backgroundColor: 'white',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    width: '400px', // נוסיף רוחב קבוע
                }}
            >
                <h2 style={{ textAlign: 'right', fontSize: '24px' }}>תשלום</h2>
                <form onSubmit={handleSubmit}>
                    <label style={{ textAlign: 'right', display: 'block', margin: '10px 0' }}>
                        מספר כרטיס:
                        <br />
                        <input
                            type="text"
                            name="cardNumber"
                            value={paymentData.cardNumber}
                            onChange={handleInputChange}
                            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        />
                    </label>
                    <label style={{ textAlign: 'right', display: 'block', margin: '10px 0' }}>
                        תוקף (MM/YY):
                        <br />
                        <input
                            type="text"
                            name="expiryDate"
                            value={paymentData.expiryDate}
                            onChange={handleInputChange}
                            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        />
                    </label>
                    <label style={{ textAlign: 'right', display: 'block', margin: '10px 0' }}>
                        CVV:
                        <br />
                        <input
                            type="text"
                            name="cvv"
                            value={paymentData.cvv}
                            onChange={handleInputChange}
                            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        />
                    </label>
                    <button
                        type="submit"
                        style={{
                            backgroundColor: '#DAA520', // רקע צהוב כהה
                            color: 'white',
                            cursor: 'pointer',
                            width: '100%', // רוחב מלא
                            padding: '10px', // רווח בין הטקסט ללחצן
                            fontSize: '16px',
                            border: 'none',
                        }}
                    >
                        שלם
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Payment;
