import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './styles.css';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

function Home() {
    const classes = useStyles();
    const why = ["E-Recycle", "E-Waste Management", "Donations"]

    return (
        <div>
            <div className="what">
                <h1>What we do:</h1>
                <p style={{ textAlign: 'center', margin: '0 15%' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className="why_us" style={{ marginTop: 40 }}>
                <h1>Why us:</h1>
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    {why.map((item) => {
                        return (
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://d.wildapricot.net/images/default-album/how-to-get-donations-18-ways.png?MaxWidth=0&MaxHeight=300&Quality=High&Method=ResizeFitToAreaArguments"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {item}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" align="center">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                            standard dummy text ever since the 1500s.
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        )
                    })}
                </div>
            </div>
            <h1>Statistics: </h1>
            <div className="statistics" style={{display: 'flex', justifyContent: 'space-evenly', marginTop: 20}}>
                <div className="stats">
                    <h2 style={{fontSize: 20,textAlign: 'left', marginLeft: '5%'}}>Served</h2>
                    <h1 style={{fontSize: 40, textAlign: 'center', marginTop: '-2%'}}>100+</h1>
                </div>
                <div className="stats">
                    <h2 style={{fontSize: 20,textAlign: 'left', marginLeft: '5%'}}>Contributed</h2>
                    <h1 style={{fontSize: 40, textAlign: 'center', marginTop: '-2%'}}>100k+</h1>
                </div>
                <div className="stats">
                    <h2 style={{fontSize: 20,textAlign: 'left', marginLeft: '5%'}}>Donated</h2>
                    <h1 style={{fontSize: 40, textAlign: 'center', marginTop: '-2%'}}>270+</h1>
                </div>
            </div>
        </div>
    )
}

export default Home
