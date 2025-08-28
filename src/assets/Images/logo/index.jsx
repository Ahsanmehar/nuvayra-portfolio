import React from 'react';

const Logo = ({ className = '', size = 'md', theme = 'dark' }) => {
  const sizeConfig = {
    sm: { width: 120, height: 32, iconSize: 24, fontSize: 16 },
    md: { width: 160, height: 40, iconSize: 32, fontSize: 20 },
    lg: { width: 200, height: 48, iconSize: 40, fontSize: 24 }
  };

  const config = sizeConfig[size];
  
  const colors = {
    dark: {
      background: '#1A202C',
      text: '#FFFFFF',
      iconPrimary: '#00B4D8',
      iconSecondary: '#0077B6',
      iconAccent: '#90E0EF',
      nodeColor: '#00B4D8'
    },
    light: {
      background: '#FFFFFF',
      text: '#1A202C',
      iconPrimary: '#00B4D8',
      iconSecondary: '#0077B6',
      iconAccent: '#023E8A',
      nodeColor: '#00B4D8'
    }
  };
  
  const themeColors = colors[theme];

  return (
    <svg
      width={config.width}
      height={config.height}
      viewBox={`0 0 ${config.width} ${config.height}`}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <rect
        width={config.width}
        height={config.height}
        rx="8"
        fill="none"
        stroke={theme === 'light' ? '#E2E8F0' : 'none'}
        strokeWidth={theme === 'light' ? '0' : '0'}
      />
      
      {/* Tech Network Icon */}
      <g transform={`translate(8, ${(config.height - config.iconSize) / 2})`}>
        {/* Central Hub Node */}
        <circle
          cx={config.iconSize * 0.5}
          cy={config.iconSize * 0.5}
          r={config.iconSize * 0.12}
          fill={themeColors.iconPrimary}
        />
        
        {/* Outer Nodes */}
        <circle
          cx={config.iconSize * 0.2}
          cy={config.iconSize * 0.2}
          r={config.iconSize * 0.08}
          fill={themeColors.nodeColor}
          opacity="0.8"
        />
        <circle
          cx={config.iconSize * 0.8}
          cy={config.iconSize * 0.2}
          r={config.iconSize * 0.08}
          fill={themeColors.nodeColor}
          opacity="0.8"
        />
        <circle
          cx={config.iconSize * 0.2}
          cy={config.iconSize * 0.8}
          r={config.iconSize * 0.08}
          fill={themeColors.nodeColor}
          opacity="0.8"
        />
        <circle
          cx={config.iconSize * 0.8}
          cy={config.iconSize * 0.8}
          r={config.iconSize * 0.08}
          fill={themeColors.nodeColor}
          opacity="0.8"
        />
        
        {/* Connection Lines */}
        <line
          x1={config.iconSize * 0.5}
          y1={config.iconSize * 0.5}
          x2={config.iconSize * 0.2}
          y2={config.iconSize * 0.2}
          stroke={themeColors.iconSecondary}
          strokeWidth="2"
          opacity="0.6"
        />
        <line
          x1={config.iconSize * 0.5}
          y1={config.iconSize * 0.5}
          x2={config.iconSize * 0.8}
          y2={config.iconSize * 0.2}
          stroke={themeColors.iconSecondary}
          strokeWidth="2"
          opacity="0.6"
        />
        <line
          x1={config.iconSize * 0.5}
          y1={config.iconSize * 0.5}
          x2={config.iconSize * 0.2}
          y2={config.iconSize * 0.8}
          stroke={themeColors.iconSecondary}
          strokeWidth="2"
          opacity="0.6"
        />
        <line
          x1={config.iconSize * 0.5}
          y1={config.iconSize * 0.5}
          x2={config.iconSize * 0.8}
          y2={config.iconSize * 0.8}
          stroke={themeColors.iconSecondary}
          strokeWidth="2"
          opacity="0.6"
        />
        
        {/* Code Brackets */}
        <path
          d={`M${config.iconSize * 0.15} ${config.iconSize * 0.35}
              L${config.iconSize * 0.1} ${config.iconSize * 0.5}
              L${config.iconSize * 0.15} ${config.iconSize * 0.65}`}
          stroke={themeColors.iconAccent}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d={`M${config.iconSize * 0.85} ${config.iconSize * 0.35}
              L${config.iconSize * 0.9} ${config.iconSize * 0.5}
              L${config.iconSize * 0.85} ${config.iconSize * 0.65}`}
          stroke={themeColors.iconAccent}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </g>
      
      <text
        x={config.iconSize + 16}
        y={config.height / 2 + config.fontSize / 3}
        fill={themeColors.text}
        fontSize={config.fontSize}
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="700"
        letterSpacing="-0.010em"
      >
        Nuvayra
      </text>
    </svg>
  );
};

export default Logo;