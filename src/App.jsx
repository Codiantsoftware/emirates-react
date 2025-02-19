import Header from './components/Header';
import Sidebar from './components/SideBar';
import Chat from './components/ChatMessage';
import "../public/assets/scss/style.scss";
import { SidebarProvider } from './SidebarContext';

/**
 * Root component of the application.
 * 
 * This component wraps the entire app structure, including the sidebar, header, and chat components.
 * It also provides the sidebar context to manage the state of the sidebar across components.
 * 
 * @component
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  return (
    <>
      <SidebarProvider>
        <Sidebar />
        <Header />
        <Chat /> 
      </SidebarProvider>
    </>
  );
}

export default App;
