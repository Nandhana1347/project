import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <Typography variant="h5" gutterBottom>Sign-Up Form</Typography>
        <TextField id="outlined-basic" label="Username" variant="outlined" color="success" focused /><br /><br />
        <TextField id="outlined-basic" label="Email" variant="outlined" color="success" focused/><br /><br />
        <TextField id="outlined-basic" label="Password" variant="outlined" color="success" focused/><br /><br />
        <Button variant="contained">Submit</Button>
    </div>
  )
}

export default Navbar