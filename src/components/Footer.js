import React from 'react'
import { Button } from '@material-ui/core'

function Footer() {
    return (
        <div style={{ backgroundColor: 'lightgray', bottom: 0, width: '100%', height: '100%'}}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 2%' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h2>Contact</h2>
                    <div style={{fontWeight: 'bold'}}>Email: </div>donateus@gmail.com
                    <div style={{fontWeight: 'bold'}}>Phone: </div>+1 9876543210
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h2>Links</h2>
                    <a href="/about">about us</a>
                    <a href="/donate">donate us</a>
                    <a href="contact">contact us</a>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Button variant="contained" color="secondary" style={{ borderRadous: 10 }}>
                        <h2>Donate us</h2>
                    </Button>
                </div>
            </div>
            <div style={{textAlign: 'center', marginTop: 10, fontWeight: 'bold'}}>Copyright 2021 © All rights reserved</div>
        </div>
    )
}

export default Footer
