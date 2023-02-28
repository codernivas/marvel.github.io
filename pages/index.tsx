import Greeting from "@/components/Greetings";
import TodoList from "@/Projects/Todo/TodoComponent";
import Alert from "@/components/Alert"
import CustomButton from "@/components/ButtonCustom";

export default function Home() {
 
  return (
    <>
      <Alert severity={"error"}/>
      <CustomButton children={"hi"}/>
    </>
  )
}
