"use client";
// pages/index.tsx
import React, { useState } from 'react';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const faqData = [
  {
    question: 'What is web load view?',
    answer: 'Web load view is a concept in web development that refers to how a web page is initially rendered and displayed in a user\'s web browser. It involves loading and displaying the content, styles, and assets of a web page so that users can interact with it. This process can be optimized for performance using techniques like server-side rendering (SSR) or static site generation (SSG) to improve the initial load time and user experience.',
  },
  {
    question: 'What is web load view?',
    answer: 'Web load view is a concept in web development that refers to how a web page is initially rendered and displayed in a user\'s web browser. It involves loading and displaying the content, styles, and assets of a web page so that users can interact with it. This process can be optimized for performance using techniques like server-side rendering (SSR) or static site generation (SSG) to improve the initial load time and user experience.',
  },
  // Add more FAQ items as needed
];

const Home: React.FC = () => {
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
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Frequently Asked Questions</h1>
      <div>
        {faqData.map((item, index) => (
          <div key={index} className="mb-4 border-b border-gray-300">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h2 className="text-xl font-semibold">{item.question}</h2>
              {openIndex === index ? (
                <FontAwesomeIcon icon={faAngleUp} className="text-gray-500" />
              ) : (
                <FontAwesomeIcon icon={faAngleDown} className="text-gray-500" />
              )}
            </div>
            {openIndex === index && <p className="mt-2">{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;