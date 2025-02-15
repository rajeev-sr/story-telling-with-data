import React from 'react';
import Header from './Header';
import ImageSection from './ImageSection';
import Footer from './Footer';
import sectionData from './data';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          {sectionData.map((section) => (
            <ImageSection key={section.id} section={section} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
