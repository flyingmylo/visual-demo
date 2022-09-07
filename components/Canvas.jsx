import { useDrop } from 'react-dnd'
import Config from '../components/Config'
import Components from './Components'
import React, {useState} from 'react'

const style = {
  height: '100%',
  width: '100%',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
}
export const Canvas = () => {

  const [tagName,setTagName] = useState([])
  const [{canDrop , isOver}, drop] = useDrop(() => ({
    accept: Config.map(item=>item.type),
    drop: (item,monitor) => {
      // console.log('form Canvas',item,monitor)
      
      const {name} = item
      setTagName([...tagName,name])
      // setChild(Components[name])
      console.log(tagName)

    },
    collect: (monitor) => {
      return {
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }
    },
  }))


  const isActive = canDrop && isOver
  let backgroundColor = 'grey'
  if (isActive) {
    backgroundColor = 'green'
  } else if (canDrop) {
    backgroundColor = 'darkkhaki'
  }
  return ( 
    <div id="canvas" ref={drop} style={{ ...style, backgroundColor }} data-testid="canvas">
      {
        tagName.map( item => {
          const Child =  Components[item] || (()=>null)
          return <Child key={item}/>
        } )
      }
      {isActive ? 'Release to drop' : 'Drag a box here'}
    </div>
  )
}
