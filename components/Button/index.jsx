import { useDrag } from 'react-dnd'
import { ItemTypes } from '../ItemTypes'
const style = {
	border: '1px dashed gray',

	padding: '0.5rem 1rem',
	marginRight: '1.5rem',
	marginBottom: '1.5rem',
	cursor: 'move',
	float: 'left',
}
export const Button = function Button({ name }) {
	const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
		type: 'Button',
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
			按钮
		</div>
	)
}
