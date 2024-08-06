import React from 'react';
import { ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper, ServicesCard, ServiceIcon,
ServicesP
} from './infoElements';
import img1 from '../../images/industry-leading.jpeg';
import img2 from '../../images/hiring-diversity.png';
import img3 from '../../images/comprehensive-health-care.jpg';
import img4 from '../../images/safety.png';
import img5 from '../../images/collaboration.png';

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH2>How it Works</ServicesH2>
        <ServicesWrapper>
            <ServicesCard>
                <ServiceIcon src={img1}></ServiceIcon>
                <ServicesH1>Industry-Leading Expertise</ServicesH1>
                <ServicesP>
                  Our recruitment specialists hold firsthand experience in healthcare, enabling them to overcome complex healthcare staffing challenges.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServiceIcon src={img2}></ServiceIcon>
                <ServicesH1>Diverse Candidate Database</ServicesH1>
                <ServicesP>
                  Our extensive candidate database is continually updated, letting us meet your staffing needs while adapting to changing resource requirements.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServiceIcon src={img3}></ServiceIcon>
                <ServicesH1>Comprehensive Healthcare Workforce Solutions</ServicesH1>
                <ServicesP>
                  We cover a broad spectrum of healthcare roles, aiming to elevate healthcare organizational performance.
                </ServicesP>
            </ServicesCard>
        </ServicesWrapper>
        <ServicesWrapper>
          <ServicesCard>
                <ServiceIcon src={img4}></ServiceIcon>
                <ServicesH1>Patient Care Quality and Safety</ServicesH1>
                <ServicesP>
                  Quality care and safety stand as our priority. Concerns about the quality and safety of patient care by our staff can be reported to The Joint Commission’s Office.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServiceIcon src={img5}></ServiceIcon>
                <ServicesH1>Strategic Collaborations</ServicesH1>
                <ServicesP>
                  We proudly partner with major U.S. healthcare organizations, contributing our premier recruitment services to renowned institutions across the country.
                </ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
