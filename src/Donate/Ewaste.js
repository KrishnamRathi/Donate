import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';


function Ewaste() {
    const items = ['Laptop', 'Mobile', 'Calculator', 'Speakers', 'Air Conditioner']
    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                {items.map((item, index) => {
                    return (
                        <div key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h4>{item}</h4>
                            <Checkbox
                                defaultChecked
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                        </div>
                    )
                })}
                <Button style={{ maxWidth: '200px', alignSelf: 'flex-end' }} variant="contained" color="primary">
                        Proceed to Donate
                </Button>
            </div>
            <div style={{alignContent: 'center', margin: '5% 5% 0 5%'}}>
                <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h4>
            </div>
        </div>
    )
}

export default Ewaste;
