import { createContext, useContext, useState } from "react";

/**
 * Context for managing the sidebar state.
 *
 * @typedef {Object} SidebarContextType
 * @property {boolean} isSidebarOpen - Indicates whether the sidebar is open.
 * @property {Function} toggleSidebar - Toggles the sidebar state.
 * @property {Function} closeSidebar - Closes the sidebar.
 */

/**
 * Creates a React Context for managing the sidebar state.
 */
const SidebarContext = createContext();

/**
 * SidebarProvider component that provides sidebar state and functions to its children.
 *
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - The child components that will consume the context.
 * @returns {JSX.Element} The SidebarProvider component.
 */
export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  /**
   * Toggles the sidebar state between open and closed.
   */
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  /**
   * Closes the sidebar by setting its state to false.
   */
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar, closeSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

/**
 * Custom hook to access the sidebar context.
 *
 * @returns {SidebarContextType} The sidebar context value.
 */
export const useSidebar = () => useContext(SidebarContext);
