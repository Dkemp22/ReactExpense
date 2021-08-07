import ExpenseItem from "./components/ExpenseItem";

function App() {

  const expense = [
    {
      title: 'Rent',
      amount: 1317.94,
      date: new Date(2021, 8, 1)
    },
    {
      title: 'Car Note',
      amount: 377.18,
      date: new Date(2021, 8, 28)
    },
    {
      title: 'Phone Bill',
      amount: 133.00,
      date: new Date(2021, 8, 1)
    }
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}>
      </ExpenseItem>
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}>
      </ExpenseItem>
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}>
      </ExpenseItem>
    </div>
  );
}

export default App;
