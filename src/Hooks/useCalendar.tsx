import { DAYSOFMONTH } from "../Utils/Consts"
import { getLastDayOfMonth, getFirstDayOfMonthInWeek } from "../Utils/Date"
import { useState } from "react"

export const useCalendar = () => {
    const [state, setState] = useState({baseDate: new Date()})
    const currentMonth = state.baseDate.getMonth()
    const currentYear = state.baseDate.getFullYear()

    const changeBaseDate = (months: number, sum: boolean) => {
        const now = new Date(state.baseDate);
        sum ? now.setMonth(now.getMonth() + months) : now.setMonth(now.getMonth() - months)
        setState(old => ({...old, baseDate: now}))
    }

    const increaseMonth = (months: number) => {
        changeBaseDate(months, true)
    }

    const decreaseMonth = (months: number) => {
        changeBaseDate(months, false)
    }

    const createMonth = () => {
        const lastDayOfMonth = getLastDayOfMonth(currentYear, currentMonth);
        
        const lastMonthDate = new Date(new Date(currentMonth - 1))
        const lastMonth = lastMonthDate.getMonth()
        const lastYear = lastMonthDate.getFullYear()
        const lastDayOfLastMonth = getLastDayOfMonth(lastYear, lastMonth);
        
        const firstDayOfMonthInWeek = getFirstDayOfMonthInWeek(currentYear, currentMonth)
      
        const daysOfLastMonth = new Array(firstDayOfMonthInWeek).fill(0).map((_, index) => lastDayOfLastMonth - index).reverse()
        const daysOfMonth = new Array(lastDayOfMonth).fill(0).map((_, index) => index + 1)
        const daysOfNextMonth = new Array(DAYSOFMONTH -lastDayOfMonth - firstDayOfMonthInWeek).fill(0).map((_, index) => index + 1)
      
        return [...daysOfLastMonth, ...daysOfMonth, ...daysOfNextMonth]
    }

    return {
        increaseMonth,
        decreaseMonth,
        createMonth,
        currentMonth,
        currentYear
    }
}