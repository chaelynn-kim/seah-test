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

const RATING_OPTIONS = [
  { value: 0, label: '전체' },
  { value: 4, label: '4.0+' },
  { value: 4.5, label: '4.5+' },
]

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
        <legend>종류</legend>
        <select
          className="filter-select"
          value={cuisine}
          onChange={(e) => onCuisineChange(e.target.value)}
        >
          {CUISINES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
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
        <legend>평점</legend>
        <select
          className="filter-select"
          value={minRating}
          onChange={(e) => onMinRatingChange(Number(e.target.value))}
        >
          {RATING_OPTIONS.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </fieldset>

      <label className="filter-check">
        <input
          type="checkbox"
          checked={openOnly}
          onChange={(e) => onOpenOnlyChange(e.target.checked)}
        />
        영업 중
      </label>
    </aside>
  )
}
