import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import productImage from '../images/About.png'; // Import the product image
import { Link } from 'react-router-dom';

const AddToCard = () => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);
        setQuantity(value);
    };

    const handleAddToCart = () => {
        // ניתן להוסיף פעולה כלשהי כאן להוספת המוצר לסל
        console.log(`Added to cart: Quantity - ${quantity}`);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '200px' }}>
            <Card style={{ display: 'inline-block', marginTop: '20px', textAlign: 'left' }}>
                <CardContent>
                    <div style={{ float: 'right', marginLeft: '20px' }}>
                        <img
                            src={productImage}
                            alt="Product"
                            style={{ width: '100%', height: 'auto', maxWidth: '300px' }}
                        />
                    </div>
                    <div>
                        <Typography variant="h5" component="div">
                            Product Name
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Product Description
                        </Typography>
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
         

        </div>
    );
};

export default AddToCard;

