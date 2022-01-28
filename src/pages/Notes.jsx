import { Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import React, { useEffect, useState } from 'react'
import NotesCard from '../components/NotesCard'

const Notes = () => {
	const [notes, setNotes] = useState([])
	useEffect(() => {
		fetch('http://localhost:8000/notes')
			.then((res) => res.json())
			.then((data) => setNotes(data))
	}, [])

	async function deleteNote(id) {
		await fetch(`http://localhost:8000/notes/${id}`, {
			method: 'DELETE',
		})
		setNotes(notes.filter((note) => note.id !== id))
	}
	return (
		<Container>
			<Grid container spacing={3}>
				{notes.map((note) => (
					<Grid item xs={12} sm={12} md={4} lg={3} key={note.id}>
						<NotesCard note={note} deleteNote={deleteNote} />
					</Grid>
				))}
			</Grid>
		</Container>
	)
}

export default Notes
