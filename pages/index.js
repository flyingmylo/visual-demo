import styles from '../styles/Home.module.scss'
// import {Button} from 'antd'
import { Box } from '../components/Box'
import {Dustbin} from '../components/Container'

import { Layout, Card } from 'antd'
import React from 'react'
import { DndProvider,useDrag } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export default function Home () {
  return (
    <div className={styles.container}>
      <DndProvider backend={HTML5Backend}>
        <Card className={styles.componentsList}>
          <Box name="按钮"></Box>
        </Card>

        <div className={styles.canvasContainer}>
          <Dustbin />
        </div>
      </DndProvider>
    </div>
  )
}
