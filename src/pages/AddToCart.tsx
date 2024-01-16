import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import productImage from '../images/About.png'; // Import the product image
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import { log } from 'util';
import { addOrderItem } from '../apiCalls/orderItemCalls';
import { useSnackbar } from 'notistack';
import { SnackBar } from './globalCss.styles';
import { Alert, AlertProps } from '@mui/material';

const AddToCard = () => {
    const [quantity, setQuantity] = useState(1);
    const location = useLocation();  

  const { enqueueSnackbar } = useSnackbar();

    const petipur = location.state?.petipur; // גישה למידע שנשלח עם ה-`state`
    const userId: string = useSelector<RootState, any>((state: any) => state.userIdReducer).userId;
    
    const [snackbar, setSnackbar] = React.useState<Pick<
    AlertProps,
    'children' | 'severity'
> | null>(null);
const handleCloseSnackbar = () => setSnackbar(null);    
const navigate = useNavigate();

    // נעשה משהו עם ה-`petipur` כאן, לדוג', נדפיס אותו

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);
        setQuantity(value);
    };

    const handleAddToCart = async() => {
    const orderitem={user:userId,petipur:petipur.id,count:quantity} 
    try {
        await addOrderItem(orderitem);
       setSnackbar({ children: ' מוצר נוסף לעגלה בהצלחה', severity: 'success' });
        navigate('/Shop');
      } catch (error:any) {
        if(error.response?.status==404){
        setSnackbar({ children: "יש צורך בכניסה למערכת: " + error.message, severity: 'error' });
        navigate("/Login")

    }
else
        setSnackbar({ children: "ארעה שגיאה בתהליך ההוספה לעגלה: " + error.message, severity: 'error' });
      }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '200px' }}>
            <Card style={{ display: 'inline-block', marginTop: '20px', textAlign: 'left' }}>
                <CardContent>
                    <div style={{ float: 'right', marginLeft: '20px' }}>
                        <img
                            src={petipur.path}
                            alt="Product"
                            style={{ width: '100%', height: 'auto', maxWidth: '300px' }}
                        />
                    </div>
                    <div>
                        <Typography variant="h5" component="div">
                            {petipur.name}                        </Typography>
                            <Typography variant="h5" component="div">
                            ש"ח          {petipur.price}                   </Typography>   
                    </div>
                </CardContent>
                <CardActions style={{ justifyContent: 'flex-end' }}>
                    <TextField
                        type="number"
                        label="Quantity"
                        value={quantity}
                        onChange={handleQuantityChange}
                        InputProps={{ inputProps: { min: 1 } }}
                    />
                    <Button variant="contained" color="primary" onClick={handleAddToCart}>
                        Add to Cart
                    </Button>

                </CardActions>
            </Card>
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

export default AddToCard;

