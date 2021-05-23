import React from 'react'
import Avatar from '@material-ui/core/Avatar';

function TeamCard() {
    return (
        <div style={{ width: '300px', display: 'flex', flexDirection: 'column', margin: '0 2%' }}>
            <Avatar alt="Remy Sharp"
                style={{ height: 200, width: 200, alignSelf: 'center' }}
                src="https://i1.wp.com/www.baytekent.com/wp-content/uploads/2016/12/facebook-default-no-profile-pic1.jpg?resize=300%2C300&ssl=1" />
            <p style={{ textAlign: "center" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s.
            </p>
        </div>
    )
}

export default TeamCard
