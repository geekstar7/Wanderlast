const testimonials = [
  {
    name: "Emily Carter",
    feedback: "Wanderlast made planning my trip so easy. The deals are unbeatable!",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "James Lee",
    feedback: "I loved how everything was organized. Truly hassle-free travel!",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Sophia Martin",
    feedback: "Amazing experience! I’ll definitely use Wanderlast again.",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white" id="testimonials">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">What Travelers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md">
              <img
                src={t.img}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-gray-600 mb-4">"{t.feedback}"</p>
              <h3 className="font-semibold">{t.name}</h3>
              <p className="text-yellow-500">★★★★★</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
