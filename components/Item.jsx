import { useDrag } from 'react-dnd'
const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
}
export const Item = function Item({ name,type }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type,
    item: { name },
    previewOptions:{
      x:0,y:0
    },
    end: (item, monitor,previewOptions) => {
      // console.log(item,previewOptions)
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        console.log('from Item',item,dropResult)
        // alert(`You dropped ${item.name} into ${dropResult.name}!`)
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))
  const opacity = isDragging ? 0.4 : 1
  return (
    <div ref={drag} style={{ ...style, opacity }} data-testid={`box`}>
      {name}
    </div>
  )
}
