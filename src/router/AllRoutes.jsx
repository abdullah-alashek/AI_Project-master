import LogInPage from './../modules/login/pages/LogInPage'
import HomePage from './../pages/HomePage'
import Artificium from './../modules/artificium/pages/Artificium'
import LibraryPage from './../modules/library/components/Library_Container/LibraryContainer'
import Chat from './../modules/chat/pages/Chat'
import Register from './../modules/signup/pages/Register/Register'
import RegisterTow from './../modules/signup/pages/Register2/RegisterTwo'
import RegisterThree from './../modules/signup/pages/RegisterThree/RegisterThree'
import RegisterFour from './../modules/signup/pages/RegisterFour/RegisterFour'
import Share from './../modules/artificium/components/Share/Share'
import EditImage from './../modules/artificium/components/component6/EditImage'
import { ROUTES } from '../constans/constRoutes'

export const baseRoute = 
    {
        path : ROUTES.BASE,
        element : <LogInPage />,
    }


export const homeRoute = 
    {
        path : ROUTES.HOME,
        element : <HomePage />,
    }


export const artificiumRoute = 
    {
        path : '/home',
        element : < Artificium />,
    }


export const libraryRoute = 
    {
        path : ROUTES.LIBRARY,
        element : <LibraryPage />,
    }


export const chatRoute = 
    {
        path : ROUTES.CHAT,
        element : <Chat />,
    }


export const signupRoute = 
    {
        path : ROUTES.SIGNUP,
        element : <Register />,
    }


export const loginRoute = 
    {
        path : ROUTES.LOGIN,
        element : <LogInPage />,
    }


export const workspaceRoute = 
    {
        path : ROUTES.WORKSPACE,
        element : <RegisterTow />,
    }


export const joinworkspaceRoute = 
    {
        path : ROUTES.JOINWORKSPACE,
        element : <RegisterThree />,
    }


export const accessworkspaceRoute = 
    {
        path : ROUTES.ACCESSWORKSPACE,
        element : <RegisterFour />,
    }


export const shareRoute = 
    {
        path : ROUTES.SHARE,
        element : <Share />,
    }


export const editimageRoute = 
    {
        path : ROUTES.EDITIMAGE,
        element : <EditImage />,
    }
