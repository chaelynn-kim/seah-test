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
        <p className="empty-state__emoji" aria-hidden="true">
          🍜
        </p>
        <p className="empty-state__title">검색 결과가 없습니다</p>
        <p className="empty-state__hint">다른 키워드나 필터로 다시 시도해 보세요.</p>
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
