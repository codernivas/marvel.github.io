import Greeting from "@/components/Greetings";
import TodoList from "@/Projects/Todo/TodoComponent";
import Alert from "@/components/Alert"
import CustomButton from "@/components/ButtonCustom";
import Stepper from "@/Projects/Stepper/StepperComponent";
import PricingPage from "@/Projects/PricingPage";

export default function Home() {

  return (
    <>
      <Alert severity={"error"}/>
      <CustomButton children={"hi"}/>
      <PricingPage/>
    </>
  )
}
