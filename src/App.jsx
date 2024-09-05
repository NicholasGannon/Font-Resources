import './index.css'
import Hero from './components/Hero'
import Filters from './components/Filters'
import Resources from './components/Resources'

export default function App() {
  return (
    <div className='container mx-auto px-4 py-20'>
      <Hero />
      <Filters />
      <Resources />
    </div>
  )
}