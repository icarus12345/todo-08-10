import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "@/layout/default";
import TaskPage from "@/pages/tasks/page";
import NotFoundPage from "@/pages/not-found";
import { Toaster } from "@ui/toaster"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<TaskPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  )
}

export default App
