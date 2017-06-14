import { createContainer } from 'meteor/react-meteor-data';
import Footer from '../components/footer';

const FooterContainer = createContainer(() => {
  const currentDate = new Date();
  return {
    currentYear: currentDate.getFullYear(),
  };
}, Footer);

export default FooterContainer;
