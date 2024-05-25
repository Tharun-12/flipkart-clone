
import React from 'react'

import { Box, Typography, styled } from '@mui/material'

import {navData} from "../../constants/data"

import ExpandIcon from '@mui/icons-material/ExpandMoreRounded'


const Component = styled(Box)`
    display: flex;
    margin: 55px 130px 0 130px;
    justify-content: space-between;
`

const Container = styled(Box)`
    padding: 12px 8px;
    text-align: center;
`

const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    font-family: "inherit";
`


const Navbar = () => {
  return (
    <Component>
      {
        navData.map(data => (

            <Container>
                <img src = {data.url} alt = "nav" style ={{ width: 64 }} />
                <div style = {{display : "flex" }}>  
                  <Text>{data.text}</Text>
                  <ExpandIcon />
                </div>
            </Container>

        ))
      }

    </Component>
  )
}

export default Navbar
