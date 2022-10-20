export const getLastDayOfMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
}

export const getFirstDayOfMonthInWeek = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
}
