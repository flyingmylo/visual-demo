import { useDrop } from 'react-dnd'
import { ItemTypes } from './ItemTypes.jsx'
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
export const Dustbin = () => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: () => ({ name: 'Dustbin' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))
  const isActive = canDrop && isOver
  let backgroundColor = 'grey'
  if (isActive) {
    backgroundColor = 'green'
  } else if (canDrop) {
    backgroundColor = 'darkkhaki'
  }
  return (
    <div ref={drop} style={{ ...style, backgroundColor }} data-testid="dustbin">
      {isActive ? 'Release to drop' : 'Drag a box here'}
    </div>
  )
}
