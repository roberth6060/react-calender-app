
import { useRoutes } from "react-router-dom";
import Calendar from "../components/Calendar/Calendar";
import EventDetail from "../components/EventDetail/EventDetail";

const routes = [
  {
    path: "/*",
    children: [
      {
         index: true,
        element: <Calendar/>,
      },
          {
           path:":date",
            element: <EventDetail />,
          },
        ],
  },  
];

const Routes = () => {
  const elements = useRoutes(routes);
  return elements;
};

export default Routes;