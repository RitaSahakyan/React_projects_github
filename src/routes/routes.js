import {HomePage} from "../pages/HomePage";
import {ToDoListPage} from "../pages/ToDoListPage/ToDoListPage";
import {TestPage} from "../pages/TestPage";

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
  {
    path: "/testpage",
    exact: true,
    page: () => <TestPage />,
  },
];
