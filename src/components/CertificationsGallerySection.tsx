import { useState } from 'react';
import { Award, X } from 'lucide-react';

interface Certification {
  id: number;
  title: string;
  organization: string;
  issueDate: string;
  credentialId?: string;
  description: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: 'Red Hat Certified System Administrator',
    organization: 'Red Hat',
    issueDate: 'March 2024',
    credentialId: 'RHCSA-2024-001',
    description: 'Advanced system administration and Linux expertise',
  },
  {
    id: 2,
    title: 'Full Stack Web Development',
    organization: 'TechCADD Computer Education',
    issueDate: 'January 15, 2024',
    credentialId: 'TCD/4001/1403',
    description: '6-month comprehensive course covering HTML, CSS, JavaScript, jQuery, Bootstrap, React, and Node.js',
  },
  {
    id: 3,
    title: 'Python for Data Science',
    organization: 'Udemy',
    issueDate: 'October 10, 2023',
    credentialId: 'UC-d4c5aec3-79ab-40f3-af2b-be2bdd47f97a',
    description: 'Comprehensive Python programming course for data science applications (22.5 hours)',
  },
  {
    id: 4,
    title: 'Communication Networks Management using CISCO Packet Tracer',
    organization: 'Lovely Professional University',
    issueDate: 'June 13, 2022',
    credentialId: '247262',
    description: 'Short-term course on network management and CISCO Packet Tracer simulation (Grade: A)',
  },
  {
    id: 5,
    title: 'Industry 4.0',
    organization: 'Lovely Professional University',
    issueDate: 'June 18, 2022',
    credentialId: '248933',
    description: 'Short-term course on Industry 4.0 and emerging industrial technologies (Grade: C)',
  },
  {
    id: 6,
    title: 'Computer Networking Certificate',
    organization: 'Lovely Professional University',
    issueDate: 'December 2023',
    credentialId: 'LPU-CN-2023-001',
    description: 'Comprehensive networking fundamentals and protocols from LPU Department',
  },
];

const ITEMS_PER_PAGE = 6;

export default function CertificationsGallerySection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const totalPages = Math.ceil(certifications.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentCertifications = certifications.slice(startIndex, endIndex);

  return (
    <section className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-6 h-6 text-primary" />
            <h2 className="font-montserrat text-4xl sm:text-5xl font-bold text-foreground">
              Certifications & Courses
            </h2>
          </div>
          <p className="text-lg text-secondary-foreground max-w-2xl mx-auto">
            Professional certifications and specialized training in technology and systems administration.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentCertifications.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer p-6 bg-card rounded-lg border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:scale-105 transform"
            >
              <div className="space-y-4">
                {/* Certificate Icon */}
                <div className="w-12 h-12 bg-primary bg-opacity-20 rounded-lg flex items-center justify-center group-hover:bg-opacity-30 transition-all">
                  <Award className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="font-montserrat text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {cert.title}
                </h3>

                {/* Organization */}
                <p className="text-sm font-semibold text-primary">{cert.organization}</p>

                {/* Issue Date */}
                <p className="text-xs text-muted-foreground">Issued: {cert.issueDate}</p>

                {/* Credential ID */}
                {cert.credentialId && (
                  <p className="text-xs text-secondary-foreground truncate">
                    ID: <span className="font-mono">{cert.credentialId}</span>
                  </p>
                )}

                {/* View Details Link */}
                <button className="text-primary hover:text-blue-700 font-semibold text-sm flex items-center gap-1 mt-4 transition-colors">
                  View Details
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mb-12">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-border rounded-lg hover:bg-card disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                  currentPage === page
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-border hover:bg-card'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-border rounded-lg hover:bg-card disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        )}

        {/* Modal */}
        {selectedCert && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="bg-card rounded-lg max-w-md w-full p-8 relative animate-in fade-in zoom-in duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>

              {/* Content */}
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary bg-opacity-20 rounded-lg flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary" />
                </div>

                <h3 className="font-montserrat text-2xl font-bold text-foreground">
                  {selectedCert.title}
                </h3>

                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-semibold text-foreground">Organization:</span>
                    <span className="text-secondary-foreground ml-2">{selectedCert.organization}</span>
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold text-foreground">Issued:</span>
                    <span className="text-secondary-foreground ml-2">{selectedCert.issueDate}</span>
                  </p>
                  {selectedCert.credentialId && (
                    <p className="text-sm">
                      <span className="font-semibold text-foreground">Credential ID:</span>
                      <span className="text-secondary-foreground ml-2 font-mono">{selectedCert.credentialId}</span>
                    </p>
                  )}
                </div>

                <p className="text-secondary-foreground">{selectedCert.description}</p>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-full px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-blue-700 transition-colors mt-6"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
