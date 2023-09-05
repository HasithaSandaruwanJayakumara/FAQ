// components/FAQ.tsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC<{ faqData: FAQItem[] }> = ({ faqData }) => {
  // Initialize openIndex to 0 (the index of the first question)
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div>
      {faqData.map((item, index) => (
        <div key={index} className="mb-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <h2 className="text-xl font-semibold">{item.question}</h2>
            <FontAwesomeIcon
              icon={openIndex === index ? faAngleUp : faAngleDown}
              className="text-gray-500"
            />
          </div>
          {openIndex === index && <p className="mt-2">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
