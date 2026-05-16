import { CUISINES, DISTRICTS } from '../data/restaurants'

interface FilterPanelProps {
  cuisine: string
  district: string
  minRating: number
  openOnly: boolean
  onCuisineChange: (value: string) => void
  onDistrictChange: (value: string) => void
  onMinRatingChange: (value: number) => void
  onOpenOnlyChange: (value: boolean) => void
}

export function FilterPanel({
  cuisine,
  district,
  minRating,
  openOnly,
  onCuisineChange,
  onDistrictChange,
  onMinRatingChange,
  onOpenOnlyChange,
}: FilterPanelProps) {
  return (
    <aside className="filter-panel">
      <h2 className="filter-panel__title">필터</h2>

      <fieldset className="filter-group">
        <legend>음식 종류</legend>
        <div className="chip-list">
          {CUISINES.map((c) => (
            <button
              key={c}
              type="button"
              className={`chip ${cuisine === c ? 'chip--active' : ''}`}
              onClick={() => onCuisineChange(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="filter-group">
        <legend>지역</legend>
        <select
          className="filter-select"
          value={district}
          onChange={(e) => onDistrictChange(e.target.value)}
        >
          {DISTRICTS.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </fieldset>

      <fieldset className="filter-group">
        <legend>최소 평점</legend>
        <div className="rating-filter">
          {[0, 4, 4.5].map((r) => (
            <button
              key={r}
              type="button"
              className={`chip ${minRating === r ? 'chip--active' : ''}`}
              onClick={() => onMinRatingChange(r)}
            >
              {r === 0 ? '전체' : `${r}+`}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="toggle">
        <input
          type="checkbox"
          checked={openOnly}
          onChange={(e) => onOpenOnlyChange(e.target.checked)}
        />
        <span className="toggle__track" />
        <span>영업 중만 보기</span>
      </label>
    </aside>
  )
}
