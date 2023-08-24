import { useLayoutEffect } from "react";
import { Text, View } from "react-native";

const ManageExpense = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;

  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edited Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return (
    <View>
      <Text>ManageExpense </Text>
    </View>
  );
};

export default ManageExpense;
