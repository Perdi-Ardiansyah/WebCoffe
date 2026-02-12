import React from 'react';
import Button from '../components/Button';

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-blue-50 flex items-center justify-center py-16">
      <div className="text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-blue-800 mb-6">Tentang Saya</h1>
        <p className="text-xl text-gray-700 mb-8">
          Halo! Saya adalah pengembang web yang passionate tentang menciptakan pengalaman digital yang menarik dan fungsional.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Pengalaman</h3>
            <p className="text-gray-600">Berpengalaman dalam pengembangan web dengan teknologi modern seperti React dan Node.js.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Keahlian</h3>
            <p className="text-gray-600">Spesialis dalam frontend development, UI/UX design, dan optimisasi performa.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Hobi</h3>
            <p className="text-gray-600">Saya suka bermain sepak bola mini dan menikmati kopi di waktu senggang.</p>
          </div>
        </div>
        <Button variant="blue">
          Hubungi Saya
        </Button>
      </div>
    </section>
  );
};

export default About;
