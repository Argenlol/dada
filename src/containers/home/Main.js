import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const tutorialSteps = [
    {
        label: 'LAST MINUTE TOURS LAS VEGAS',
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Venice FREQUENTLY VISITED PLACES ',
        imgPath:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAJdF0ahtBmTRbx5UkgGHtEhVvFmEIeOfZOA&usqp=CAU',
    },
    {
        label: 'Greece TWO TICKETS FOR THE PRICE OF ONE',
        imgPath:
            'https://boomersdaily.files.wordpress.com/2021/01/aerial-travel-video-greece-mediterranean-january-8-2021.jpg?w=672&h=372&crop=1',
    },
    {
        label: 'Sary Chelek ETHNIC PLACES',
        imgPath:
            'https://c4.wallpaperflare.com/wallpaper/848/9/162/pool-5k-tourism-travel-wallpaper-preview.jpg',
    },
    {
        label: 'Orion nebula EXCLUSIV',
        imgPath:
            'https://i.ytimg.com/vi/xCFg5udYbAg/maxresdefault.jpg',
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: 350,
        maxWidth: 800,
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
    img: {
        height: 255,
        maxWidth: 800,
        overflow: 'hidden',
        display: 'block',
        width: '100%',
    },
}));

export default function TextMobileStepper() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div className={classes.root}>
            <Paper square elevation={0} className={classes.header}>
                <Typography>{tutorialSteps[activeStep].label}</Typography>
            </Paper>
            <img
                className={classes.img}
                src={tutorialSteps[activeStep].imgPath}
                alt={tutorialSteps[activeStep].label}
            />
            <MobileStepper
                steps={maxSteps}
                position="static"
                variant="text"
                activeStep={activeStep}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        Next
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        Back
                    </Button>
                }
            />
        </div>
    );
}
