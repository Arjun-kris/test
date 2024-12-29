import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Task from "./components/task/task";
import Addtask from "./components/addtask/addtask";

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: 'task', element: <Task /> },
  { path: 'addtask', element: <Addtask /> }
]);


export default router;
