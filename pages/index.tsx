import Greeting from "@/components/Greetings";
import TodoList from "@/Projects/Todo/TodoComponent";
import Alert from "@/components/Alert"
import CustomButton from "@/components/ButtonCustom";
import PricingPage from "@/Projects/PricingPage";
import SideBar from "@/components/Sidebar/SideBar";
import BaseLayout from "@/components/Sidebar/BasicLayout";
import TestUser from "@/components/Test";

export default function Home() {


  return (
    <BaseLayout>
       <TestUser/>
    </BaseLayout>
  )
}
