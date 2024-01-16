// 
import React, { useState, useEffect } from 'react';
import CakeCard from './CakeCard';
// import './StylePerlinim.css';
import pageImage from '../images/About.png'; // תחליף עם נתיב התמונה שלך
import sweet from '../images/sweet.png';
import Personal_customization from '../images/Personal customization.png';
import perlinim from '../images/perlinim.png';
import AddToCard from './AddToCart';
import { Route, useNavigate, useParams } from 'react-router-dom';
import { getAllPetipurByCategoryId } from '../apiCalls/petipurcalls';
import { log } from 'console';
import { Grid, Card, Typography, CardMedia } from '@mui/material';

const Perlinim = () => {
    const [images, setImages] = useState<any>([]);

    const{categoryId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        let image:any=[];
        getAllPetipurByCategoryId(categoryId).then(res=>{
          res.data.map((c:any)=>{ 
                      
               image.push({name:c.name,path:c.imageUrl,id:c._id,price:c.price})
            })       
            setImages(image);

        }
            )
      }, []);

      const addToCart = (petipur:any) => {
        navigate(`/AddToCart`, { state: { petipur } });
        
    };

    return (
        <Grid container spacing={8}>

            {images.map((image:any, index:any) => (

                <Grid item xs={12} sm={4} key={index} onClick={() => addToCart(image)}>
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
};
export default Perlinim;

