import { useState } from 'react';
import { FileText, Download, Eye, X } from 'lucide-react';

interface AcademicDocument {
  id: number;
  type: 'resume' | 'transcript' | 'certificate';
  title: string;
  issueDate: string;
  description: string;
}

const documents: AcademicDocument[] = [
  {
    id: 1,
    type: 'resume',
    title: 'Professional Resume',
    issueDate: 'February 2026',
    description: 'Comprehensive resume highlighting technical skills, professional experience, and educational background.',
  },
  {
    id: 2,
    type: 'transcript',
    title: 'Master\'s Degree Transcript',
    issueDate: 'December 2024',
    description: 'Official transcript from Lovely Professional University showing all coursework and grades.',
  },
  {
    id: 3,
    type: 'certificate',
    title: 'Bachelor\'s Degree Certificate',
    issueDate: 'June 2022',
    description: 'Official degree certificate from Stella Maris University.',
  },
];

const documentTypeColors: Record<string, { bg: string; text: string; icon: string }> = {
  resume: { bg: 'bg-blue-100', text: 'text-blue-700', icon: '📄' },
  transcript: { bg: 'bg-green-100', text: 'text-green-700', icon: '📋' },
  certificate: { bg: 'bg-purple-100', text: 'text-purple-700', icon: '🎓' },
};

export default function AcademicDocumentsSection() {
  const [selectedDoc, setSelectedDoc] = useState<AcademicDocument | null>(null);

  const handleDownload = (docId: number) => {
    alert(`Download initiated for document ${docId}. Please contact for actual document access.`);
  };

  const handlePreview = (doc: AcademicDocument) => {
    setSelectedDoc(doc);
  };

  return (
    <section id="documents" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            <h2 className="font-montserrat text-4xl font-bold text-foreground sm:text-5xl">
              Academic Documents
            </h2>
          </div>
          <p className="mx-auto max-w-2xl text-lg text-secondary-foreground">
            Official documents, transcripts, and certificates available for preview and download.
          </p>
        </div>

        {/* Documents Grid */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {documents.map((doc) => {
            const colors = documentTypeColors[doc.type];
            return (
              <div
                key={doc.id}
                className="group rounded-lg border-2 border-border bg-background p-6 transition-all duration-300 hover:border-primary hover:shadow-lg"
              >
                <div className="space-y-4">
                  {/* Document Type Badge */}
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg text-xl transition-transform group-hover:scale-110 ${colors.bg}`}>
                    {colors.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-montserrat text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                    {doc.title}
                  </h3>

                  {/* Type Badge */}
                  <div className="flex items-center gap-2">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${colors.bg} ${colors.text}`}>
                      {doc.type}
                    </span>
                  </div>

                  {/* Issue Date */}
                  <p className="text-sm text-muted-foreground">Issued: {doc.issueDate}</p>

                  {/* Description */}
                  <p className="text-sm text-secondary-foreground">{doc.description}</p>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={() => handlePreview(doc)}
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 font-semibold text-primary-foreground transition-colors hover:bg-blue-700"
                    >
                      <Eye className="h-4 w-4" />
                      Preview
                    </button>
                    <button
                      onClick={() => handleDownload(doc.id)}
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-primary px-4 py-2 font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info Box */}
        <div className="rounded-lg border-2 border-border bg-secondary p-6 text-center">
          <p className="text-secondary-foreground">
            For official document verification or additional copies, please contact me directly at{' '}
            <a href="mailto:feolytogba20@gmail.com" className="font-semibold text-primary hover:text-blue-700">
              feolytogba20@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Preview Modal */}
      {selectedDoc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
          onClick={() => setSelectedDoc(null)}
        >
          <div
            className="relative max-h-96 w-full max-w-2xl overflow-y-auto rounded-lg bg-card p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedDoc(null)}
              className="absolute right-4 top-4 rounded-lg p-2 transition-colors hover:bg-secondary"
            >
              <X className="h-5 w-5 text-foreground" />
            </button>

            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-montserrat text-2xl font-bold text-foreground">
                  {selectedDoc.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Type: <span className="font-semibold capitalize">{selectedDoc.type}</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  Issued: {selectedDoc.issueDate}
                </p>
              </div>

              {/* Document Preview Placeholder */}
              <div className="space-y-4 rounded-lg border-2 border-border bg-background p-12 text-center">
                <div className="text-5xl">
                  {documentTypeColors[selectedDoc.type].icon}
                </div>
                <p className="text-secondary-foreground">
                  Document preview will be displayed here
                </p>
                <p className="text-xs text-muted-foreground">
                  For security purposes, full document preview is available upon request
                </p>
              </div>

              {/* Description */}
              <p className="text-secondary-foreground">{selectedDoc.description}</p>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => handleDownload(selectedDoc.id)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 font-semibold text-primary-foreground transition-colors hover:bg-blue-700"
                >
                  <Download className="h-4 w-4" />
                  Download Document
                </button>
                <button
                  onClick={() => setSelectedDoc(null)}
                  className="flex-1 rounded-lg border-2 border-primary px-4 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}