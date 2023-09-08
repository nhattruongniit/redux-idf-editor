import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

// pages
import { Dashboard } from "./modules/Dashboard";
import React from "react";

// redux
import { setProject } from "./redux/project.action";
import { setDocumentId } from "./redux/document.action";

// mock data
import { project } from "./mockData/project";
import { document_id } from "./mockData/document";

function App() {
  const dispatch = useDispatch();

  // init data
  React.useEffect(() => {
    dispatch(setProject(project.data));
    dispatch(setDocumentId(document_id));
  }, [dispatch]);

  return (
    <main className="bg-white dark:bg-gray-900 h-[calc(100vh)]">
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </main>
  );
}

export default App;
