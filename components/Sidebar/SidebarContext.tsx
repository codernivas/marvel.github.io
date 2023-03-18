import {createContext, useState, ReactNode} from "react"

const initialValue = {
    isCollapsedSidebar: false,
    toggleSidebarCollapsedHandler: () => {},
};

export const SidebarContext = createContext(initialValue);

interface Props{
    children: ReactNode | ReactNode[];
}

const SideBarProvider=({children}:Props)=>{
    const [isCollapsedSidebar, setIsSidebarCollapsed] = useState<boolean>(false)

    const toggleSidebarCollapsedHandler=()=>{
    setIsSidebarCollapsed((prev)=>!prev)
    }
    return(
        <SidebarContext.Provider 
        value={{isCollapsedSidebar, toggleSidebarCollapsedHandler}}
        >
            {children}
        </SidebarContext.Provider>
    )
}

export default SideBarProvider