import React from 'react';
import {SolutionsDiv, SolutionsContainer, SolutionsH1, SolutionsH2,
SolutionsWrapper, SolutionsRow, TextWrapper} from "./SolutionsElements.js"
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Solutions = () => {

  return (
    <SolutionsDiv>
      {/* <SolutionsContainer id="solutions"> */}
      {/*   <SolutionsWrapper> */}
      {/*     <SolutionsRow imgStart={false}> */}
      {/*       <TextWrapper> */}
      {/*         <SolutionsH1>Nursing Workforce Solutions:</SolutionsH1> */}
      {/*         <SolutionsH2>We address the talent shortage in the nursing industry by offering services in teaching hospitals, skilled nursing facilities, clinical health, and travel nursing. Our services include long-term, temp-to-hire, direct-hire positions, and travel nursing:</SolutionsH2> */}
      {/*       </TextWrapper> */}
      {/*     </SolutionsRow> */}
      {/*     <SolutionsRow imgStart={false}> */}
      {/*       <TextWrapper> */}
      {/*         <SolutionsH1>Hello</SolutionsH1> */}
      {/*       </TextWrapper> */}
      {/*     </SolutionsRow> */}
      {/*   </SolutionsWrapper> */}
      {/* </SolutionsContainer> */}
      <Box sx={{ width: '80%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item>1</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>2</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>3</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>4</Item>
          </Grid>
        </Grid>
      </Box>
    </SolutionsDiv>
  )
}

export default Solutions;
