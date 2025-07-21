import { useState, useRef, useEffect } from "react";
import {
  FiMenu,
  FiSearch,
  FiFilter,
  FiBell,
  FiGrid,
  FiMessageSquare,
  FiX,
} from "react-icons/fi";
import MitraLogoBali from "../../assets/mitra-logo-bali.png";

interface HeaderProps {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo */}
          <div className="flex items-center">
            <button
              type="button"
              className="lg:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
              onClick={onMenuClick}
            >
              <FiMenu className="h-6 w-6" />
            </button>

            <img
              src={MitraLogoBali}
              className="h-4 md:h-4 xl:h-6 w-auto"
              loading="lazy"
              alt="Mitra Bali Logo"
            />
          </div>

          {/* Center - Search (Desktop only) */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="search"
                placeholder="Поиск по разделу..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Right side - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded">
              <FiFilter className="h-4 w-4" />
            </button>

            <button className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
              RU
            </button>

            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded">
              <FiGrid className="h-4 w-4" />
            </button>

            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded">
              <FiMessageSquare className="h-4 w-4" />
            </button>

            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded relative">
              <FiBell className="h-4 w-4" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User profile */}
            <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-gray-200">
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">
                  Alex Sanbaev
                </div>
                <div className="text-xs text-gray-500">Finance strategy</div>
              </div>
              <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600">AS</span>
              </div>
            </div>
          </div>

          {/* Right side - Mobile */}
          <div className="lg:hidden relative" ref={dropdownRef}>
            <button
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100"
            >
              <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600">AS</span>
              </div>
            </button>

            {/* Mobile Dropdown Menu */}
            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                {/* User Info */}
                <div className="px-4 py-3 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center">
                      <span className="text-lg font-medium text-gray-600">
                        AS
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        Alex Sanbaev
                      </div>
                      <div className="text-xs text-gray-500">
                        Finance strategy
                      </div>
                    </div>
                  </div>
                </div>

                {/* Search */}
                <div className="px-4 py-3 border-b border-gray-200">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiSearch className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="search"
                      placeholder="Поиск по разделу..."
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Menu Items */}
                <div className="py-2">
                  <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-3">
                    <FiFilter className="h-4 w-4" />
                    <span>Фильтры</span>
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-3">
                    <FiGrid className="h-4 w-4" />
                    <span>Приложения</span>
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <FiBell className="h-4 w-4" />
                      <span>Уведомления</span>
                    </div>
                    <span className="h-2 w-2 bg-red-500 rounded-full"></span>
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-3">
                    <FiMessageSquare className="h-4 w-4" />
                    <span>Сообщения</span>
                  </button>
                </div>

                {/* Language */}
                <div className="border-t border-gray-200 py-2">
                  <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between">
                    <span>Язык</span>
                    <span className="font-medium">RU</span>
                  </button>
                </div>

                {/* Close button */}
                <div className="border-t border-gray-200 pt-2">
                  <button
                    onClick={() => setIsProfileMenuOpen(false)}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-3"
                  >
                    <FiX className="h-4 w-4" />
                    <span>Закрыть</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
