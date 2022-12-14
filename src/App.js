import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ConfigConn from './modules/Dashboard/ConfigureConnection/ConfigConn';
import DashBase from './modules/Dashboard/DashBase/DashBase';
import PubAndSub from './modules/Dashboard/PublishAndSubscribe/PubAndSub';
import IndexPage from './modules/IndexPage/IndexPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />}/>
        <Route path="dash" element={<DashBase />}/>
        <Route path="configconn" element={<ConfigConn />}/>
        <Route path="publishsubscribe" element={<PubAndSub />}/>

      </Routes>
    </Router>
  );
}

export default App;
