import BasicCalendar from "./calender/BasicCalendar";
import BasicFormControl from "./formcontrol/BasicFormControl";
import MessageItem from "./messageItem/MessageItem";
import BasicTree from "./tree/BasicTree";

function App() {
  return (
    <div className="App">
      <BasicFormControl />
      <BasicTree />
      <BasicCalendar />
      <MessageItem />
    </div>
  );
}

export default App;
