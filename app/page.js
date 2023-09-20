import BannerVideo from '@/components/BannerVideo'
import BestSeller from '@/components/BestSeller'
import Brands from '@/components/Brands'
import CustomFilter from '@/components/CustomFilter'
import ExploreCollection from '@/components/ExploreCollection'
import FeatureTab from '@/components/FeatureTab'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Message from '@/components/Message'
import Navbar from '@/components/Navbar'
import ShopFor from '@/components/ShopFor'
import Image from 'next/image'

export default function Home() {
  return (
<mian>

 <Message />
 <ShopFor />
 <BestSeller />
 <ExploreCollection />
 <CustomFilter />
 <FeatureTab />
 <BannerVideo />
 <Brands />
 <Navbar />
 <Footer />
</mian>
  )
}
