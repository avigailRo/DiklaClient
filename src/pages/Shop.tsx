import pageImage from '../images/perlinim.png';
import sweet from '../images/sweet.png';
import Personal_customization from '../images/Personal customization.png';

import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { CardActions, CardContent, Link } from '@mui/material';
import { getAllCatgories } from '../apiCalls/categoryCalls';
import { useNavigate } from 'react-router-dom';



const Shop = () => {
    const [images, setImages] = useState<any>([]);

    useEffect(() => {
        let image:any=[];
        getAllCatgories().then(res=>{
          res.data.map((c:any)=>{           
               image.push({name:c.title,path:c.imageUrl,id:c._id})
            })       
            setImages(image);

        }
            )
      }, []);
      const navigate = useNavigate();

      const perlinim = (categoryId:string) => {
          navigate(`/Perlinim/${categoryId}`);
          
      };
    return (

        <Grid container spacing={8}>

            {images.map((image:any, index:any) => (

                <Grid item xs={12} sm={4} key={index} onClick={() => perlinim(image.id)}>
                    <Card className="Card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography variant="body2" style={{ color: 'blue', margin: '10px 0' }}>
                            <a >{image.name} </a>                        </Typography>
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