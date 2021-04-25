import React from  'react';
import {Switch} from 'react-router';
import PublicRoute from "./components/PublicRoute";
import "rsuite/dist/styles/rsuite-default.css"
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Signin from './pages/Signin';
import "./styles/main.scss";
import { ProfileProvider } from './context/profile.context';

function App() {
  return (
    <ProfileProvider>
    <Switch>
      <PublicRoute path="/signin"><Signin /></PublicRoute>
      <PrivateRoute path="/"><Home /></PrivateRoute>
    </Switch>
    </ProfileProvider>
  );
}

export default App;
