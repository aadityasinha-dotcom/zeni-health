import React from 'react';
import { ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper, ServicesCard,
ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH2>Talent Delivery Models</ServicesH2>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesH1>Direct/Permanent Hire:</ServicesH1>
                <ServicesP>
                  Our advanced algorithms and data-driven insights consistently deliver optimal candidate choices, significantly 
                  reducing the time and effort required in the hiring process while enhancing the overall recruitment outcomes.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesH1>Our Specialization:</ServicesH1>
                <ServicesP>
                  We excel at sourcing Nurses, LPNs/LVNs, Social Workers, Medical Assistants, and Certified Nursing Assistants. Our professionals adeptly accommodate a multitude of facilities, including acute care, long-term care, rehab, behavioral health centers, home care, urgent clinics, and more.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesH1>Genuine Care</ServicesH1>
                <ServicesP>As providers of IT services, we genuinely prioritize your business as if it were our own. We hold your
                  company’s growth and prosperity in high regard, and our unwavering commitment is to help you unlock its complete potential.
                </ServicesP>
            </ServicesCard>
        </ServicesWrapper>  
    </ServicesContainer>
  );
};

export default Services;
