import { HashRouter } from "react-router-dom/cjs/react-router-dom.min";

import Navigation from "./common/Navigation";
import SwitchRoute from "./features/routes/SwitchRoute";

const App = () => (
  <HashRouter>
    <Navigation />
    <SwitchRoute />
  </HashRouter>
);

export default App;
