interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="search-bar">
      <label htmlFor="search" className="visually-hidden">
        맛집 검색
      </label>
      <span className="search-bar__icon" aria-hidden="true">
        🔍
      </span>
      <input
        id="search"
        type="search"
        className="search-bar__input"
        placeholder="이름, 메뉴, 지역으로 검색..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button
          type="button"
          className="search-bar__clear"
          onClick={() => onChange('')}
          aria-label="검색어 지우기"
        >
          ✕
        </button>
      )}
    </div>
  )
}
