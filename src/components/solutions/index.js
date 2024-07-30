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
  color: 'black',
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
        <SolutionsH2>
          We address the talent shortage in the nursing industry by offering services in teaching hospitals, skilled nursing facilities, clinical health, and travel nursing. Our services include long-term, temp-to-hire, direct-hire positions, and travel nursing:
        </SolutionsH2>
      </TextWrapper>
      <SolutionsWrapper>
        <Box sx={{ width: '100%' }}>
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
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Licensed Practical/Vocational Nurse
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Certified Nursing Assistants
                </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Medical/Certified Medical Assistant
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Phlebotomist
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Nurse Anesthetist
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Certified Nurse Midwife
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Oncology Nursing
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Pediatric Nursing
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Public health Nursing
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Gerontological Nursing
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Cardiac Nursing
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Travel Nursing
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Nursing Management
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Clinical Nurse Specialist
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Nurse Midwife
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Orthopedic Nursing
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Occupational Health Nursing
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Critical Care Nursing
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Midwife
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Critical Care Nurse
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Family Nurse Practitioner
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Medical-Surgical Nursing
              </Item>
            </Grid>
          </Grid>
        </Box>
      </SolutionsWrapper>
      <TextWrapper>
        <SolutionsH1>Allied Health Workforce Solutions:</SolutionsH1>
        <SolutionsH2>
          We are aware of the specific need for personnel with allied healthcare experience. Our network includes:
        </SolutionsH2>
      </TextWrapper>
      <SolutionsWrapper>
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={1} columns={20} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Therapy Professionals
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Radiographer
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Cardiovascular Technologist
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Imaging Professionals
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Therapist
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Diagnostic Medical Sonographer
                </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Scientific and laboratory Professionals
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Cytotechnologist
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Emergency Medical Technician
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Physiotherapist
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Dental Hygienist
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Lactation Consultant
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Occupational Therapist
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Athletic Trainer
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Nuclear Medicine Technologist
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Dietitian
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Dental Assistant
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Speech-Language Pathologist
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Audiologist
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Anesthesiologist Assistant
              </Item>
            </Grid>
          </Grid>
        </Box>
      </SolutionsWrapper>
      <TextWrapper>
        <SolutionsH1>Healthcare IT Workforce Solutions:</SolutionsH1>
        <SolutionsH2>
          We connect professionals with healthcare IT opportunities. We excel in administrative support, customer service, and revenue cycle specialties within various healthcare settings.
        </SolutionsH2>
      </TextWrapper>
      <SolutionsWrapper>
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={1} columns={20} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Therapy Professionals
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Clinical Systems Analyst
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Healthcare IT Consultant
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Medical Coder
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Healthcare IT Project Manager
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Healthcare Software Developer
                </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Medical Biller
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                EHR Implementation Specialist
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Healthcare Systems Administrator
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Application Analyst
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Healthcare Data Analyst
              </Item>
            </Grid>
          </Grid>
        </Box>
      </SolutionsWrapper>
      <TextWrapper>
        <SolutionsH1>Workforce Solutions and Staffing in Niche Categories</SolutionsH1>
        <SolutionsH2>
          Clovity provides essential solutions, placing proficient talents across various roles and sectors to ensure high-quality medical services.
        </SolutionsH2>
      </TextWrapper>
      <SolutionsWrapper>
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={1} columns={20} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Medical Receptionist
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                HR Professionals
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Accountants
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Office Managers
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Data Entry Operators
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Payroll Clerks
                </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Clinical Nurse Manager
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Customer Service Support
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Surgery Schedulers
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Practice Managers
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Data Scientist
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Executive Assistants
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Drug Safety Specialist
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Finance Managers
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Checkbox {...label} disabled checked />
                Medical Affairs
              </Item>
            </Grid>
          </Grid>
        </Box>
      </SolutionsWrapper>
    </SolutionsDiv>
  )
}

export default Solutions;
