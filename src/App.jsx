import './index.css';
import Hero from './components/Hero';
import Filters from './components/Filters';
import Resources from './components/Resources';
import { useState } from 'react';

export default function App() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  return (
    <div className='container mx-auto px-4 py-20'>
      <Hero />
      <Filters selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
      <Resources selectedFilter={selectedFilter} />
    </div>
  );
}
