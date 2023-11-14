import './App.css'
import { baseRoute, homeRoute, artificiumRoute, libraryRoute, chatRoute, signupRoute, loginRoute, workspaceRoute, joinworkspaceRoute, accessworkspaceRoute, shareRoute, editimageRoute } from './router/AllRoutes'
import { Route , Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
          <Route exact path={baseRoute.path} element = {baseRoute.element}></Route>
          <Route exact path={homeRoute.path} element = {homeRoute.element}>
            <Route exact path={artificiumRoute.path} element = {artificiumRoute.element}></Route>
            <Route exact path={libraryRoute.path} element = {libraryRoute.element}></Route>
            <Route exact path={chatRoute.path} element = {chatRoute.element}></Route>
          </Route>
          <Route exact path={signupRoute.path} element = {signupRoute.element}></Route>
          <Route exact path={loginRoute.path} element = {loginRoute.element}></Route>
          <Route exact path={workspaceRoute.path} element = {workspaceRoute.element}></Route>
          <Route exact path={joinworkspaceRoute.path} element = {joinworkspaceRoute.element}></Route>
          <Route exact path={accessworkspaceRoute.path} element = {accessworkspaceRoute.element}></Route>
          <Route exact path={shareRoute.path} element = {shareRoute.element}></Route>
          <Route exact path={editimageRoute.path} element = {editimageRoute.element}></Route>
      </Routes>
    </>
  )
}

export default App
