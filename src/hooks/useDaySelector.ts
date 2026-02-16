import { useState, useCallback } from 'react'

const ITEM_HEIGHT = 56

export function useDaySelector(initialDay = 3) {
  const [selectedDay, setSelectedDay] = useState(initialDay)

  const selectDay = useCallback((day: number) => {
    setSelectedDay(day)
  }, [])

  const indicatorOffset = (selectedDay - 1) * ITEM_HEIGHT

  return {
    selectedDay,
    selectDay,
    indicatorOffset,
    itemHeight: ITEM_HEIGHT,
  }
}
