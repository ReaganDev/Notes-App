import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Create from './pages/Create'
import Notes from './pages/Notes'
import { createTheme, ThemeProvider } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'
import Layout from './components/Layout'

const theme = createTheme({
	palette: {
		secondary: purple,
	},
})

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Layout>
					<Routes>
						<Route exact path='/' element={<Notes />} />
						<Route path='/create' element={<Create />} />
					</Routes>
				</Layout>
			</Router>
		</ThemeProvider>
	)
}

export default App
