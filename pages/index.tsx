
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Packages from '@/components/Packages';
import Calculator from '@/components/Calculator';
import BookingForm from '@/components/BookingForm';
import Rewards from '@/components/Rewards';
import Assistant from '@/components/Assistant';
import Footer from '@/components/Footer';
import MotionSection from '@/components/MotionSection';

export default function Home(){
  return (
    <div>
      <Header/>
      <Hero/>
      <MotionSection><Packages/></MotionSection>
      <MotionSection><Calculator/></MotionSection>
      <MotionSection><BookingForm/></MotionSection>
      <MotionSection><Rewards/></MotionSection>
      <MotionSection><Assistant/></MotionSection>
      <Footer/>
    </div>
  );
}
