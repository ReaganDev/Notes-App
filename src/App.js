import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Create from './pages/Create'
import Notes from './pages/Notes'
import { createTheme, ThemeProvider } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'

const theme = createTheme({
	palette: {
		primary: purple,
	},
})

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Routes>
					<Route exact path='/' element={<Notes />} />
					<Route path='/create' element={<Create />} />
				</Routes>
			</Router>
		</ThemeProvider>
	)
}

export default App
