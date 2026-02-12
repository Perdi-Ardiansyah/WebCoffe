export default function LocationMap() {
  return (
    <div className="w-full h-fuul rounded-2xl overflow-hidden shadow-xl">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.4679435425846!2d108.18414030000001!3d-7.301206399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f51a643d85d97%3A0xdf8303f7d1e85953!2sVivalavida%20Soccer%20Area%20%26%20Coffeeshop!5e0!3m2!1sid!2sid!4v1770880329491!5m2!1sid!2sid"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Lokasi Saya"
      ></iframe>
    </div>
  );
}
