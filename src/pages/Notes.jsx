import { Container } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import NotesCard from '../components/NotesCard'
import Masonry from 'react-masonry-css'

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

	const breakpointColumnsObj = {
		default: 3,
		1100: 2,
		700: 1,
	}
	return (
		<Container>
			<Masonry
				breakpointCols={breakpointColumnsObj}
				className='my-masonry-grid'
				columnClassName='my-masonry-grid_column'
			>
				{notes.map((note) => (
					<div key={note.id}>
						<NotesCard note={note} deleteNote={deleteNote} />
					</div>
				))}
			</Masonry>
		</Container>
	)
}

export default Notes
