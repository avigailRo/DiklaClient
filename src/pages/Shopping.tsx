import React, { useEffect, useState } from 'react';
import perlinim from '../images/perlinim.png';
import { useNavigate } from 'react-router-dom';
import { calculatePaymentAmount, getOrder } from '../apiCalls/orderCalls';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteOrderItem } from '../apiCalls/orderItemCalls';
import { Alert, AlertProps, TextField } from '@mui/material';
import { SnackBar } from './globalCss.styles';

const Shopping = () => {
    const userId: string = useSelector<RootState, any>((state: any) => state.userIdReducer).userId;

    console.log(userId, "lllllllllllllllllll");
    const navigate = useNavigate();
    const [items, setItems] = useState<any>([]);
    const [order, setOrder] = useState<any>();
    const [quantity, setQuantity] = useState(1);
    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);
        setQuantity(value);
    };
    const a = (item: any) => {
        // const value = parseInt(event.target.value, 10);
        // setQuantity(value);
    };
    const [deletebool, setDeletebool] = useState<boolean>(false);

    const [totalAmount, setTotalAmount] = useState<number>(0);
    const [snackbar, setSnackbar] = React.useState<Pick<
        AlertProps,
        'children' | 'severity'
    > | null>(null);
    const handleCloseSnackbar = () => setSnackbar(null);

    const handleRemoveItem = async (itemId: string) => {
        try {
            await deleteOrderItem(userId, itemId);
            setSnackbar({ children: ' מוצר נמחק לעגלה בהצלחה', severity: 'success' });
            setDeletebool(!deletebool)
        }
        catch (error: any) {
            setSnackbar({ children: "ארעה שגיאה בתהליך המחיקה מהעגלה: " + error.message, severity: 'error' });
        }
    };

    const placeOrder = () => {
        navigate('/Payment', { state: { order } });

    };
    useEffect(() => {
        let image: any = [];
        getOrder(userId).then((res: any) => {
            console.log(res.data);

            res.data[0].orderItem.map((c: any) => {
                image.push({ name: c.petipur.name, path: c.petipur.imageUrl, id: c._id, price: c.petipur.price, count: c.count })
            })
            setItems(image);
            console.log(userId, res.data[0]._id, "ggggggggggggggggggggggggg");

            calculatePaymentAmount(userId, res.data[0]._id).then(res => {
                setTotalAmount(res.data.totalPaymentAmount)
            })
        })
    }, [deletebool]);
    return (
        <div className="shopping-cart" style={{ textAlign: 'right', padding: '20px', direction: 'rtl' }}>
            <h1 style={{ borderBottom: '2px solid #333', paddingBottom: '10px', textAlign: 'right' }}>סל קניות</h1>
            <p style={{ fontSize: '16px', color: '#555', textAlign: 'right' }}>
                {/* הסל שלך מכיל {itemCount} פריטים ומגיע לסך של {totalAmount}. */}
            </p>
            <div className="cart-items" style={{ textAlign: 'right' }}>
                {items.map((item: any) => (
                    <div key={item.id} className="cart-item" style={{ display: 'flex', marginBottom: '20px', border: '1px solid #ddd', borderRadius: '8px', padding: '10px' }}>
                        <img src={item.path} alt={item.name} style={{ width: '150px', marginRight: '20px' }} />
                        <div className="item-details" style={{ textAlign: 'right' }}>
                            <h3 style={{ margin: '0', fontSize: '24px' }}>{item.name}</h3>
                            <h3 style={{ margin: '5px', fontSize: '24px' }}>{item.count}</h3>

                            {/* <p>{item.description}</p> */}
                            <p style={{ margin: '0', color: '#888', fontSize: '18px' }}>מחיר: {item.price} ש"ח</p>
                            <button onClick={() => handleRemoveItem(item.id)}><DeleteIcon /></button>
                            <TextField
                                type="number"
                                label="Quantity"
                                value={item.count}
                                onChange={handleQuantityChange}

                                InputProps={{ inputProps: { min: 1 } }}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <h1>שח לתשלום{totalAmount}</h1><br></br>
            <button className="checkout-button" style={{ backgroundColor: '#DAA520', color: 'white', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', border: 'none' }} onClick={placeOrder}>
                לביצוע ההזמנה
            </button>

            {!!snackbar && (
                <SnackBar
                    open
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    onClose={handleCloseSnackbar}
                    autoHideDuration={6000}
                >
                    <Alert {...snackbar} onClose={handleCloseSnackbar} />
                </SnackBar>)}
        </div>
    );
};

export default Shopping;

