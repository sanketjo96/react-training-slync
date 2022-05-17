import { monthMap } from "../Data/Months"

export const aggregateExpense = (expenseData) => {
    const map = {}
    expenseData.map(expense => {
        const monthName = monthMap[expense.month]
        if (map[monthName]) {
            map[monthName] += expense.price
        } else {
            map[monthName] = expense.price
        }
    })

    return map;
}