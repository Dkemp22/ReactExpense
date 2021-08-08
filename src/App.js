
import Expenses from "./components/Expenses";

function App() {

  const expenses = [
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
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
