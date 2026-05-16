import type { Restaurant } from '../types/restaurant'
import { RestaurantCard } from './RestaurantCard'

interface RestaurantListProps {
  restaurants: Restaurant[]
  onSelect: (restaurant: Restaurant) => void
}

export function RestaurantList({ restaurants, onSelect }: RestaurantListProps) {
  if (restaurants.length === 0) {
    return (
      <div className="empty-state">
        <p>검색 결과가 없습니다.</p>
      </div>
    )
  }

  return (
    <ul className="restaurant-list">
      {restaurants.map((r) => (
        <li key={r.id}>
          <RestaurantCard restaurant={r} onSelect={onSelect} />
        </li>
      ))}
    </ul>
  )
}
