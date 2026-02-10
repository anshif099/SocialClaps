import EmailSignup from "@/components/EmailSignup";
import Header from "@/components/Header";
import HowItWorks from "@/components/HowItWorks";
import PostPromotionFAQ from "@/components/PostPromotionFAQ";
import PricingPlans from "@/components/PricingPlans";
import RecentResults from "@/components/RecentResults";
import ResultsCarousel from "@/components/ResultsCarousel";
import SocialProofHero from "@/components/SocialProofHero";
import WhyChooseUs from "@/components/WhyChooseUs";
import PromoVideo from "@/components/PromoVideo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SocialProofHero />
      <WhyChooseUs />
      <RecentResults />
      <ResultsCarousel />
      <HowItWorks />
      <PricingPlans />
      <PromoVideo />
      <PostPromotionFAQ />
      <EmailSignup />
    </div>
  );
};

export default Index;
