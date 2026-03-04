import EducationHeroSection from '@/components/EducationHeroSection';
import AcademicTimelineSection from '@/components/AcademicTimelineSection';
import InstitutionShowcaseSection from '@/components/InstitutionShowcaseSection';
import CertificationsGallerySection from '@/components/CertificationsGallerySection';
import AcademicDocumentsSection from '@/components/AcademicDocumentsSection';

export default function Education() {
  return (
    <div className="min-h-screen">
      <EducationHeroSection />
      <AcademicTimelineSection />
      <InstitutionShowcaseSection />
      <CertificationsGallerySection />
      <AcademicDocumentsSection />
    </div>
  );
}
