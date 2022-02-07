import { HomePage } from "../pages/HomePage";
import { ToDoListPage } from "../pages/ToDoListPage";
import { ToDoListHeader } from "../pages/ToDoListPage/components/ToDoListHeader";

export const routes = [
  {
    path: "/",
    exact: true,
    page: () => <HomePage />,
  },
  {
    path: "/todolist",
    exact: true,
    page: () => <ToDoListPage />,
  },
];
