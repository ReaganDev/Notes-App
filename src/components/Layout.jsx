import {
	AppBar,
	Avatar,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
	Toolbar,
	Typography,
} from '@material-ui/core'
import { AddCircleOutlined, SubjectOutlined } from '@material-ui/icons'
import { format } from 'date-fns'
import { useLocation, useNavigate } from 'react-router-dom'

const drawerWidth = 240

const useStyles = makeStyles((theme) => {
	return {
		page: {
			backgroundColor: '#f9f9f9',
			width: '100%',
			padding: theme.spacing(3),
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
		title: {
			padding: theme.spacing(2),
		},
		appbar: {
			width: `calc(100% - ${drawerWidth}px)`,
		},
		toolbar: theme.mixins.toolbar,
		date: {
			flexGrow: 1,
		},
	}
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
			<AppBar className={classes.appbar} color='transparent' elevation={0}>
				<Toolbar>
					<Typography className={classes.date} variant='h5'>
						Today is the {format(new Date(), 'do MMMM Y')}
					</Typography>
					<Typography>Reagan</Typography>
					<Avatar />
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant='permanent'
				anchor='left'
				classes={{ paper: classes.drawerPaper }}
			>
				<div>
					<Typography className={classes.title} variant='h5'>
						Notes App
					</Typography>
				</div>

				<List>
					{menuItems.map((menu) => (
						<ListItem
							onClick={() => navigate(menu.path)}
							button
							key={menu.text}
							className={
								location.pathname === menu.path ? classes.active : null
							}
						>
							<ListItemIcon>{menu.icon}</ListItemIcon>
							<ListItemText primary={menu.text} />
						</ListItem>
					))}
				</List>
			</Drawer>
			<div className={classes.page}>
				<div className={classes.toolbar}></div>
				{children}
			</div>
		</div>
	)
}

export default Layout
