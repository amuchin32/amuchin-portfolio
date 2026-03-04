import { useState } from 'react';
import { FileText, Download, Eye, X } from 'lucide-react';

interface AcademicDocument {
  id: number;
  type: 'resume' | 'transcript' | 'certificate';
  title: string;
  issueDate: string;
  description: string;
  previewUrl: string;
  downloadUrl: string;
}

const documents: AcademicDocument[] = [
  {
    id: 1,
    type: 'resume',
    title: 'Professional Resume',
    issueDate: 'February 2026',
    description: 'Comprehensive resume highlighting technical skills, professional experience, and educational background.',
    previewUrl: 'https://drive.google.com/file/d/1iYu8XhpgWjj2waCy56mYeyF1f7GOpNH-/preview',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1iYu8XhpgWjj2waCy56mYeyF1f7GOpNH-',
  },
  {
    id: 2,
    type: 'transcript',
    title: "Master's Degree Transcript",
    issueDate: 'December 2024',
    description: 'Official transcript from Lovely Professional University showing all coursework and grades.',
    previewUrl: 'https://drive.google.com/file/d/1N9nm3mi-OsAKgeSLIuqhycswfzxbx0zJ/preview',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1N9nm3mi-OsAKgeSLIuqhycswfzxbx0zJ',
  },
  {
    id: 3,
    type: 'certificate',
    title: "Bachelor's Degree Certificate",
    issueDate: 'June 2022',
    description: 'Official degree certificate from Stella Maris University.',
    previewUrl: 'https://drive.google.com/file/d/1hHqNIEQXT0Cw5O8xd9DX4fYgo9sbEzK_/preview',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1hHqNIEQXT0Cw5O8xd9DX4fYgo9sbEzK_',
  },
];

const documentTypeColors: Record<string, { bg: string; text: string; icon: string }> = {
  resume: { bg: 'bg-blue-100', text: 'text-blue-700', icon: '📄' },
  transcript: { bg: 'bg-green-100', text: 'text-green-700', icon: '📋' },
  certificate: { bg: 'bg-purple-100', text: 'text-purple-700', icon: '🎓' },
};

export default function AcademicDocumentsSection() {
  const [selectedDoc, setSelectedDoc] = useState<AcademicDocument | null>(null);

  const handleDownload = (doc: AcademicDocument) => {
    window.open(doc.downloadUrl, '_blank');
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
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg text-xl transition-transform group-hover:scale-110 ${colors.bg}`}>
                    {colors.icon}
                  </div>
                  <h3 className="font-montserrat text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                    {doc.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${colors.bg} ${colors.text}`}>
                      {doc.type}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">Issued: {doc.issueDate}</p>
                  <p className="text-sm text-secondary-foreground">{doc.description}</p>
                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={() => handlePreview(doc)}
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 font-semibold text-primary-foreground transition-colors hover:bg-blue-700"
                    >
                      <Eye className="h-4 w-4" />
                      Preview
                    </button>
                    <button
                      onClick={() => handleDownload(doc)}
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
            className="relative flex flex-col w-full max-w-4xl rounded-lg bg-card overflow-hidden"
            style={{ height: '90vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <div>
                <h3 className="font-montserrat text-xl font-bold text-foreground">
                  {selectedDoc.title}
                </h3>
                <p className="text-sm text-muted-foreground">Issued: {selectedDoc.issueDate}</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleDownload(selectedDoc)}
                  className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 font-semibold text-primary-foreground transition-colors hover:bg-blue-700"
                >
                  <Download className="h-4 w-4" />
                  Download
                </button>
                <button
                  onClick={() => setSelectedDoc(null)}
                  className="rounded-lg p-2 transition-colors hover:bg-secondary"
                >
                  <X className="h-5 w-5 text-foreground" />
                </button>
              </div>
            </div>

            {/* iframe Preview */}
            <div className="flex-1">
              <iframe
                src={selectedDoc.previewUrl}
                className="w-full h-full"
                allow="autoplay"
                style={{ border: 'none' }}
                title={selectedDoc.title}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
