import { PRICE_LABELS } from '../data/restaurants'
import type { Restaurant } from '../types/restaurant'

interface RestaurantCardProps {
  restaurant: Restaurant
  onSelect: (restaurant: Restaurant) => void
}

export function RestaurantCard({ restaurant, onSelect }: RestaurantCardProps) {
  const { name, cuisine, rating, reviewCount, priceRange, district, tags, image, isOpen } =
    restaurant

  return (
    <article className="restaurant-card">
      <button
        type="button"
        className="restaurant-card__button"
        onClick={() => onSelect(restaurant)}
      >
        <div className="restaurant-card__image-wrap">
          <img src={image} alt={name} className="restaurant-card__image" loading="lazy" />
          <span className={`restaurant-card__badge ${isOpen ? 'is-open' : 'is-closed'}`}>
            {isOpen ? '영업중' : '영업종료'}
          </span>
        </div>

        <div className="restaurant-card__body">
          <div className="restaurant-card__meta">
            <span className="restaurant-card__cuisine">{cuisine}</span>
            <span className="restaurant-card__price">{PRICE_LABELS[priceRange]}</span>
          </div>

          <h3 className="restaurant-card__name">{name}</h3>

          <p className="restaurant-card__rating">
            <span aria-hidden="true">★</span> {rating.toFixed(1)}
            <span className="restaurant-card__reviews">({reviewCount})</span>
          </p>

          <p className="restaurant-card__district">{district}</p>

          <ul className="restaurant-card__tags">
            {tags.slice(0, 3).map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </button>
    </article>
  )
}
