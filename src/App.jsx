import React, { useState } from "react";
import Breadcrumbs from "./components/breadcrumbs/Breadcrumbs";
import Sidebar from "./components/sidebar/Sidebar";
import Tabs from "./components/tabs/Tabs";
import Stepper from "./components/stepper/Stepper";

function App() {
  const breadcrumbItems = [
    {
      label: "Home",
      onClick: () => console.log("Home Clicked"),
    },
    {
      label: "Library",
      onClick: () => console.log("Library Clicked"),
    },
    {
      label: "Content",
    },
  ];

  const tabItems = [
    { id: "tab1", label: "Tab 1", content: <div>Content for Tab 1</div> },
    { id: "tab2", label: "Tab 2", content: <div>Content for Tab 2</div> },
  ];

  const stepperSteps = [
    { id: "step1", label: "Step 1" },
    { id: "step2", label: "Step 2" },
    { id: "step3", label: "Step 3" },
  ];

  const sidebarItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: "🤓",
      onClick: () => console.log("Dashboard clicked"),
    },
    {
      id: "projects",
      label: "Projects",
      icon: "📁",
      subItems: [
        {
          id: "project1",
          label: "Project 1",
          onClick: () => console.log("Project 1 clicked"),
        },
        {
          id: "project2",
          label: "Project 2",
          onClick: () => console.log("Project 2 clicked"),
        },
      ],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-100 ">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-6">
            Mrinal's Component Library
          </h1>

          <div className="space-y-8">
            <section className="border-2 p-4 shadow-2xl rounded-xl">
              <h2 className="text-xl font-semibold mb-4">Breadcrumbs</h2>
              <Breadcrumbs items={breadcrumbItems} />
            </section>

            <section className="border-2 p-4 shadow-2xl rounded-xl">
              <h2 className="text-xl font-semibold mb-4">Sidebar</h2>
              <div className="flex">
                <Sidebar items={sidebarItems} defaultActive="dashboard" />
                <div className="ml-4 p-4 bg-white rounded-lg flex-1">
                  Main Content Area
                </div>
              </div>
            </section>

            <section className="border-2 p-4 shadow-2xl rounded-xl">
              <h2 className="text-xl font-semibold mb-4">Tabs</h2>
              <Tabs tabs={tabItems} defaultActive="tab1" />
            </section>

            <section className="border-2 p-4 shadow-xl hover:shadow-3xl rounded-xl">
              <h2 className="text-xl font-semibold mb-4">Stepper</h2>
              <Stepper steps={stepperSteps} currentStep={3} />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
