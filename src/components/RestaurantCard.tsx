import { PRICE_LABELS } from '../data/restaurants'
import type { Restaurant } from '../types/restaurant'

interface RestaurantCardProps {
  restaurant: Restaurant
  onSelect: (restaurant: Restaurant) => void
}

export function RestaurantCard({ restaurant, onSelect }: RestaurantCardProps) {
  const { name, cuisine, rating, reviewCount, priceRange, district, tags, image } =
    restaurant

  return (
    <article className="restaurant-card">
      <button
        type="button"
        className="restaurant-card__button"
        onClick={() => onSelect(restaurant)}
      >
        <img src={image} alt="" className="restaurant-card__image" loading="lazy" />
        <div>
          <h3 className="restaurant-card__name">{name}</h3>
          <p className="restaurant-card__info">
            {cuisine} · {district} · {PRICE_LABELS[priceRange]}
          </p>
          <p className="restaurant-card__rating">
            {rating.toFixed(1)} ({reviewCount}) · {tags.slice(0, 2).join(', ')}
          </p>
        </div>
      </button>
    </article>
  )
}
