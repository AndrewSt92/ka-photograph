import { banner, bannerMobile } from '@/assets';
import { BannerWrapper } from '@/components';

import AnimatedGridOverlay from './AnimatedGridOverlay';
import TextContent from './TextContent';

const Banner = () => {
  return (
    <BannerWrapper
      overlayClassName="block bg-primary/20 backdrop-blur-md xl:hidden"
      showGradient={false}
      imageSrc={banner}
      imageSrcMobile={bannerMobile}
      imageAlt="banner"
    >
      <AnimatedGridOverlay />
      <TextContent />
    </BannerWrapper>
  );
};

export default Banner;
