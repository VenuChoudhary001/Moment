import React, { Component } from 'react'
import TabCards from '../cards/tabCards'

const TabNav=({id,title,des,icon,activeTab,setActiveTab})=>{
    return(
        <>
          <TabCards title={title} des={des} setActiveTab={setActiveTab} icon={icon} activeTab={activeTab} id={id} />
        </>
    )
}

export default TabNav;