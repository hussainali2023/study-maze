import { Inter } from 'next/font/google'
import HelpVideoSection from '@/components/help-video-section/HelpVideoSection'
import HelpImageSection from '@/components/help-image-section/HelpImageSection'
import LookingCourseSection from '@/components/looking-course-section/LookingCourseSection'
import Banner from '@/components/banner/banner'
import ServiceBlog from '@/components/services/ServiceBlog'
import ApplySection from '@/components/applySection/applySection'
import MoreHelpSection from '@/components/more-help-section/MoreHelpSection'
const inter = Inter({ subsets: ['latin'] })
import Support from "@/components/Support/Support";
import Counselling from "@/components/Counselling/Counselling";
import ChoiceDestinationSection from '@/components/choice-destination-section/ChoiceDestinationSection'
import WhyChoose from '@/components/WhyChoose/WhyChoose'
import Country from '@/components/collegeSection/country'
import College from '@/components/collegeSection/college'
import BrowseByCategory from '@/components/BrowsebyCategory/BrowseByCategory'
import Meta from '@/components/head/meta'

export default function Home() {
 

  return (
    <>
      <Meta title="Home"></Meta>
      <div>
        <Banner></Banner>
        <BrowseByCategory></BrowseByCategory>
        <HelpVideoSection></HelpVideoSection>
        <HelpImageSection></HelpImageSection>
        <LookingCourseSection></LookingCourseSection>
        <MoreHelpSection></MoreHelpSection>
        <Support />
        <WhyChoose />
        <ServiceBlog></ServiceBlog>
        <ApplySection></ApplySection>
        <ChoiceDestinationSection></ChoiceDestinationSection>
        <Country></Country>
        <College></College>
      </div>
    </>
  );
}
