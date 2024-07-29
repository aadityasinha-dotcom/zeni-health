import React from 'react';
import {SolutionsDiv, SolutionsContainer, SolutionsH1, SolutionsH2,
SolutionsWrapper, SolutionsRow, TextWrapper} from "./SolutionsElements.js"
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
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
      <TextWrapper>
        <SolutionsH1>Nursing Workforce Solutions:</SolutionsH1>
      </TextWrapper>
      <Box sx={{ width: '80%' }}>
        <Grid container rowSpacing={1} columns={20} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item>
              <Checkbox {...label} disabled checked />
              Nurse Practitioner
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Checkbox {...label} disabled checked />
              Nurse Educator
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Checkbox {...label} disabled checked />
              Mental Health Nursing
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Checkbox {...label} disabled checked />
              Registered Nurse (All Units)
            </Item>
          </Grid>
        </Grid>
      </Box>
    </SolutionsDiv>
  )
}

export default Solutions;
