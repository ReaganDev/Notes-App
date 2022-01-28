import { Drawer, makeStyles, Typography } from '@material-ui/core'

const drawerWidth = 240

const useStyles = makeStyles({
	page: {
		backgroundColor: '#f9f9f9',
		width: '100%',
	},
	drawer: {
		width: drawerWidth,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	root: {
		display: 'flex',
	},
})

const Layout = ({ children }) => {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<Drawer
				className={classes.drawer}
				variant='permanent'
				anchor='left'
				classes={{ paper: classes.drawerPaper }}
			>
				<div>
					<Typography variant='h5'>Notes App</Typography>
				</div>
			</Drawer>
			<div className={classes.page}>{children}</div>
		</div>
	)
}

export default Layout
