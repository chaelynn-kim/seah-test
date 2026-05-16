import { useMemo, useState } from 'react'
import { restaurants } from '../data/restaurants'
import type { Cuisine } from '../types/restaurant'

export function useRestaurantFilter() {
  const [query, setQuery] = useState('')
  const [cuisine, setCuisine] = useState<string>('전체')
  const [district, setDistrict] = useState<string>('전체')
  const [minRating, setMinRating] = useState(0)
  const [openOnly, setOpenOnly] = useState(false)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()

    return restaurants.filter((r) => {
      if (cuisine !== '전체' && r.cuisine !== cuisine) return false
      if (district !== '전체' && r.district !== district) return false
      if (r.rating < minRating) return false
      if (openOnly && !r.isOpen) return false

      if (!q) return true

      const haystack = [
        r.name,
        r.cuisine,
        r.district,
        r.address,
        r.description,
        ...r.tags,
      ]
        .join(' ')
        .toLowerCase()

      return haystack.includes(q)
    })
  }, [query, cuisine, district, minRating, openOnly])

  const setCuisineFilter = (value: string) => {
    setCuisine(value)
  }

  const setDistrictFilter = (value: string) => {
    setDistrict(value)
  }

  return {
    query,
    setQuery,
    cuisine: cuisine as Cuisine | '전체',
    setCuisine: setCuisineFilter,
    district,
    setDistrict: setDistrictFilter,
    minRating,
    setMinRating,
    openOnly,
    setOpenOnly,
    filtered,
    total: restaurants.length,
  }
}
