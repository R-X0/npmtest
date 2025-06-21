export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Ashoor Gorgis
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Founder & President of West Coast Marble & Granite
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
        </header>

        <main className="max-w-4xl mx-auto">
          <section className="mb-16">
            <div className="bg-gray-800 rounded-lg p-8 shadow-xl">
              <h2 className="text-3xl font-semibold mb-6 text-blue-400">About Ashoor</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Ashoor Gorgis is a visionary entrepreneur who founded West Coast Marble & Granite in 1987. 
                With over 35 years of experience in the stone industry, he has built a reputation for 
                excellence in craftsmanship and customer service.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Under his leadership, West Coast Marble & Granite has grown from a small local business 
                to a premier provider of marble and granite countertops throughout California.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-gray-800 rounded-lg p-8 shadow-xl">
              <h2 className="text-3xl font-semibold mb-6 text-purple-400">West Coast Marble & Granite</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-300">Company Overview</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li><strong>Founded:</strong> 1987</li>
                    <li><strong>Industry:</strong> Stone Fabrication & Installation</li>
                    <li><strong>Specialties:</strong> Marble & Granite Countertops</li>
                    <li><strong>Experience:</strong> Over 35 Years</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-300">Locations</h3>
                  <div className="space-y-4 text-gray-300">
                    <div>
                      <p className="font-semibold">Oxnard Location</p>
                      <p>2813 E Ventura Blvd</p>
                      <p>Oxnard, CA 93036</p>
                    </div>
                    <div>
                      <p className="font-semibold">Sun Valley Location</p>
                      <p>11030 Sherman Way</p>
                      <p>Sun Valley, CA 91352</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-gray-800 rounded-lg p-8 shadow-xl">
              <h2 className="text-3xl font-semibold mb-6 text-green-400">Services & Expertise</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-300">Custom Fabrication</h3>
                  <p className="text-gray-300">Precision cutting and shaping of marble and granite to exact specifications.</p>
                </div>
                <div className="bg-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-300">Professional Installation</h3>
                  <p className="text-gray-300">Expert installation services ensuring perfect fit and finish.</p>
                </div>
                <div className="bg-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-300">Quality Materials</h3>
                  <p className="text-gray-300">Premium marble and granite sourced from the finest quarries.</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="text-center mt-16 pt-8 border-t border-gray-700">
          <p className="text-gray-400">
            © 2024 West Coast Marble & Granite. Founded by Ashoor Gorgis in 1987.
          </p>
        </footer>
      </div>
    </div>
  );
}
