import React, { useState } from "react";
import Breadcrumbs from "./components/breadcrumbs/Breadcrumbs";
import Sidebar from "./components/sidebar/Sidebar";

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

  const sidebarItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon : '🤓',
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
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-6">UI Component Library</h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4">Breadcrumbs</h2>
              <Breadcrumbs items={breadcrumbItems} />
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Sidebar</h2>
              <div className="flex">
                <Sidebar  items={sidebarItems} defaultActive="dashboard"/>
                <div className="ml-4 p-4 bg-white rounded-lg flex-1">
                  Main Content Area
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
