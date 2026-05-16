import { PRICE_LABELS } from '../data/restaurants'
import type { Restaurant } from '../types/restaurant'

interface RestaurantDetailProps {
  restaurant: Restaurant
  onClose: () => void
}

export function RestaurantDetail({ restaurant, onClose }: RestaurantDetailProps) {
  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <dialog
        className="detail-modal"
        open
        onClick={(e) => e.stopPropagation()}
        aria-labelledby="detail-title"
      >
        <button type="button" className="detail-modal__close" onClick={onClose} aria-label="닫기">
          ✕
        </button>

        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="detail-modal__image"
        />

        <div className="detail-modal__content">
          <div className="detail-modal__header">
            <span className={`detail-modal__status ${restaurant.isOpen ? 'is-open' : 'is-closed'}`}>
              {restaurant.isOpen ? '영업중' : '영업종료'}
            </span>
            <span className="detail-modal__cuisine">{restaurant.cuisine}</span>
            <span className="detail-modal__price">{PRICE_LABELS[restaurant.priceRange]}</span>
          </div>

          <h2 id="detail-title" className="detail-modal__title">
            {restaurant.name}
          </h2>

          <p className="detail-modal__rating">
            ★ {restaurant.rating.toFixed(1)}{' '}
            <span>(리뷰 {restaurant.reviewCount}개)</span>
          </p>

          <p className="detail-modal__address">{restaurant.address}</p>
          <p className="detail-modal__description">{restaurant.description}</p>

          <ul className="detail-modal__tags">
            {restaurant.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </dialog>
    </div>
  )
}
