import { PRICE_LABELS } from '../data/restaurants'
import type { Restaurant } from '../types/restaurant'

interface RestaurantDetailProps {
  restaurant: Restaurant
  onClose: () => void
}

export function RestaurantDetail({ restaurant, onClose }: RestaurantDetailProps) {
  const status = restaurant.isOpen ? '영업중' : '영업종료'

  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <dialog
        className="detail-modal"
        open
        onClick={(e) => e.stopPropagation()}
        aria-labelledby="detail-title"
      >
        <button type="button" className="detail-modal__close" onClick={onClose}>
          닫기
        </button>

        <h2 id="detail-title" className="detail-modal__title">
          {restaurant.name}
        </h2>

        <p className="detail-modal__meta">
          {status} · {restaurant.cuisine} · {PRICE_LABELS[restaurant.priceRange]} ·{' '}
          {restaurant.rating.toFixed(1)} ({restaurant.reviewCount})
        </p>

        <p className="detail-modal__meta">{restaurant.address}</p>

        <p className="detail-modal__description">{restaurant.description}</p>

        <ul className="detail-modal__tags">
          {restaurant.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </dialog>
    </div>
  )
}
