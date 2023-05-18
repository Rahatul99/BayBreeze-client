// const Blogs = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Blogs;



const Blogs = () => {
  const faqData = [
    {
      question: 'What is an access token and refresh token? How do they work and where should we store them on the client-side?',
      answer:
        '',
    },
    {
      question: 'Compare SQL and NoSQL databases?',
      answer:
        '',
    },
    {
      question: 'What is express js? What is Nest JS?',
      answer:
        'Once your order is shipped, you will receive a tracking number via email. You can use that tracking number to track your order on our website.',
    },
    {
      question:'What is MongoDB aggregate and how does it work (google it)?',
      answer:
      ''
    }
  ];

  return (
    <section className="py-8 lg:py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4"
            >
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
