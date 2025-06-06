import React from 'react';

const CogIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-1.003 1.11-.95.27.02.54.05.81.08.55.06 1.03.49 1.18.97.21.67.21 1.4.03 2.09l-1.6 5.32c-.07.24-.07.49-.01.73.07.26.2.5.39.69l1.95 1.95c.3.3.71.43 1.12.35.6-.13 1.2-.02 1.72.34.49.34.82.9.82 1.5v.29c0 .57-.37 1.06-.91 1.22a21.111 21.111 0 01-4.132.46c-.6.05-1.18.26-1.66.6A4.468 4.468 0 0012 21.07c-1.64.33-3.34.23-4.89-.29-.54-.16-.91-.65-.91-1.22v-.3c0-.6.33-1.16.82-1.5.52-.36 1.12-.47 1.72-.34.41.08.82-.05 1.12-.35l1.95-1.95a1.432 1.432 0 00.39-.69c.05-.24.05-.49-.01-.73l-1.6-5.32a2.937 2.937 0 01.03-2.09c.15-.48.63-.91 1.18-.97.27-.03.54-.06.81-.08.55-.05 1.02.408 1.11.95zM12 9.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
  </svg>
);

export default CogIcon;
