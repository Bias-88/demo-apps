import { useState } from 'react'
import './App.css'
import AppRouter from './AppRouter'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'

function App() {
  return (
    <>
    <Provider store={appStore}>
      <AppRouter/>
    </Provider>    
    </>
  )
}

export default App
