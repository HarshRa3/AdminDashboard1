import React from 'react'
import MiniDrawer from '../components/Drawer'

const layout = ({children}) => {
  return (
    <div>
        <MiniDrawer pages={children} />
    </div>
  )
}

export default layout
