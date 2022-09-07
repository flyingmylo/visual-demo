import { useDrag } from 'react-dnd'

const style = {
  border: '1px dashed gray',

  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
}
export const Img = function Img({ name }) {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: 'Img',
    item: { name },
    previewOptions:{
      x:0,y:0
    },
    end: (item, monitor,previewOptions) => {
      // console.log(item,previewOptions)
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`)
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
      图片
    </div>
  )
}
