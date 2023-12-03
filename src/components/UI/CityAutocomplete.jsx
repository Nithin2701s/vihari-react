import React, { useState, useEffect } from 'react';

const CityAutocomplete = () => {
  const [query, setQuery] = useState('');
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&countrycodes=IN&q=${query}`);
        const data = await response.json();

        if (data.length > 0) {
          setCities(data.map(result => result.display_name));
        } else {
          setCities([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setCities([]);
      }
    };

    if (query.length >= 3) {
      fetchCities();
    } else {
      setCities([]);
    }
  }, [query]);

  return (
    <div className="container mt-4">
      <label htmlFor="cityInput" className="form-label">Enter City:</label>
      <div className="input-group">
        <input
          type="text"
          id="cityInput"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type to filter cities"
          className="form-control"
        />
        {cities.length > 0 && (
          <ul className="list-group">
            {cities.map((city, index) => (
              <li key={index} onClick={() => setQuery(city)} className="list-group-item">
                {city}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CityAutocomplete;
