interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="search-bar">
      <label htmlFor="search" className="visually-hidden">
        검색
      </label>
      <input
        id="search"
        type="search"
        className="search-bar__input"
        placeholder="검색"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
