import { useParams } from 'react-router-dom';

import { ShowcasePageLayout } from '@/components';
import { serviceDetails } from '@/config';

import { ServiceBannerContent } from './components';

const ServiceDetails = () => {
  const { type } = useParams();
  const service = serviceDetails[type as keyof typeof serviceDetails];
  const { description, name, value, bannerPhoto, bannerPhotoMobile, details } = service;

  return (
    <ShowcasePageLayout
      category={type as string}
      descriptionProps={{ description, title: `Що таке ${name}?` }}
      bannerProps={{ bannerPhoto, bannerPhotoMobile, imageClassName: 'sm:object-[50%_0%]' }}
      motionKey={type}
    >
      {/* Banner text */}
      <ServiceBannerContent name={name} details={details} value={value} />
    </ShowcasePageLayout>
  );
};

export default ServiceDetails;
