import { useState } from 'react';
import { Plus, X, ArrowRight, Check, Users, Briefcase, Info, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

type Vehicle = {
  id: string;
  name: string;
  image: string;
  passengers: number;
  luggage: number;
  transmission: string;
  fuel: string;
  ac: boolean;
  rate: string;
  level: string;
  bestFor: string;
};

const fleetSpecs: Vehicle[] = [
  {
    id: 'sedan',
    name: 'Executive Sedan',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80',
    passengers: 3,
    luggage: 2,
    transmission: 'Automatic',
    fuel: 'Petrol / Hybrid',
    ac: true,
    rate: 'From $85 / day',
    level: 'Premium Business',
    bestFor: 'Corporate meetings, Airport transfers (1-2 pax)'
  },
  {
    id: 'suv',
    name: 'Luxury SUV',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80',
    passengers: 4,
    luggage: 4,
    transmission: 'Automatic',
    fuel: 'Petrol / Diesel',
    ac: true,
    rate: 'From $140 / day',
    level: 'VVIP / Heavy Duty',
    bestFor: 'Delegations, Regional site visits, Family travel'
  },
  {
    id: 'minivan',
    name: 'Corporate Minivan',
    image: 'https://images.unsplash.com/photo-1559405407-7977a4eb1cc8?auto=format&fit=crop&q=80',
    passengers: 7,
    luggage: 6,
    transmission: 'Automatic',
    fuel: 'Diesel',
    ac: true,
    rate: 'From $180 / day',
    level: 'Group / Executive',
    bestFor: 'Team building, Group events, Airport transfers (4+ pax)'
  }
];

export default function VehicleComparison() {
  const [selectedVehicles, setSelectedVehicles] = useState<Vehicle[]>([fleetSpecs[0], fleetSpecs[1]]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddVehicle = (vehicle: Vehicle) => {
    if (selectedVehicles.length < 3 && !selectedVehicles.find(v => v.id === vehicle.id)) {
      setSelectedVehicles([...selectedVehicles, vehicle]);
    }
    setIsModalOpen(false);
  };

  const handleRemoveVehicle = (id: string) => {
    setSelectedVehicles(selectedVehicles.filter(v => v.id !== id));
  };

  const availableToAdd = fleetSpecs.filter(v => !selectedVehicles.find(sv => sv.id === v.id));

  return (
    <main className="flex-grow bg-gray-50 pb-24">
      {/* Hero Section */}
      <section className="bg-brand-maroon text-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">Compare Vehicles</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto font-medium">
            Side-by-side specifications to help you choose the perfect ride for your itinerary.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 -mt-8 relative z-10">
        <div className="bg-white shadow-xl border border-gray-100 p-8 rounded-none overflow-x-auto">
          
          <div className="min-w-[800px]">
            {/* Header / Selection Row */}
            <div className="flex border-b-2 border-gray-900 pb-6 mb-6">
              <div className="w-1/4 pr-6 flex flex-col justify-end">
                <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Fleet Specifications</h2>
                <p className="text-sm text-gray-500 font-medium">Compare up to 3 vehicles.</p>
              </div>
              
              {selectedVehicles.map((vehicle) => (
                <div key={vehicle.id} className="w-1/4 px-4 relative flex flex-col items-center">
                  {selectedVehicles.length > 1 && (
                    <button 
                      onClick={() => handleRemoveVehicle(vehicle.id)}
                      className="absolute top-0 right-4 w-8 h-8 bg-white border border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-500 rounded-full flex items-center justify-center transition-colors z-10 shadow-sm"
                      title="Remove vehicle"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                  <img src={vehicle.image} alt={vehicle.name} className="w-full h-32 object-cover mb-4 shadow border border-gray-100" />
                  <h3 className="text-lg font-bold text-gray-900 text-center">{vehicle.name}</h3>
                </div>
              ))}

              {selectedVehicles.length < 3 && (
                <div className="w-1/4 px-4 flex flex-col items-center justify-center">
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="w-full h-32 border-2 border-dashed border-gray-300 hover:border-brand-maroon hover:bg-brand-maroon/5 group flex flex-col items-center justify-center transition-colors"
                  >
                    <Plus className="w-8 h-8 text-gray-400 group-hover:text-brand-maroon mb-2 transition-colors" />
                    <span className="font-bold text-gray-500 group-hover:text-brand-maroon transition-colors text-sm uppercase tracking-wider">Add Vehicle</span>
                  </button>
                </div>
              )}
            </div>

            {/* Comparison Rows */}
            <div className="divide-y divide-gray-100">
              
              {/* Daily Rate Row */}
              <div className="flex py-4">
                <div className="w-1/4 pr-6 font-bold text-gray-700 flex items-center">Daily Rate</div>
                {selectedVehicles.map((vehicle) => (
                  <div key={`${vehicle.id}-rate`} className="w-1/4 px-4 text-center font-black text-brand-maroon text-lg">
                    {vehicle.rate}
                  </div>
                ))}
                {selectedVehicles.length < 3 && <div className="w-1/4 px-4"></div>}
              </div>

              {/* Passengers Row */}
              <div className="flex py-4">
                <div className="w-1/4 pr-6 font-bold text-gray-700 flex items-center"><Users className="w-4 h-4 mr-2" /> Passengers</div>
                {selectedVehicles.map((vehicle) => (
                  <div key={`${vehicle.id}-pax`} className="w-1/4 px-4 text-center font-medium text-gray-600">
                    Up to {vehicle.passengers}
                  </div>
                ))}
                {selectedVehicles.length < 3 && <div className="w-1/4 px-4"></div>}
              </div>

              {/* Luggage Row */}
              <div className="flex py-4">
                <div className="w-1/4 pr-6 font-bold text-gray-700 flex items-center"><Briefcase className="w-4 h-4 mr-2" /> Luggage (Large)</div>
                {selectedVehicles.map((vehicle) => (
                  <div key={`${vehicle.id}-luggage`} className="w-1/4 px-4 text-center font-medium text-gray-600">
                    {vehicle.luggage} Bags
                  </div>
                ))}
                {selectedVehicles.length < 3 && <div className="w-1/4 px-4"></div>}
              </div>

              {/* Transmission Row */}
              <div className="flex py-4">
                <div className="w-1/4 pr-6 font-bold text-gray-700 flex items-center">Transmission</div>
                {selectedVehicles.map((vehicle) => (
                  <div key={`${vehicle.id}-trans`} className="w-1/4 px-4 text-center font-medium text-gray-600">
                    {vehicle.transmission}
                  </div>
                ))}
                {selectedVehicles.length < 3 && <div className="w-1/4 px-4"></div>}
              </div>

              {/* Fuel Row */}
              <div className="flex py-4">
                <div className="w-1/4 pr-6 font-bold text-gray-700 flex items-center">Fuel Type</div>
                {selectedVehicles.map((vehicle) => (
                  <div key={`${vehicle.id}-fuel`} className="w-1/4 px-4 text-center font-medium text-gray-600">
                    {vehicle.fuel}
                  </div>
                ))}
                {selectedVehicles.length < 3 && <div className="w-1/4 px-4"></div>}
              </div>

              {/* AC Row */}
              <div className="flex py-4">
                <div className="w-1/4 pr-6 font-bold text-gray-700 flex items-center">Air Conditioning</div>
                {selectedVehicles.map((vehicle) => (
                  <div key={`${vehicle.id}-ac`} className="w-1/4 px-4 flex justify-center">
                    {vehicle.ac ? <Check className="w-5 h-5 text-green-600" /> : <X className="w-5 h-5 text-red-500" />}
                  </div>
                ))}
                {selectedVehicles.length < 3 && <div className="w-1/4 px-4"></div>}
              </div>

              {/* Service Level Row */}
              <div className="flex py-4">
                <div className="w-1/4 pr-6 font-bold text-gray-700 flex items-center">Service Level</div>
                {selectedVehicles.map((vehicle) => (
                  <div key={`${vehicle.id}-lvl`} className="w-1/4 px-4 flex justify-center">
                    <span className="inline-block bg-gray-100 text-gray-800 text-xs font-bold px-3 py-1 uppercase tracking-widest">{vehicle.level}</span>
                  </div>
                ))}
                {selectedVehicles.length < 3 && <div className="w-1/4 px-4"></div>}
              </div>

              {/* Best For Row */}
              <div className="flex py-4">
                <div className="w-1/4 pr-6 font-bold text-gray-700 flex items-start pt-1"><Info className="w-4 h-4 mr-2 shrink-0 mt-0.5" /> Best For</div>
                {selectedVehicles.map((vehicle) => (
                  <div key={`${vehicle.id}-best`} className="w-1/4 px-4 text-center font-medium text-gray-600 text-sm italic">
                    {vehicle.bestFor}
                  </div>
                ))}
                {selectedVehicles.length < 3 && <div className="w-1/4 px-4"></div>}
              </div>

              {/* Book Buttons Row */}
              <div className="flex pt-8 pb-4">
                <div className="w-1/4 pr-6"></div>
                {selectedVehicles.map((vehicle) => (
                  <div key={`${vehicle.id}-book`} className="w-1/4 px-4">
                    <Link 
                      to={`/start-reservation?type=${vehicle.id}`} 
                      className="w-full bg-brand-yellow hover:bg-brand-yellow-hover text-brand-maroon-dark font-bold py-3 uppercase tracking-wider text-xs transition-colors flex items-center justify-center text-center px-2"
                    >
                      Book {vehicle.name}
                    </Link>
                  </div>
                ))}
                {selectedVehicles.length < 3 && <div className="w-1/4 px-4"></div>}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Modal for adding a vehicle */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white max-w-2xl w-full p-8 shadow-2xl relative">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-tight">Select Vehicle to Compare</h2>
            
            <div className="space-y-4 max-h-[60vh] overflow-y-auto">
              {availableToAdd.length === 0 ? (
                <p className="text-gray-500 text-center py-8">All vehicles are currently selected.</p>
              ) : (
                availableToAdd.map(vehicle => (
                  <div key={vehicle.id} className="flex border border-gray-200 p-4 hover:border-brand-maroon cursor-pointer group transition-colors" onClick={() => handleAddVehicle(vehicle)}>
                    <img src={vehicle.image} alt={vehicle.name} className="w-32 h-24 object-cover shrink-0" />
                    <div className="ml-6 flex flex-col justify-center flex-grow">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-maroon">{vehicle.name}</h3>
                      <p className="text-sm font-medium text-gray-500 mb-2">{vehicle.level}</p>
                      <span className="text-xs font-bold text-brand-maroon uppercase tracking-widest flex items-center">
                        Add to comparison <ArrowRight className="w-3 h-3 ml-1" />
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
