import {
	Card,
	CardContent,
	CardHeader,
	IconButton,
	Typography,
} from '@material-ui/core'
import { DeleteOutlined } from '@material-ui/icons'

const NotesCard = ({ note, deleteNote }) => {
	return (
		<div>
			<Card elevation={1}>
				<CardHeader
					action={
						<IconButton onClick={() => deleteNote(note.id)}>
							<DeleteOutlined />
						</IconButton>
					}
					title={note.title}
					subheader={note.category}
				/>
				<CardContent>
					<Typography variant='body2' color='textSecondary'>
						{note.details}
					</Typography>
				</CardContent>
			</Card>
		</div>
	)
}

export default NotesCard
