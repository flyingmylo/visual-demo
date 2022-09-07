import styles from '../styles/Home.module.scss'
// import {Button} from 'antd'
// import { Box } from '../components/Box'
import { Canvas } from '../components/Canvas'

import { Layout, Card } from 'antd'
import React from 'react'
import { DndProvider, useDrag } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Config from '../components/Config'
import {Item} from  '../components/Item'

export default function Home () {
  return (
    <div className={styles.container}>
      <DndProvider backend={HTML5Backend}>
        <Card className={styles.componentsList}>
          {Config.map(comp => <Item 
            style={{marginBottom: '5px'}} 
            key={comp.name}  name={comp.name} type={comp.type}>
                  {comp.name}
                </Item>)}
        </Card>
        <div className={styles.canvasContainer}>
          <Canvas />
        </div>
      </DndProvider>
    </div>
  )
}
