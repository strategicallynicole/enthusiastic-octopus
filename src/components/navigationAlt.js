import React from "react";
import PropTypes from "prop-types";
import {
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    UsersIcon,
  } from '@heroicons/react/outline'
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


function NavigationAlt () {

    const nav = [
        { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
        { name: 'Team', href: '#', icon: UsersIcon, current: false },
        { name: 'Projects', href: '#', icon: FolderIcon, current: false },
        { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
        { name: 'Documents', href: '#', icon: InboxIcon, current: false },
        { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
      ]

{/* Navigation starts */}

return (
    <>
  
  <nav className="flex-1 px-2 mt-5 space-y-1 bg-gray-800">
  {nav.map((item) => (
    <a
      key={item.name}
      href={item.href}
      className={classNames(
        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
        'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
      )}
    >
      <item.icon
        className={classNames(
          item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
          'mr-3 h-6 w-6'
        )}
        aria-hidden="true"
      />
      {item.name}
    </a>
  ))}
</nav>

                </>
    );
}
NavigationAlt.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavigationAlt;
