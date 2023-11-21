import '../src/assets/css/app.css'
import { ContentWrapper } from './components/contentWrapper/ContentWrapper';
import { SideBar } from './components/sideBar/SideBar';

function App() {

  return (
    <div id="wrapper">
		<SideBar/>
		<ContentWrapper/>
		
	</div>
  )
}

export default App
