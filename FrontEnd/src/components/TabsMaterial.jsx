import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
  import { Link, useLocation, useNavigate } from "react-router-dom";
  
  export function TransparentTabs() {
    const data = [
      {
        label: "Login",
        value: "login",
        desc: "Sign in to access your employee profile, manage tasks, and stay connected with your team.",
      },
      {
        label: "Register",
        value: "register",
        desc: "Create an account to track performance, manage schedules, and collaborate seamlessly.",
      },
    ];
  
    const location = useLocation();
    const navigate = useNavigate();
  
    // Determine the current active tab based on the route
    const activeTab = location.pathname.includes("register") ? "register" : "login";
  
    // Find the active tab data
    const activeTabData = data.find((tab) => tab.value === activeTab);
  
    return (
      <Tabs
        value={activeTab}
        className="max-w-[40rem]"
        onChange={(value) => navigate(`/${value}`)} // Navigate on tab change
      >
        <TabsHeader
          className="bg-transparent"
          indicatorProps={{
            className: "bg-gray-900/10 shadow-none !text-gray-900",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              <Link to={`/${value}`}>{label}</Link>
            </Tab>
          ))}
        </TabsHeader>
  
        {/* Dynamically display the H2 for the active tab */}
        
  
        <TabsBody>
        <h2 className="text-xl font-semibold mt-4 text-start">
          {activeTabData?.label}
        </h2>
          {data.map(({ value, desc }) => (
            <TabPanel
              className="text-start text-gray-900"
              key={value}
              value={value}
            >
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    );
  }
  
  export default function TabsMaterial() {
    return (
      <>
        <TransparentTabs />
      </>
    );
  }
  