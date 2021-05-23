import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import TeamCard from './TeamCard'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

function Aboutus() {
    const classes = useStyles();
    const why = ["E-Recycle", "E-Waste Management", "Donations", "Contributions"]

    return (
        <div>
            <div className="what">
                <h1>What we do:</h1>
                <p style={{textAlign: 'center', margin: '0 15%'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className="why_us" style={{marginTop: 40}}>
                <h1>Why us:</h1>
                <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
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
                <div className="team" style={{marginTop: 40}}>
                    <h1>Our Team:</h1>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <ArrowLeftIcon style={{fontSize: 60}}/>
                        <div style={{display: 'flex'}}>
                            <TeamCard/>
                            <TeamCard/>
                            <TeamCard/>
                            <TeamCard/>
                            <TeamCard/>
                        </div>
                        <ArrowRightIcon style={{fontSize: 60}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutus
