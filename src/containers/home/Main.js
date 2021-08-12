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
            'https://c1.wallpaperflare.com/preview/548/535/741/las-vegas-vegas-strip-vegas-strip.jpg',
    },
    {
        label: 'VENICE FREQUENTLY VISITED PLACES ',
        imgPath:
            'https://wallpaperaccess.com/full/201217.jpg',
    },
    {
        label: 'GREECE TWO TICKETS FOR THE PRICE OF ONE',
        imgPath:
            'https://wallpaperaccess.com/full/42008.jpg',
    },
    {
        label: 'SARY CHELEC ETHNIC PLACES',
        imgPath:
            'https://www.baibol.kg/img/attraction_gallery/152413521972567.jpg',
    },
    {
        label: 'ORION NEBULA EXCLUSIV',
        imgPath:
            'https://i.ytimg.com/vi/xCFg5udYbAg/maxresdefault.jpg',
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "max",
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
        height: 530,
        maxWidth: "max",
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
