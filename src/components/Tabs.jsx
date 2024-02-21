import { useContext, useState } from "react";
import { createContext } from "react";
import { twMerge } from 'tailwind-merge'
const TabsContext = createContext();

const Tabs = ({ children }) => {
    const [activeTab, setActiveTab] = useState(0);

    const changeTab = (tab) => setActiveTab(tab);

    return (
        <TabsContext.Provider value={{ activeTab, changeTab }}>
            <div className="w-[600px] rounded shadow-xl">{children}</div>
        </TabsContext.Provider>
    )
}

const Tab = ({ index, children }) => {
    const { activeTab, changeTab } = useContext(TabsContext);

    return (
        <div onClick={() => changeTab(index)} className={twMerge("py-2 transition tracking-wide text-center w-full bg-gray-200 cursor-pointer px-2 font-black text-gray-600", index === activeTab && 'bg-sky-700 text-gray-100')} >
            {children}
        </div >
    )
}

const TabPanel = ({ index, children }) => {
    const { activeTab } = useContext(TabsContext);
    return index === activeTab ? (
        <div className="bg-gray-100 flex justify-center items-center p-10 text-md font-bold tracking-wide text-gray-300">
            {children}
        </div>
    ) : null
}


Tabs.Tab = Tab;
Tabs.TabPanel = TabPanel;
export default Tabs;