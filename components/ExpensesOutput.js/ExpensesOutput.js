import { View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "a pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "a pair of trousers",
    amount: 29.99,
    date: new Date("2022-01-07"),
  },
  {
    id: "e3",
    description: "taco shells",
    amount: 19.99,
    date: new Date("2020-01-14"),
  },
  {
    id: "e4",
    description: "ground beef",
    amount: 9.99,
    date: new Date("2020-09-14"),
  },
  {
    id: "e5",
    description: "ground beef",
    amount: 19.99,
    date: new Date("2022-07-14"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;
