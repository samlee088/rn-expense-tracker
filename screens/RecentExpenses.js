import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput.js/ExpensesOutput";
import { ExpensesContext } from "../store/expensesContext";
import { getDateMinusDays } from "../utils/date";
import { fetchExpenses } from "../utils/http";

function RecentExpenses() {
  // const expensesCtx = useContext(ExpensesContext);

  const [fetchedExpenses, setFetchedExpenses] = useState([]);

  useEffect(() => {
    async function getExpenses() {
      const expenses = await fetchExpenses();
      console.log(expenses);
      setFetchedExpenses(expenses);
    }

    getExpenses();
  }, []);

  console.log("fetched expenses" + fetchedExpenses);

  const recentExpenses = fetchedExpenses.expenses
    ? fetchedExpenses.expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);

        return expense.date >= date7DaysAgo && expense.date <= today;
      })
    : [];

  console.log("recent expenses" + recentExpenses);

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No expenses registered for the last 7 days."
    />
  );
}

export default RecentExpenses;
