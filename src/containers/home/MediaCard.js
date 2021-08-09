import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { clientContext } from '../../context/ClientContext';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
        backgroundSize: 'contain'
    },
});

export default function MediaCard({ product }) {
    const classes = useStyles();
    const { addAndDeleteProductInCard, checkProductInCart } = useContext(clientContext)



    return (
        <Card className={classes.root}>
            <Link to={`/product-detail/${product.id}`}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={product.images}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {product.category}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {product.description}
                        </Typography>

                    </CardContent>
                </CardActionArea>
            </Link>
            <CardActions>
                <Typography gutterBottom component="h4">
                    {product.price} $
                </Typography>
                <Button variant="contained" color="primary">
                    BUY
                </Button>
                <IconButton onClick={() => addAndDeleteProductInCard(product)} variant="contained" color={checkProductInCart(product.id) ? "secondary" : "primary"}>
                    <ShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    );
}
