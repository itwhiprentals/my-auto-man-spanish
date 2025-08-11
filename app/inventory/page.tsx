// app/inventory/page.tsx
'use client';

import { useState } from 'react';
import { useLanguage } from '../components/LanguageContext';
import Image from 'next/image';

export default function InventoryPage() {
  const { language } = useLanguage();
  const [filterType, setFilterType] = useState('all');
  const [filterMake, setFilterMake] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [searchTerm, setSearchTerm] = useState('');

  const content = {
    es: {
      title: "Inventario Vendido Recientemente",
      subtitle: "Estos son algunos de los vehículos que hemos ayudado a nuestros clientes a encontrar",
      search: {
        placeholder: "Buscar por marca, modelo o año...",
        button: "Buscar"
      },
      filters: {
        title: "Filtros",
        type: "Tipo de Vehículo",
        make: "Marca",
        sort: "Ordenar Por",
        all: "Todos",
        recent: "Más Reciente",
        priceLow: "Precio: Menor a Mayor",
        priceHigh: "Precio: Mayor a Menor",
        mileageLow: "Millaje: Menor a Mayor"
      },
      card: {
        sold: "VENDIDO",
        mileage: "millas",
        viewDetails: "Ver Detalles",
        callForInfo: "Llamar para Información",
        savedAmount: "Cliente Ahorró",
        soldDate: "Vendido"
      },
      cta: {
        title: "¿No Ves Lo Que Buscas?",
        subtitle: "Podemos encontrar cualquier vehículo que necesites",
        button: "Usar Buscador de Autos",
        callButton: "Llamar Ahora"
      },
      stats: {
        title: "Nuestros Números",
        avgSavings: "Ahorro Promedio",
        daysToFind: "Días para Encontrar",
        satisfaction: "Satisfacción del Cliente"
      },
      testimonial: {
        title: "Lo Que Dicen Nuestros Clientes",
        text: "Tony encontró exactamente el auto que quería mi hija para su graduación. ¡Nos ahorraron $4,000 comparado con el concesionario!",
        author: "- María S., Compró un Honda Civic 2023"
      }
    },
    en: {
      title: "Recently Sold Inventory",
      subtitle: "These are some of the vehicles we've helped our customers find",
      search: {
        placeholder: "Search by make, model, or year...",
        button: "Search"
      },
      filters: {
        title: "Filters",
        type: "Vehicle Type",
        make: "Make",
        sort: "Sort By",
        all: "All",
        recent: "Most Recent",
        priceLow: "Price: Low to High",
        priceHigh: "Price: High to Low",
        mileageLow: "Mileage: Low to High"
      },
      card: {
        sold: "SOLD",
        mileage: "miles",
        viewDetails: "View Details",
        callForInfo: "Call for Info",
        savedAmount: "Customer Saved",
        soldDate: "Sold"
      },
      cta: {
        title: "Don't See What You're Looking For?",
        subtitle: "We can find any vehicle you need",
        button: "Use Car Finder",
        callButton: "Call Now"
      },
      stats: {
        title: "Our Numbers",
        avgSavings: "Average Savings",
        daysToFind: "Days to Find",
        satisfaction: "Customer Satisfaction"
      },
      testimonial: {
        title: "What Our Customers Say",
        text: "Tony found exactly the car my daughter wanted for graduation. They saved us $4,000 compared to the dealership!",
        author: "- Maria S., Purchased 2023 Honda Civic"
      }
    }
  };

  const currentContent = content[language as keyof typeof content];

  // Sample sold inventory data
  const soldInventory = [
    {
      id: 1,
      make: 'Honda',
      model: 'CR-V',
      year: 2023,
      type: 'SUV',
      mileage: 15000,
      price: 32999,
      savedAmount: 3500,
      soldDate: '2024-03-15',
      image: 'https://images.unsplash.com/photo-1568844293986-8d0400bd4745?w=400&h=300&fit=crop',
      features: ['AWD', 'Leather', 'Sunroof', 'Navigation']
    },
    {
      id: 2,
      make: 'Toyota',
      model: 'Camry',
      year: 2022,
      type: 'Sedan',
      mileage: 25000,
      price: 26999,
      savedAmount: 2800,
      soldDate: '2024-03-10',
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop',
      features: ['Backup Camera', 'Bluetooth', 'Apple CarPlay']
    },
    {
      id: 3,
      make: 'Ford',
      model: 'F-150',
      year: 2023,
      type: 'Truck',
      mileage: 18000,
      price: 45999,
      savedAmount: 5200,
      soldDate: '2024-03-08',
      image: 'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=400&h=300&fit=crop',
      features: ['4WD', 'Crew Cab', 'Towing Package', 'Premium Audio']
    },
    {
      id: 4,
      make: 'BMW',
      model: '3 Series',
      year: 2022,
      type: 'Luxury',
      mileage: 20000,
      price: 38999,
      savedAmount: 4100,
      soldDate: '2024-03-05',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
      features: ['Sport Package', 'Premium Sound', 'Heated Seats']
    },
    {
      id: 5,
      make: 'Chevrolet',
      model: 'Silverado',
      year: 2023,
      type: 'Truck',
      mileage: 12000,
      price: 42999,
      savedAmount: 4800,
      soldDate: '2024-03-03',
      image: 'https://images.unsplash.com/photo-1570733577524-3a047079e80d?w=400&h=300&fit=crop',
      features: ['4x4', 'Extended Cab', 'Chrome Package']
    },
    {
      id: 6,
      make: 'Mercedes-Benz',
      model: 'C300',
      year: 2022,
      type: 'Luxury',
      mileage: 22000,
      price: 41999,
      savedAmount: 5500,
      soldDate: '2024-02-28',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=300&fit=crop',
      features: ['AMG Package', 'Panoramic Roof', 'Burmester Audio']
    },
    {
      id: 7,
      make: 'Nissan',
      model: 'Altima',
      year: 2023,
      type: 'Sedan',
      mileage: 8000,
      price: 24999,
      savedAmount: 2200,
      soldDate: '2024-02-25',
      image: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?w=400&h=300&fit=crop',
      features: ['ProPILOT Assist', 'Remote Start', 'Heated Seats']
    },
    {
      id: 8,
      make: 'Jeep',
      model: 'Grand Cherokee',
      year: 2022,
      type: 'SUV',
      mileage: 28000,
      price: 35999,
      savedAmount: 3900,
      soldDate: '2024-02-20',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&h=300&fit=crop',
      features: ['4x4', 'Leather', 'Uconnect', 'Tow Package']
    },
    {
      id: 9,
      make: 'Tesla',
      model: 'Model 3',
      year: 2023,
      type: 'Luxury',
      mileage: 5000,
      price: 42999,
      savedAmount: 3500,
      soldDate: '2024-02-18',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=300&fit=crop',
      features: ['Autopilot', 'Premium Interior', 'Full Self-Driving']
    }
  ];

  // Filter and sort logic
  let filteredInventory = [...soldInventory];

  // Apply filters
  if (filterType !== 'all') {
    filteredInventory = filteredInventory.filter(car => car.type.toLowerCase() === filterType.toLowerCase());
  }

  if (filterMake !== 'all') {
    filteredInventory = filteredInventory.filter(car => car.make.toLowerCase() === filterMake.toLowerCase());
  }

  if (searchTerm) {
    filteredInventory = filteredInventory.filter(car => 
      car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.year.toString().includes(searchTerm)
    );
  }

  // Apply sorting
  filteredInventory.sort((a, b) => {
    switch (sortBy) {
      case 'priceLow':
        return a.price - b.price;
      case 'priceHigh':
        return b.price - a.price;
      case 'mileageLow':
        return a.mileage - b.mileage;
      case 'recent':
      default:
        return new Date(b.soldDate).getTime() - new Date(a.soldDate).getTime();
    }
  });

  // Get unique makes for filter
  const uniqueMakes = [...new Set(soldInventory.map(car => car.make))];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
            {currentContent.title}
          </h1>
          <p className="text-center text-gray-600 mb-12 text-lg">
            {currentContent.subtitle}
          </p>

          {/* Search and Filters */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="grid md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="md:col-span-2">
                <div className="flex">
                  <input
                    type="text"
                    placeholder={currentContent.search.placeholder}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-blue-500"
                  />
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
                    {currentContent.search.button}
                  </button>
                </div>
              </div>

              {/* Vehicle Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {currentContent.filters.type}
                </label>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option value="all">{currentContent.filters.all}</option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="truck">Truck</option>
                  <option value="luxury">Luxury</option>
                </select>
              </div>

              {/* Sort */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {currentContent.filters.sort}
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option value="recent">{currentContent.filters.recent}</option>
                  <option value="priceLow">{currentContent.filters.priceLow}</option>
                  <option value="priceHigh">{currentContent.filters.priceHigh}</option>
                  <option value="mileageLow">{currentContent.filters.mileageLow}</option>
                </select>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">$3,500</div>
              <div className="text-gray-600">{currentContent.stats.avgSavings}</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2-3</div>
              <div className="text-gray-600">{currentContent.stats.daysToFind}</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-yellow-500 mb-2">100%</div>
              <div className="text-gray-600">{currentContent.stats.satisfaction}</div>
            </div>
          </div>

          {/* Inventory Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredInventory.map((car) => (
              <div key={car.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={car.image}
                    alt={`${car.year} ${car.make} ${car.model}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {currentContent.card.sold}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-bold">
                    {currentContent.card.savedAmount}: ${car.savedAmount.toLocaleString()}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {car.year} {car.make} {car.model}
                  </h3>
                  <div className="flex justify-between text-gray-600 mb-3">
                    <span>{car.mileage.toLocaleString()} {currentContent.card.mileage}</span>
                    <span className="font-bold text-lg">${car.price.toLocaleString()}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {car.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm text-gray-500 mb-4">
                    {currentContent.card.soldDate}: {new Date(car.soldDate).toLocaleDateString()}
                  </div>
                  <button className="w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors">
                    {currentContent.card.callForInfo}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
              {currentContent.testimonial.title}
            </h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-600 italic mb-4">
                "{currentContent.testimonial.text}"
              </p>
              <p className="text-gray-700 font-semibold">
                {currentContent.testimonial.author}
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              {currentContent.cta.title}
            </h2>
            <p className="text-lg mb-8 opacity-95">
              {currentContent.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/car-finder"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-block"
              >
                {currentContent.cta.button}
              </a>
              <a
                href="tel:602-757-3514"
                className="bg-blue-800 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-900 transition-colors inline-block"
              >
                {currentContent.cta.callButton}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}