import { FiMenu, FiSearch, FiBell, FiSettings, FiHelpCircle } from 'react-icons/fi';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="bg-header-bg border-b border-header-border sticky top-0 z-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side */}
          <div className="flex items-center">
            <button
              type="button"
              className="lg:hidden p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-gray-100"
              onClick={onMenuClick}
            >
              <FiMenu className="h-6 w-6" />
            </button>
            
            <div className="ml-4 lg:ml-0">
              <div className="flex items-center">
                <div className="text-xl font-bold text-text-primary">
                  MITRA <span className="text-text-secondary text-sm font-normal">BALI INTERNASIONAL</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center - Search */}
          <div className="hidden md:flex items-center flex-1 max-w-xs mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-4 w-4 text-text-muted" />
              </div>
              <input
                type="search"
                placeholder="Поиск по разуму..."
                className="block w-full pl-10 pr-3 py-2 border border-input-border rounded-md leading-5 bg-input-bg placeholder-text-muted focus:outline-none focus:placeholder-text-secondary focus:ring-1 focus:ring-input-focus focus:border-input-focus text-sm"
              />
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-text-secondary hidden sm:block">RU</span>
              <button className="p-2 text-text-secondary hover:text-text-primary">
                <FiBell className="h-4 w-4" />
              </button>
              <button className="p-2 text-text-secondary hover:text-text-primary">
                <FiSettings className="h-4 w-4" />
              </button>
              <button className="p-2 text-text-secondary hover:text-text-primary">
                <FiHelpCircle className="h-4 w-4" />
              </button>
            </div>
            
            {/* User profile */}
            <div className="flex items-center space-x-3 ml-4">
              <div className="hidden md:block text-right">
                <div className="text-sm font-medium text-text-primary">Alex Sanbaev</div>
                <div className="text-xs text-text-secondary">Finance strategy</div>
              </div>
              <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600">AS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;