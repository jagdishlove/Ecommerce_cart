import { Button, TextField } from '@material-ui/core'
import React from 'react'

function CartIncreaser({ setCartCount }) {
    const [value, setValue] = React.useState(0);
    return (
        <div style={{ marginTop: '1em', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button onClick={() => setValue(value + 1)} style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px', borderRadius: '10em' }} variant="outlined">
                +
            </Button>
            <TextField
                inputProps={{ min: 0, style: { width: '2em', height: '.1em', textAlign: 'center' } }}
                variant='outlined'
                type="tel"
                value={value}
                onChange={setCartCount(value)}
            />
            <Button onClick={() => setValue(value - 1)} style={{ borderRadius: '10em', maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px' }} variant="outlined">
                -
            </Button>
        </div>

    )
}

export default CartIncreaser