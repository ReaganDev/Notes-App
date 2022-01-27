import { Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import React, { useEffect, useState } from 'react'

const Notes = () => {
	const [notes, setNotes] = useState([])
	useEffect(() => {
		fetch('http://localhost:8000/notes')
			.then((res) => res.json())
			.then((data) => setNotes(data))
	}, [])
	return (
		<Container>
			<Grid container>
				{notes.map((note) => (
					<Grid item xs={12} sm={6} md={4} lg={3} key={note.id}>
						<Paper>{note.title}</Paper>
					</Grid>
				))}
			</Grid>
		</Container>
	)
}

export default Notes
