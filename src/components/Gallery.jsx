const images = [
  "https://source.unsplash.com/400x300/?paris,travel",
  "https://source.unsplash.com/400x300/?maldives,beach",
  "https://source.unsplash.com/400x300/?japan,temple",
  "https://source.unsplash.com/400x300/?rome,travel",
  "https://source.unsplash.com/400x300/?dubai,city",
  "https://source.unsplash.com/400x300/?newyork,skyline",
];

const Gallery = () => {
  return (
    <section className="py-16 bg-white" id="gallery">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Travel Gallery</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div key={i} className="overflow-hidden rounded-xl shadow-md">
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-64 object-cover transform hover:scale-110 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
