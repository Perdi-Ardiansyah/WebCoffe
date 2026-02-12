import React from 'react';
import Button from '../components/Button';

const MiniSoccer = () => {
  return (
    <section id="mini-soccer" className="min-h-screen bg-green-50 flex items-center justify-center py-16">
      <div className="text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-green-800 mb-6">Mini Soccer</h1>
        <p className="text-xl text-gray-700 mb-8">
          Bergabunglah dalam permainan sepak bola mini yang seru dan penuh energi. Cocok untuk semua usia!
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">Lapangan Mini</h3>
            <p className="text-gray-600">Lapangan berkualitas tinggi untuk permainan yang adil dan menyenangkan.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">Turnamen</h3>
            <p className="text-gray-600">Ikuti turnamen mingguan dan bulanan untuk tantangan lebih besar.</p>
          </div>
        </div>
        <Button variant="green">
          Daftar Sekarang
        </Button>
      </div>
    </section>
  );
};

export default MiniSoccer;
