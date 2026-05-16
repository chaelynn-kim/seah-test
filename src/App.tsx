import { useState } from 'react'
import { FilterPanel } from './components/FilterPanel'
import { Header } from './components/Header'
import { RestaurantDetail } from './components/RestaurantDetail'
import { RestaurantList } from './components/RestaurantList'
import { SearchBar } from './components/SearchBar'
import { useRestaurantFilter } from './hooks/useRestaurantFilter'
import type { Restaurant } from './types/restaurant'

function App() {
  const {
    query,
    setQuery,
    cuisine,
    setCuisine,
    district,
    setDistrict,
    minRating,
    setMinRating,
    openOnly,
    setOpenOnly,
    filtered,
    total,
  } = useRestaurantFilter()

  const [selected, setSelected] = useState<Restaurant | null>(null)

  return (
    <div className="app">
      <Header />

      <main className="main">
        <section className="main__toolbar">
          <SearchBar value={query} onChange={setQuery} />
          <p className="result-count">
            {filtered.length} / {total}
          </p>
        </section>

        <div className="main__layout">
          <FilterPanel
            cuisine={cuisine}
            district={district}
            minRating={minRating}
            openOnly={openOnly}
            onCuisineChange={setCuisine}
            onDistrictChange={setDistrict}
            onMinRatingChange={setMinRating}
            onOpenOnlyChange={setOpenOnly}
          />

          <section className="main__content" aria-label="맛집 목록">
            <RestaurantList restaurants={filtered} onSelect={setSelected} />
          </section>
        </div>
      </main>

      {selected && (
        <RestaurantDetail restaurant={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  )
}

export default App
