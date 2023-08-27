import axios from "axios";

const BACKEND_URL =
  "https://react-native-expensetrac-2b40c-default-rtdb.firebaseio.com";

export function storeExpense(expenseData) {
  axios.post(BACKEND_URL + "/expenses.json", expenseData);
}

export function fetchExpenses() {
  axios.get(BACKEND_URL + "/expenses.json");
}
