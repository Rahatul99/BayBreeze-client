const Blogs = () => {
  const faqData = [
    {
      question: 'What is an access token and refresh token? How do they work and where should we store them on the client-side?',
      answer:
        'An access token is a credential that is used to authenticate and authorize a user when accessing protected resources, such as an API. It is typically issued by an authentication server after the user successfully logs in and provides their credentials. The access token contains information about the user and their permissions, and it has a limited lifespan A refresh token, on the other hand, is a long-lived credential that is used to obtain a new access token once the current one expires. It is typically issued alongside the access token and is securely stored on the client-side When a user makes a request to a protected resource, they include the access token in the request headers. The server then verifies the access token to ensure the user has the necessary permissions to access the requested resource.',
    },
    {
      question: 'Compare SQL and NoSQL databases?',
      answer:
        'SQL databases are ideal for applications with structured data and complex relationships, while NoSQL databases excel in handling unstructured or rapidly changing data at scale, prioritizing scalability and performance over strict consistency. The choice between SQL and NoSQL depends on the specific requirements and characteristics of application.',
    },
    {
      question: 'What is express js? What is Nest JS?',
      answer:
        'Express.js is a minimalist web application framework for Node.js. It provides a simple and flexible set of features for building web applications and APIs. Express.js allows you to handle HTTP requests, define routes, handle middleware, and render views. It is lightweight and unopinionated, giving developers the freedom to structure their applications as they see fit. Express.js is widely used and has a large ecosystem of middleware and extensions, making it a popular choice for building web applications in Node.js.',
    },
    {
      question:'What is MongoDB aggregate and how does it work?',
      answer:
      'In MongoDB, the aggregate operation is used to perform advanced data processing and analysis on the documents in a collection. It allows you to perform computations, transformations, and aggregations on the data, similar to the SQL "GROUP BY" or "JOIN" operations The aggregate operation in MongoDB works by using a pipeline of stages, where each stage performs a specific operation on the input documents and passes the results to the next stage. Each stage can modify, filter, group, sort, or project the documents in some way. The pipeline stages are executed in the order they are specified, allowing you to build complex data processing workflows.'
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
