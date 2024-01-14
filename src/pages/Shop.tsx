import pageImage from '../images/perlinim.png';
import sweet from '../images/sweet.png';
import Personal_customization from '../images/Personal customization.png';

import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { CardActions, CardContent, Link } from '@mui/material';

const images = [
  { name: 'Sweet', path: sweet },
    { name: 'Perlinim', path: pageImage },
  { name: 'Personal_Customization', path: Personal_customization },
];

const Shop = () => {


    return (

        <Grid container spacing={8}>

            {images.map((image, index) => (

                <Grid item xs={12} sm={4} key={index}>
                    <Card className="Card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography variant="body2" style={{ color: 'blue', margin: '10px 0' }}>
                            <a href={`/${image.name}`}>{image.name} </a>                        </Typography>
                        <CardMedia
                            component="img"
                            alt={`תיאור התמונה ${index + 1}`}
                            height="400"
                            image={image.path}
                        />
                    </Card>
                </Grid>



            ))}
        </Grid>
    );
}
export default Shop;