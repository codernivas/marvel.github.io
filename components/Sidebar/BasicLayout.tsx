import { ReactNode } from "react"
import SideBar from "./SideBar"

interface Props{
    children: ReactNode | ReactNode[];
}

export default function BasicLayout({ children}: Props) {
    return (
        <div className="layout">
        <SideBar/>
        {children}
        </div>
    )
}