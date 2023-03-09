import Greeting from "@/components/Greetings";
import TodoList from "@/Projects/Todo/TodoComponent";
import Alert from "@/components/Alert"
import CustomButton from "@/components/ButtonCustom";
import Stepper from "@/Projects/Stepper/StepperComponent";
import PricingPage from "@/Projects/PricingPage";
import { LineChart } from "@/charts/LineChart";

export default function Home() {

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My Dataset',
        data: [
          { x: 'January', y: 10 },
          { x: 'February', y: 20 },
          { x: 'March', y: 15 },
          { x: 'April', y: 25 },
          { x: 'May', y: 30 },
          { x: 'June', y: 27 },
          { x: 'July', y: 40 }
        ]
      }
    ]
  };
  return (
    <>
     <PricingPage/>
     <LineChart/>
    </>
  )
}
