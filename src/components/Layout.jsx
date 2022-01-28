import {
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
	Typography,
} from '@material-ui/core'
import { AddCircleOutlined, SubjectOutlined } from '@material-ui/icons'
import { useLocation, useNavigate } from 'react-router-dom'

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
	active: {
		backgroundColor: '#f4f4f4',
	},
})

const Layout = ({ children }) => {
	const classes = useStyles()
	const navigate = useNavigate()
	const location = useLocation()
	const menuItems = [
		{
			text: 'My Notes',
			icon: <SubjectOutlined color='secondary' />,
			path: '/',
		},
		{
			text: 'Create Note',
			icon: <AddCircleOutlined color='secondary' />,
			path: '/create',
		},
	]
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

				<List>
					{menuItems.map((menu) => (
						<ListItem
							onClick={() => navigate(menu.path)}
							button
							key={menu.text}
							className={location.pathname === menu.path && classes.active}
						>
							<ListItemIcon>{menu.icon}</ListItemIcon>
							<ListItemText primary={menu.text} />
						</ListItem>
					))}
				</List>
			</Drawer>
			<div className={classes.page}>{children}</div>
		</div>
	)
}

export default Layout
