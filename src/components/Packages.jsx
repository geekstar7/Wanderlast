const packages = [
  {
    title: "Bali Getaway",
    price: "$899",
    duration: "7 Days",
    img: "https://source.unsplash.com/400x300/?bali,travel",
  },
  {
    title: "Swiss Alps Adventure",
    price: "$1,299",
    duration: "10 Days",
    img: "https://source.unsplash.com/400x300/?switzerland,mountains",
  },
  {
    title: "Safari in Kenya",
    price: "$999",
    duration: "5 Days",
    img: "https://source.unsplash.com/400x300/?kenya,safari",
  },
];

const Packages = () => {
  return (
    <section className="py-16 bg-gray-50" id="packages">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Popular Packages</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((p, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">{p.title}</h3>
                <p className="text-gray-500">{p.duration}</p>
                <p className="text-lg font-bold text-green-600 mt-2">{p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
