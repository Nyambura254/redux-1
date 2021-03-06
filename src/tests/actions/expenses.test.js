import { editExpense, removeExpense, addExpense } from "../../actions/expenses";

test("should setup edit expense action object", () => {
    const action = editExpense("123abcd", {description: "Buy office desk"});
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123abcd",
        updates: {
            description: "Buy office desk"
        }
    })
})

test("should setup remove expense action", () => {
    const action = removeExpense({ id: 123 })
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: 123
    })
})

test("should setup add expense action object with provided values", () => {
    const expenseData = {
        description: 'Buy Coffee',
        amount: 5000,
        createdAt: 7500,
        note: 'awesome'
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            ...expenseData
        }
    })
})

test ("should setup add expense with default values", () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})