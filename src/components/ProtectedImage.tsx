import React from 'react';

interface ProtectedImageProps {
  src: string;
  alt: string;
  className?: string;
  watermarkText?: string;
}

const ProtectedImage = ({ 
  src, 
  alt, 
  className = "",
  watermarkText = "© Shruti"
}: ProtectedImageProps) => {
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    return false;
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
    return false;
  };

  const handleSelectStart = (e: React.MouseEvent) => {
    e.preventDefault();
    return false;
  };

  return (
    <div 
      className="relative select-none"
      onContextMenu={handleContextMenu}
      onDragStart={handleDragStart}
      onSelectStart={handleSelectStart}
    >
      <img 
        src={src}
        alt={alt}
        className={`pointer-events-none ${className}`}
        draggable={false}
        onContextMenu={handleContextMenu}
      />
      
      {/* Watermark Overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-20 transition-opacity duration-300">
        <div className="text-white text-3xl font-bold transform -rotate-45 pointer-events-none">
          {watermarkText}
        </div>
      </div>

      {/* Anti-screenshot overlay (subtle) */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-transparent via-white/0 to-white/5 pointer-events-none"></div>
    </div>
  );
};

export default ProtectedImage;
