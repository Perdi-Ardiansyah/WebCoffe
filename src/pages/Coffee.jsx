import React from 'react';
import Button from '../components/Button';

const Coffee = () => {
  return (
    <section id="coffe" className="min-h-screen bg-amber-50 flex items-center justify-center py-16">
      <div className="text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-amber-800 mb-6">Kopi Kami</h1>
        <p className="text-xl text-gray-700 mb-8">
          Nikmati berbagai jenis kopi pilihan kami, disajikan dengan cinta dan dedikasi untuk memberikan pengalaman terbaik.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-amber-700 mb-4">Espresso</h3>
            <p className="text-gray-600">Kopi hitam pekat yang sempurna untuk memulai hari Anda.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-amber-700 mb-4">Latte</h3>
            <p className="text-gray-600">Kombinasi kopi espresso dengan susu steamed yang lembut.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-amber-700 mb-4">Cappuccino</h3>
            <p className="text-gray-600">Espresso dengan busa susu dan sedikit bubuk cokelat.</p>
          </div>
        </div>
        <Button variant="amber">
          Pesan Sekarang
        </Button>
      </div>
    </section>
  );
};

export default Coffee;
