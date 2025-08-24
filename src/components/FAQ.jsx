import { useState } from "react";

const faqs = [
  {
    q: "How do I book a trip?",
    a: "Simply browse our packages, select your destination, and complete your booking in minutes.",
  },
  {
    q: "Can I cancel my booking?",
    a: "Yes, you can cancel up to 7 days before departure for a full refund.",
  },
  {
    q: "Do you offer group discounts?",
    a: "Absolutely! We provide special pricing for groups and families.",
  },
  {
    q: "Is customer support available?",
    a: "Our support team is available 24/7 to assist you at any stage of your journey.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 bg-gray-50" id="faq">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-4 text-left cursor-pointer"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <h3 className="font-semibold text-lg flex justify-between items-center">
                {faq.q}
                <span>{openIndex === i ? "−" : "+"}</span>
              </h3>
              {openIndex === i && (
                <p className="mt-2 text-gray-600">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
