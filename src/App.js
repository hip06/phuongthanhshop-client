import { Routes, Route } from 'react-router-dom'
import { Home, Login, Feed } from './containers/public'
import { System, General, CreateProduct, ManageProduct } from './containers/system'
import { path } from './ultils/constant'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from './store/actions'
import { useEffect } from 'react'

function App() {
  const { isLoggedIn } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  // Khi reload page get userdata again
  useEffect(() => {
    isLoggedIn && dispatch(actions.getCurrent())
  }, [isLoggedIn])

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
          <Route path={path.MANAGE_PRODUCT} element={<ManageProduct />} />
          <Route path={path.CREATE_PRODUCT} element={<CreateProduct />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
