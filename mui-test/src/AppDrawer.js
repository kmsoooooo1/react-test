import DrawerTest from "./drawer/DrawerTest";
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Authentication from './drawer/pages/authentication/Authentication';
import Database from './drawer/pages/database/Database';
import Storage from './drawer/pages/storage/Storage';
import Hosting from './drawer/pages/hosting/Hosting';
import Functions from './drawer/pages/functions/Functions';
import MachineLearning from './drawer/pages/machineLearning/MachineLearning';

function AppDrawer() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DrawerTest />}>
          <Route path="authentication" element={<Authentication />}/>
          <Route path="database" element={<Database />}/>
          <Route path="storage" element={<Storage />}/>
          <Route path="hosting" element={<Hosting />}/>
          <Route path="functions" element={<Functions />}/>
          <Route path="machine-learning" element={<MachineLearning />}/>
        </Route>
      </Routes>
  </Router>
  );
}

export default AppDrawer;
