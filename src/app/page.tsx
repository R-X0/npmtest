export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Premium Marble & Granite
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Transform your space with our exquisite collection of natural stone. 
              From elegant marble countertops to durable granite surfaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors">
                View Collection
              </button>
              <button className="border border-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Stone?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We source only the finest materials and provide expert craftsmanship for every project.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded"></div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
            <p className="text-gray-600">
              Hand-selected marble and granite from the finest quarries worldwide.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-green-600 rounded"></div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Expert Installation</h3>
            <p className="text-gray-600">
              Professional installation by certified craftsmen with years of experience.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-purple-600 rounded"></div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Lifetime Warranty</h3>
            <p className="text-gray-600">
              Comprehensive warranty coverage for peace of mind on every installation.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Materials
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-r from-gray-200 to-gray-300"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Marble</h3>
                <p className="text-gray-600 mb-4">
                  Luxurious and timeless, our marble collection features stunning veining 
                  and colors perfect for countertops, flooring, and accent walls.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Carrara, Calacatta, Statuario varieties</li>
                  <li>• Heat and scratch resistant when sealed</li>
                  <li>• Perfect for kitchens and bathrooms</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-r from-gray-400 to-gray-600"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Granite</h3>
                <p className="text-gray-600 mb-4">
                  Durable and versatile, granite offers exceptional strength and 
                  natural beauty for high-traffic areas and outdoor applications.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Black Galaxy, Absolute Black, Kashmir White</li>
                  <li>• Extremely durable and low maintenance</li>
                  <li>• Ideal for countertops and flooring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8">
            Contact us today for a free consultation and quote on your marble or granite project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
            <button className="border border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Call (555) 123-4567
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Premium Stone Co.</h3>
              <p className="text-gray-400">
                Your trusted partner for marble and granite installations since 1995.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Kitchen Countertops</li>
                <li>Bathroom Vanities</li>
                <li>Flooring Installation</li>
                <li>Custom Fabrication</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Materials</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Marble Slabs</li>
                <li>Granite Slabs</li>
                <li>Quartz Surfaces</li>
                <li>Natural Stone Tiles</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>123 Stone Street</li>
                <li>City, State 12345</li>
                <li>(555) 123-4567</li>
                <li>info@premiumstone.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Premium Stone Co. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
