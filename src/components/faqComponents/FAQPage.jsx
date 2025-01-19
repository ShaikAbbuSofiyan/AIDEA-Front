import React, { useState } from "react";

function FAQPage() {
  const faqs = [
    {
      question: "What is AIDEA?",
      answer: "AIDEA is an Ed Tech platform.",
    },
    {
      question: "Why to Choose AIDEA?",
      answer: "AIDEA is best",
    },
    {
      question: " Carriculum",
      answer: "Go to Carriculum section",
    },
    {
        question: "Eligibility",
        answer: "8th-12th standard students are eligible",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="min-w-2xl w-[959px] mx-auto px-4 py-8">
      {/* <h1 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h1> */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-md shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-4 py-3 font-medium text-gray-800 bg-gray-100 rounded-md focus:outline-none hover:bg-gray-200"
            >
              {faq.question}
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 text-gray-600 bg-white rounded-b-md h-auto">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQPage;
