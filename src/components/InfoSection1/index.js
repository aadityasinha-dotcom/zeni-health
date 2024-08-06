import React from 'react';
import { ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper, ServicesCard, ServiceIcon,
ServicesP
} from './infoElements';
import img1 from '../../images/consult.png';
import img2 from '../../images/search-talent.jpeg';
import img3 from '../../images/screening.jpeg';
import img4 from '../../images/client.jpg';
import img5 from '../../images/success.png';

const Services1 = () => {
  return (
    <ServicesContainer id="services">
        <ServicesWrapper>
            <ServicesCard>
                <ServiceIcon src={img1}></ServiceIcon>
                <ServicesH1>Consultation</ServicesH1>
                <ServicesP>
                  We deeply evaluate your staffing needs.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServiceIcon src={img2}></ServiceIcon>
                <ServicesH1>Talent Search</ServicesH1>
                <ServicesP>
                  We accurately match candidates to your requirements.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServiceIcon src={img3}></ServiceIcon>
                <ServicesH1>Screening & Selection</ServicesH1>
                <ServicesP>
                  Through extensive assessments, we ensure a perfect match.
                </ServicesP>
            </ServicesCard>
        </ServicesWrapper>
        <ServicesWrapper>
          <ServicesCard>
                <ServiceIcon src={img4}></ServiceIcon>
                <ServicesH1>Client & Candidate Connection</ServicesH1>
                <ServicesP>
                  We facilitate the assessment of mutual compatibility.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServiceIcon src={img5}></ServiceIcon>
                <ServicesH1>Successful Placement</ServicesH1>
                <ServicesP>
                  We handle all the paperwork and onboarding, ensuring a seamless transition.
                </ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services1;
