import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaBullseye, FaChartLine, FaCog, FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleSidebar = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, path: "/" },
    { name: "Goals", icon: <FaBullseye />, path: "/goals" },
    { name: "Progress", icon: <FaChartLine />, path: "/progress" },
    { name: "Settings", icon: <FaCog />, path: "/settings" },
  ];

  return (
    <>
      <button
        className="fixed top-4 left-4 z-50 md:hidden bg-gray-900 text-white p-2 rounded-xl shadow-lg"
        onClick={toggleSidebar}
      >
        {isOpen ? <IoClose size={24} /> : <FaBars size={24} />}
      </button>

      <div
        className={`fixed top-0 m-4 left-0 h-[95vh] rounded-xl bg-gray-900 text-white p-6 w-72 shadow-lg transform transition-all duration-300 ease-in-out 
        ${isOpen ? "translate-x-0" : "-translate-x-80"} md:translate-x-0`}
      >
        <h2 className="text-3xl font-bold text-center mt-6 pb-6 tracking-wide">
          🚀 Goal Tracker
        </h2>

        <ul className="space-y-4 mt-10">
          {menuItems.map((item) => (
            <li key={item.name} className="p-2 hover:bg-gray-500 rounded-xl">
              <Link
                to={item.path}
                className="flex items-center space-x-3"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-lg font-medium">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      {isOpen && (
        <div
          className="fixed inset-0 w-50 md:hidden"
          onClick={toggleSidebar}
        >
        </div>
      )}
    </>
  );
};

export default Sidebar;
