import React from 'react';
import './buttons.css';

interface ButtonProps {
  label: string;
  tag?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, tag = 'R25', className = '' }) => {
  return (
    <button className={`cybr-btn ${className}`}>
      {label}
      <span aria-hidden>_</span>
      <span aria-hidden className="cybr-btn__glitch">{label}_</span>
      <span className="cybr-btn__tag">{tag}</span>
    </button>
  );
};

export default Button;
