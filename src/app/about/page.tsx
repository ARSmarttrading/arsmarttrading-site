export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About AR Smart Trading
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            We provide AI-powered share market learning in Tamil & English, making financial education 
            accessible to everyone. Our mission is to democratize trading knowledge and empower 
            individuals to make informed investment decisions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To make stock market education accessible, affordable, and effective for everyone.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To become the leading platform for AI-powered trading education in India.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Our Values</h3>
              <p className="text-gray-600">
                Innovation, transparency, and commitment to student success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 