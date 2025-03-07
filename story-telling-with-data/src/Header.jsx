// Header.jsx
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Reel Life: A Study of Student Video Preferences</h1>
        <p className="header-description">
          Welcome! This website explores the reel (short-form video) preferences of students.
          We've analyzed data to reveal interesting trends and insights into their viewing habits.
          Explore the sections below to learn more about what reels students are watching and how
          preferences differ across genders.
        </p>
      </div>
    </header>
  );
};

export default Header;