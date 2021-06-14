import React from 'react'
import TeamCard from './components/TeamCard';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

function Aboutus() {
    return (
        <div>
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
    )
}

export default Aboutus
