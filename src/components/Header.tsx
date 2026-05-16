export function Header() {
  return (
    <header className="header">
      <div className="header__brand">
        <span className="header__logo" aria-hidden="true">
          🍽
        </span>
        <div>
          <h1 className="header__title">맛집 탐색</h1>
          <p className="header__subtitle">서울 맛집을 한눈에 찾아보세요</p>
        </div>
      </div>
    </header>
  )
}
