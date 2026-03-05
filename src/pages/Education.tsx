import NavigationBar from '@/components/NavigationBar';
import EducationHeroSection from '@/components/EducationHeroSection';
import AcademicTimelineSection from '@/components/AcademicTimelineSection';
import InstitutionShowcaseSection from '@/components/InstitutionShowcaseSection';
import CertificationsGallerySection from '@/components/CertificationsGallerySection';
import AcademicDocumentsSection from '@/components/AcademicDocumentsSection';
import Footer from '@/components/Footer';

export default function Education() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavigationBar />
      <main className="flex-1">
        <EducationHeroSection />
        <AcademicTimelineSection />
        <InstitutionShowcaseSection />
        <CertificationsGallerySection />
        <AcademicDocumentsSection />
      </main>
      <Footer />
    </div>
  );
}
