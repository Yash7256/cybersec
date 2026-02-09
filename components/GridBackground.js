import { useEffect, useState } from 'react';

const GridBackground = ({ children }) => {
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    const generateGridTiles = () => {
      const tileSize = 80.92;
      const containerWidth = 1456.54;
      const containerHeight = 941.53;
      
      const columns = Math.ceil(containerWidth / tileSize);
      const rows = Math.ceil(containerHeight / tileSize);
      
      // Semi-transparent tile positions
      const specialTiles = [
        { left: 160, top: 162 },
        { left: 405, top: 324 },
        { left: 324, top: 647 },
        { left: 890, top: 728 },
        { left: 1295, top: 405 },
        { left: 1456, top: 809 }
      ];
      
      const newTiles = [];
      
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
          const left = col * tileSize;
          const top = row * tileSize;
          
          // Check if this position should be semi-transparent
          const isSpecial = specialTiles.some(
            tile => Math.abs(tile.left - left) < 5 && Math.abs(tile.top - top) < 5
          );
          
          newTiles.push({
            left,
            top,
            background: isSpecial ? 'rgba(1, 5, 16, 0.50)' : '#090C17',
            key: `${row}-${col}`
          });
        }
      }
      
      setTiles(newTiles);
    };

    generateGridTiles();
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-[#0B0F1A] p-4">
      <div 
        className="relative w-[1456.54px] h-[941.53px] rounded-[50px] overflow-hidden border border-[#CBAEE4]"
        style={{ outline: '1px solid #CBAEE4', outlineOffset: '-1px' }}
      >
        {/* Grid tiles */}
        {tiles.map((tile) => (
          <div
            key={tile.key}
            className="absolute w-[80.92px] h-[80.92px] border border-[#010510]"
            style={{
              left: `${tile.left}px`,
              top: `${tile.top}px`,
              background: tile.background,
            }}
          />
        ))}
        
        {/* Content layer */}
        <div className="relative z-10 h-full flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
};

export default GridBackground;