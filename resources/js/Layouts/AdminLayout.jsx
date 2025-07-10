import { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import {
    Bars3Icon,
    XMarkIcon,
    HomeIcon,
    UserGroupIcon,
    DocumentTextIcon,
    PhotoIcon,
    PhoneIcon,
    ChartBarIcon,
    BuildingOfficeIcon,
    HeartIcon,
    UserIcon,
    ArrowRightOnRectangleIcon,
    MapPinIcon,
    BellIcon,
    ChevronDownIcon,
} from '@heroicons/react/24/outline';

const navigation = [
    { name: 'Dashboard', href: route('dashboard'), icon: HomeIcon, current: true },
    { name: 'Visi & Misi', href: '#', icon: DocumentTextIcon, current: false },
    { name: 'Demografi', href: '#', icon: ChartBarIcon, current: false },
    { name: 'Perangkat Desa', href: '#', icon: UserGroupIcon, current: false },
    { name: 'BUMDes', href: '#', icon: BuildingOfficeIcon, current: false },
    { name: 'PKK', href: '#', icon: HeartIcon, current: false },
    { name: 'Posyandu', href: '#', icon: UserIcon, current: false },
    { name: 'Berita', href: '#', icon: DocumentTextIcon, current: false },
    { name: 'Galeri', href: '#', icon: PhotoIcon, current: false },
    { name: 'Kontak', href: '#', icon: PhoneIcon, current: false },
];

export default function AdminLayout({ children, title = 'Dashboard' }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { auth } = usePage().props;
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Mobile sidebar */}
            <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
                <div className="fixed inset-0 bg-gray-900/80" onClick={() => setSidebarOpen(false)} />

                <div className="fixed inset-y-0 left-0 flex w-72 flex-col bg-white shadow-xl transition-all duration-300 ease-in-out">
                    <div className="flex h-16 items-center justify-between px-6 bg-gradient-to-r from-blue-600 to-blue-700">
                        <div className="flex items-center space-x-3">
                            <MapPinIcon className="h-8 w-8 text-white" />
                            <span className="text-white font-bold text-xl">Desa CMS</span>
                        </div>
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="rounded-md p-1 text-white hover:bg-blue-800 focus:outline-none"
                        >
                            <XMarkIcon className="h-6 w-6" />
                        </button>
                    </div>

                    <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg mx-2 transition-all duration-200 ${
                                    item.current
                                        ? 'bg-blue-100 text-blue-700'
                                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                                }`}
                            >
                                <item.icon className={`h-5 w-5 mr-3 ${item.current ? 'text-blue-600' : 'text-gray-500'}`} />
                                {item.name}
                                {item.current && (
                                    <span className="ml-auto inline-block h-2 w-2 rounded-full bg-blue-600" />
                                )}
                            </Link>
                        ))}
                    </nav>

                    <div className="p-4 border-t border-gray-200">
                        <div className="flex items-center space-x-3">
                            <img
                                src={auth.user.avatar_url}
                                alt={auth.user.name}
                                className="h-10 w-10 rounded-full border-2 border-white shadow"
                            />
                            <div>
                                <p className="text-sm font-medium text-gray-900">{auth.user.name}</p>
                                <p className="text-xs text-gray-500">Admin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop sidebar */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col">
                <div className="flex flex-col border-r border-gray-200 bg-white shadow-sm">
                    <div className="flex h-16 items-center px-6 bg-gradient-to-r from-blue-600 to-blue-700">
                        <div className="flex items-center space-x-3">
                            <MapPinIcon className="h-8 w-8 text-white" />
                            <span className="text-white font-bold text-xl">Desa CMS</span>
                        </div>
                    </div>

                    <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg mx-2 transition-all duration-200 ${
                                    item.current
                                        ? 'bg-blue-100 text-blue-700'
                                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                                }`}
                            >
                                <item.icon className={`h-5 w-5 mr-3 ${item.current ? 'text-blue-600' : 'text-gray-500'}`} />
                                {item.name}
                                {item.current && (
                                    <span className="ml-auto inline-block h-2 w-2 rounded-full bg-blue-600" />
                                )}
                            </Link>
                        ))}
                    </nav>

                    <div className="p-4 border-t border-gray-200">
                        <div className="flex items-center space-x-3">
                            <img
                                src={auth.user.avatar_url}
                                alt={auth.user.name}
                                className="h-10 w-10 rounded-full border-2 border-white shadow"
                            />
                            <div>
                                <p className="text-sm font-medium text-gray-900">{auth.user.name}</p>
                                <p className="text-xs text-gray-500">Admin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="lg:pl-72">
                {/* Top bar */}
                <div className="sticky top-0 z-40 flex h-16 bg-white shadow-sm border-b border-gray-200">
                    <button
                        className="px-4 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:hidden"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <Bars3Icon className="h-6 w-6" />
                    </button>

                    <div className="flex flex-1 items-center justify-between px-6">
                        <h1 className="text-xl font-semibold text-gray-900">{title}</h1>

                        <div className="flex items-center space-x-6">
                            <button className="relative p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
                                <BellIcon className="h-6 w-6" />
                                <span className="absolute top-0 right-0 h-2.5 w-2.5 rounded-full bg-red-500"></span>
                            </button>

                            <div className="relative">
                                <button
                                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                                    className="flex items-center space-x-3 focus:outline-none"
                                >
                                    <img
                                        src={auth.user.avatar_url}
                                        alt={auth.user.name}
                                        className="h-8 w-8 rounded-full border-2 border-blue-200"
                                    />
                                    <div className="hidden md:block text-left">
                                        <p className="text-sm font-medium text-gray-900">{auth.user.name}</p>
                                        <p className="text-xs text-gray-500">Admin</p>
                                    </div>
                                    <ChevronDownIcon className={`h-4 w-4 text-gray-500 transition-transform ${userDropdownOpen ? 'transform rotate-180' : ''}`} />
                                </button>

                                {userDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                                        <Link
                                            href={route('profile.edit')}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Profil Saya
                                        </Link>
                                        <Link
                                            href={route('logout')}
                                            method="post"
                                            as="button"
                                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Keluar
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Page content */}
                <main className="p-6 bg-gray-50 min-h-[calc(100vh-4rem)]">
                    {children}
                </main>
            </div>
        </div>
    );
}
