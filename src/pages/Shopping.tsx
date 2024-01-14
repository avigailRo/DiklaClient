import React from 'react';
import perlinim from '../images/perlinim.png';
import { useNavigate } from 'react-router-dom';




const Shopping = () => {
    const navigate = useNavigate();
    const items = [
        { id: 1, name: 'פריט 1', price: 10 },
        { id: 2, name: 'פריט 2', price: 20 },
        //...
    ];
    const placeOrder = () => {
        // הוספת לוגיקה לביצוע ההזמנה כמו שליחת הפרטים לשרת
        navigate('/Payment');

        console.log('Order placed!');
    };
    return (
        <div className="shopping-cart" style={{ textAlign: 'right', padding: '20px', direction: 'rtl' }}>
            <h1 style={{ borderBottom: '2px solid #333', paddingBottom: '10px', textAlign: 'right' }}>סל קניות</h1>
            <p style={{ fontSize: '16px', color: '#555', textAlign: 'right' }}>
                {/* הסל שלך מכיל {itemCount} פריטים ומגיע לסך של {totalAmount}. */}
            </p>
            <div className="cart-items" style={{ textAlign: 'right' }}>
                {items.map((item) => (
                    <div key={item.id} className="cart-item" style={{ display: 'flex', marginBottom: '20px', border: '1px solid #ddd', borderRadius: '8px', padding: '10px' }}>
                        <img src={perlinim} alt={item.name} style={{ width: '150px', marginRight: '20px' }} />
                        <div className="item-details" style={{ textAlign: 'right' }}>
                            <h3 style={{ margin: '0', fontSize: '24px' }}>{item.name}</h3>
                            {/* <p>{item.description}</p> */}
                            <p style={{ margin: '0', color: '#888', fontSize: '18px' }}>מחיר: {item.price} ש"ח</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="checkout-button" style={{ backgroundColor: '#DAA520', color: 'white', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', border: 'none' }} onClick={placeOrder}>
                לביצוע ההזמנה
            </button>
        </div>
    );
};

export default Shopping;
