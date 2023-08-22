import ExpensesOutput from "../components/ExpensesOutput.js/ExpensesOutput";

const RecentExpenses = () => {
  return <ExpensesOutput expensesPeriod="last 7 days" />;
};

export default RecentExpenses;
