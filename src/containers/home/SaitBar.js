import { FormControl, FormLabel, Grid, makeStyles, Radio, RadioGroup, Paper, FormControlLabel, Button } from '@material-ui/core';
import React, { useContext, } from 'react';
import { useHistory } from 'react-router-dom';
import { clientContext } from '../../context/ClientContext';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary
    }
}))

const SaitBar = () => {

    const { getProducts, filterProducts } = useContext(clientContext)
    const classes = useStyles()
    const history = useHistory()

    function fetchProducts(params, value) {
        let search = new URLSearchParams(history.location.search)
        search.set(params, value)
        let url = `${history.location.pathname}?${search.toString()}`
        history.push(url)
        getProducts(history)

    }


    function reset() {
        history.push('/')
        getProducts(history)
    }


    function filterByPrice(value) {
        filterProducts(value)
    }


    return (
        <Grid item md={3}>  
            <Paper className={classes.paper} style={{ height: 400, backgroundColor: "#e1f5fe", marginTop: 20 }}>
                <Grid>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" style={{ paddingTop: 50, marginLeft:20, marginBottom:8}}>SORT</FormLabel>
                        <RadioGroup onChange={(e) => fetchProducts('category', e.target.value)} aria-label="memory" name="memory1">
                            <FormControlLabel value="TURKEY" control={<Radio />} label="TURKEY"></FormControlLabel>
                            <FormControlLabel value="GREECE" control={<Radio />} label="GREECE"></FormControlLabel>
                            <FormControlLabel value='LAS VEGAS' control={<Radio />} label="LAS VEGAS"></FormControlLabel>
                            <FormControlLabel value='AFINA' control={<Radio />} label="AFINA"></FormControlLabel>
                            <FormControlLabel value='BRASIL' control={<Radio />} label="BRASIL"></FormControlLabel>
                            <FormControlLabel value='SARY CHELEK' control={<Radio />} label="SARY CHELEK"></FormControlLabel>
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Button onClick={reset} variant="contained" color="secondary">Reset</Button>
            </Paper>
        </Grid>

    );
};

export default SaitBar;







