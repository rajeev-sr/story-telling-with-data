import React from 'react';

const Section = ({ title, text, children }) => {
  return (
    <div className="section">
      <h2>{title}</h2>
      <p>{text}</p>
      {children} {/* This is where the chart component will be rendered */}
    </div>
  );
};

export default Section;
