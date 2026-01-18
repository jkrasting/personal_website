import { useState, useRef, useEffect } from 'react';
import { getCitationParts, generatePlainCitation, type Publication } from '../../lib/citationUtils';

interface CitationPopoverProps {
  publication: Publication;
}

export function CitationPopover({ publication }: CitationPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const parts = getCitationParts(publication);
  const plainCitation = generatePlainCitation(publication);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      await navigator.clipboard.writeText(plainCitation);
      setCopied(true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy citation:', err);
    }
  };

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => {
    setIsOpen(false);
    setCopied(false);
  };
  const handleFocus = () => setIsOpen(true);
  const handleBlur = () => {
    // Delay to allow clicking inside popover
    setTimeout(() => setIsOpen(false), 150);
  };

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger Button */}
      <button
        onClick={handleCopy}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors p-1 rounded hover:bg-muted/50"
        aria-label="Copy citation"
        title="Click to copy citation"
      >
        {copied ? (
          <svg
            className="size-3.5 text-green-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg
            className="size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
          </svg>
        )}
        <span className="hidden sm:inline">{copied ? 'Copied!' : 'Cite'}</span>
      </button>

      {/* Popover */}
      {isOpen && (
        <div
          className="absolute left-0 bottom-full mb-2 z-50 w-80 sm:w-[28rem] p-4 bg-white border border-border rounded-lg shadow-lg"
          role="tooltip"
        >
          {/* Arrow */}
          <div className="absolute left-4 -bottom-2 w-4 h-4 bg-white border-r border-b border-border rotate-45" />

          {/* Citation Content */}
          <div className="text-sm leading-relaxed relative z-10 bg-white">
            <span>{parts.authors}, {parts.year}: </span>
            <span>{parts.title}. </span>
            <span className="italic">{parts.journal}</span>
            {parts.volume && (
              <>
                <span> </span>
                <span className="font-bold">{parts.volume}</span>
                {parts.issue && <span>({parts.issue})</span>}
                {parts.pages && <span>, {parts.pages}</span>}
              </>
            )}
            <span>.</span>
            {parts.doi && (
              <>
                <span> </span>
                <a
                  href={`https://doi.org/${parts.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline break-all"
                  onClick={(e) => e.stopPropagation()}
                >
                  https://doi.org/{parts.doi}
                </a>
              </>
            )}
          </div>

          {/* Copy Button in Popover */}
          <div className="mt-3 pt-3 border-t border-border flex justify-end">
            <button
              onClick={handleCopy}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                copied
                  ? 'bg-green-100 text-green-800 border border-green-200'
                  : 'bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20'
              }`}
            >
              {copied ? (
                <>
                  <svg
                    className="size-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg
                    className="size-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  Copy Citation
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CitationPopover;
