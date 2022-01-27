import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import {
	FormControl,
	FormControlLabel,
	FormLabel,
	makeStyles,
} from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { useRef, useState } from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles({
	field: {
		marginBottom: 20,
		marginTop: 20,
		display: 'block',
	},
})

const Create = () => {
	const titleRef = useRef()
	const navigate = useNavigate()
	const detailsRef = useRef()
	const classes = useStyles()
	const [detailsError, setDetailsError] = useState(false)
	const [category, setCategory] = useState('Reminder')
	const [titleError, setTitleError] = useState(false)
	function handleSubmit(e) {
		e.preventDefault()
		setDetailsError(false)
		setTitleError(false)
		if (titleRef.current.value === '') {
			setTitleError(true)
		}
		if (detailsRef.current.value === '') {
			setDetailsError(true)
		} else if (titleRef.current.value && detailsRef.current.value) {
			const newTitle = titleRef.current.value
			const newDetails = detailsRef.current.value
			fetch('http://localhost:8000/notes', {
				method: 'POST',
				headers: { 'Content-type': 'application/json' },
				body: JSON.stringify({
					title: newTitle,
					details: newDetails,
					category,
				}),
			}).then(() => navigate('/'))
		}
	}
	return (
		<Container>
			<Typography
				variant='h6'
				component='h2'
				gutterBottom
				color='textSecondary'
			>
				Create a New Note
			</Typography>

			<form onSubmit={handleSubmit} noValidate autoComplete='off'>
				<TextField
					className={classes.field}
					color='primary'
					label='Note Title'
					variant='outlined'
					fullWidth
					inputRef={titleRef}
					required
					error={titleError}
				/>
				<TextField
					className={classes.field}
					color='primary'
					label='Details'
					multiline
					error={detailsError}
					rows={4}
					variant='outlined'
					fullWidth
					inputRef={detailsRef}
					required
				/>

				<FormControl className={classes.field}>
					<FormLabel>Note Category</FormLabel>
					<RadioGroup
						value={category}
						onChange={(e) => setCategory(e.target.value)}
					>
						<FormControlLabel value='Money' control={<Radio />} label='Money' />
						<FormControlLabel value='Todos' control={<Radio />} label='Todos' />
						<FormControlLabel
							value='Reminder'
							control={<Radio />}
							label='Reminder'
						/>
						<FormControlLabel value='Work' control={<Radio />} label='Work' />
					</RadioGroup>
				</FormControl>

				<Button
					color='secondary'
					variant='contained'
					type='submit'
					endIcon={<KeyboardArrowRightIcon />}
				>
					Submit
				</Button>
			</form>
		</Container>
	)
}

export default Create
