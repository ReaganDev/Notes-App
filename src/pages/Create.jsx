import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { useRef, useState } from 'react'

const useStyles = makeStyles({
	field: {
		marginBottom: 20,
		marginTop: 20,
		display: 'block',
	},
})

const Create = () => {
	const titleRef = useRef()
	const detailsRef = useRef()
	const classes = useStyles()
	const [detailsError, setDetailsError] = useState(false)
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
			console.log(titleRef.current.value, detailsRef.current.value)
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
				<Button
					color='primary'
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
