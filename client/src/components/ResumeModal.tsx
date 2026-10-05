import { X, Download, ExternalLink, FileText, Mail, MapPin } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/70 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl h-[92vh] flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-5 py-4 sm:px-6 sm:py-4.5 border-b border-gray-200 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-800/60 backdrop-blur-sm flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-600 text-white shadow-sm shadow-blue-500/20">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white leading-tight">
                Aditi Durgapal — Resume
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Official Curriculum Vitae (B.Tech CSE • Mody University)
              </p>
            </div>
          </div>
          
          {/* Action buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Direct Download Button */}
            <a
              href="/Aditi_Durgapal_Resume.pdf"
              download="Aditi_Durgapal_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold shadow-sm shadow-blue-500/20 hover:shadow-blue-500/30 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            {/* Open in New Tab */}
            <a
              href="/Aditi_Durgapal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs sm:text-sm font-medium transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open in New Tab</span>
            </a>

            {/* Close Button */}
            <button 
              onClick={onClose}
              className="p-2 rounded-xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="flex-1 w-full bg-gray-100 dark:bg-gray-950 p-2 sm:p-4 overflow-hidden flex flex-col">
          <iframe 
            src="/Aditi_Durgapal_Resume.pdf#toolbar=1&navpanes=0&scrollbar=1"
            className="w-full flex-1 rounded-xl border border-gray-200 dark:border-gray-800 bg-white shadow-sm"
            title="Aditi Durgapal Resume PDF"
          />

          {/* Quick Fallback Note for Mobile Browsers */}
          <div className="mt-2 text-center text-[11px] text-gray-500 dark:text-gray-400">
            If the PDF does not display inside your browser frame,{" "}
            <a 
              href="/Aditi_Durgapal_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 dark:text-blue-400 font-semibold underline underline-offset-2"
            >
              click here to view fullscreen
            </a>{" "}
            or use the Download PDF button above.
          </div>
        </div>
      </div>
    </div>
  );
}
