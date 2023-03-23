import { Box } from '@mui/material'
import React from 'react'

function Sidebar() {
  return (
    <Box flex={2} bgcolor='green' p={2} 
    sx={{display:{xs:'none',sm:'block'}}}>
      Sidebar
    </Box>
  )
}

export default Sidebar
