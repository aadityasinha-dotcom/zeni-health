import React from 'react';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard,
ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesH1>Reduce expences</ServicesH1>
                <ServicesP>We help to reduce your fees
                    and increase your revenue. When you decide to engage our IT services, you embark on a transformative journey of growth and success.                 
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesH1>Innovative Ideas</ServicesH1>
                <ServicesP>
                  Driven by passion and fueled by a relentless pursuit of innovation,
                  our IT service team excels in areas such as data analytics, DevOps, cloud solutions, Java programming, and more.
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
