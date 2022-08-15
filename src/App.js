import { Routes, Route } from 'react-router-dom'
import { Home, Login, Feed } from './containers/public'
import { System, General } from './containers/system'
import { path } from './ultils/constant'

function App() {
  return (
    <div className="w-screen h-screen">
      <Routes>

        {/*Public routes */}
        <Route path={path.HOME} element={<Home />}>
          <Route path={path.FEED} element={<Feed />} />
        </Route>

        {/*Login route */}
        <Route path={path.LOGIN} element={<Login />} />

        {/*Private routes */}
        <Route path={path.SYSTEM} element={<System />} >
          <Route path={path.GENERAL} element={<General />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
