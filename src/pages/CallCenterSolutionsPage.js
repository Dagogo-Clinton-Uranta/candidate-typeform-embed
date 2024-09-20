
import Header from '../page-components/componentsCallCenterSolutions/header/Header'


import Experience from '../page-components/componentsCallCenterSolutions/experience/Experience'


import About from '../page-components/componentsCallCenterSolutions/about/About'
import CallToAction from '../page-components/componentsCallCenterSolutions/calltoaction/CallToAction'
/*import RangeTable from '../componentsCallCenterSolutions/rangeTable/RangeTable'*/
import Choice from '../page-components/componentsCallCenterSolutions/choice/Choice'
/*import Solutions from '../componentsCallCenterSolutions/solutions/Solutions'*/
import Testimonials from '../page-components/componentsCallCenterSolutions/testimonials/Testimonials'


/*import Projects from '../componentsCallCenterSolutions/projects/Projects'*/
import Faq from '../page-components/componentsCallCenterSolutions/Faq/Faq'
import Footer from 'src/general-components/footer/Footer'
import Expectations from 'src/page-components/componentsCallCenterSolutions/expectations/Expectations'
import ClientTestimonials from 'src/page-components/componentsCallCenterSolutions/client-testimonials/ClientTestimonials'
import Benefits from '../page-components/componentsCallCenterSolutions/benefits/Benefits'
import FeaturesAlternate from 'src/page-components/componentsCallCenterSolutions/featuresAlternate/FeaturesAlternate'
//import Features from 'src/page-components/componentsFaxingSolutions/features/Features'
import ShortDescTwo from 'src/page-components/componentsCallCenterSolutions/shortdesctwo/ShortDescTwo'
import ShortDescOne from 'src/page-components/componentsCallCenterSolutions/shortdescone/ShortDescOne'
import ExpectationsLong from 'src/page-components/componentsCallCenterSolutions/expectationsLong/ExpectationsLong'
import Callingcard from 'src/page-components/componentsCallCenterSolutions/callingcard/Callingcard'
import CallingcardTwo from 'src/page-components/componentsCallCenterSolutions/callingcardtwo/Callingcardtwo'
import { useEffect } from 'react'


const CallCenterSolutionsPage = () => {
 
  useEffect(() => {
    // Load the Typeform embed script dynamically when the component mounts
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
   
     <div style={{/*margin:"0 auto"*/display:"flex",justifyContent:"center",alignItems:"center"}}>
      <div className={'white-block'}></div>
      <div style={{position:"relative",top:"2.5rem",width:"100%",scale:"1"}} data-tf-live="01J881YHNZ46YSH2GX23HJQJGD"></div>
  
    </div>
  );
};


export default CallCenterSolutionsPage