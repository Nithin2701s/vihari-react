import React from 'react';

const BusList = () => {
    const buses = [
        { id: 1, name: 'Bus A', route: 'Route 1' },
        { id: 2, name: 'Bus B', route: 'Route 2' },
        // Add more buses as needed
      ];
  return (
    <div>
      <h2>Bus List</h2>
      <ul>
        {buses.map(bus => (
          <li key={bus.id}>
            <strong>{bus.name}</strong> - Route: {bus.route}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusList;
