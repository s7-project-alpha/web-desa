import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import {
    UserGroupIcon,
    DocumentTextIcon,
    PhotoIcon,
    ChartBarIcon,
    ClockIcon,
    CheckCircleIcon,
    ExclamationTriangleIcon,
    ArrowTrendingUpIcon,
    ArrowRightIcon,
    PlusIcon,
    ChartPieIcon,
    UsersIcon,
} from '@heroicons/react/24/outline';

export default function Dashboard({ stats, user }) {
    const statsCards = [
        {
            title: 'Total Admin',
            value: stats.total_admin,
            icon: UserGroupIcon,
            color: 'bg-blue-100 text-blue-600',
            iconColor: 'bg-blue-600',
            trend: '+0%',
            trendColor: 'text-blue-600',
        },
        {
            title: 'Modul Tersedia',
            value: stats.total_modules,
            icon: DocumentTextIcon,
            color: 'bg-green-100 text-green-600',
            iconColor: 'bg-green-600',
            trend: '100%',
            trendColor: 'text-green-600',
        },
        {
            title: 'Status Sistem',
            value: 'Aktif',
            icon: CheckCircleIcon,
            color: 'bg-emerald-100 text-emerald-600',
            iconColor: 'bg-emerald-600',
            trend: 'Online',
            trendColor: 'text-emerald-600',
        },
        {
            title: 'Login Terakhir',
            value: stats.last_login,
            icon: ClockIcon,
            color: 'bg-orange-100 text-orange-600',
            iconColor: 'bg-orange-600',
            trend: 'Aktif',
            trendColor: 'text-orange-600',
        },
    ];

    const modules = [
        { name: 'Visi & Misi', status: 'Siap', icon: DocumentTextIcon, color: 'bg-blue-100 text-blue-800' },
        { name: 'Demografi', status: 'Siap', icon: ChartBarIcon, color: 'bg-green-100 text-green-800' },
        { name: 'Perangkat Desa', status: 'Siap', icon: UserGroupIcon, color: 'bg-purple-100 text-purple-800' },
        { name: 'BUMDes', status: 'Siap', icon: ArrowTrendingUpIcon, color: 'bg-indigo-100 text-indigo-800' },
        { name: 'PKK', status: 'Siap', icon: UsersIcon, color: 'bg-pink-100 text-pink-800' },
        { name: 'Posyandu', status: 'Siap', icon: UserGroupIcon, color: 'bg-red-100 text-red-800' },
        { name: 'Berita', status: 'Siap', icon: DocumentTextIcon, color: 'bg-yellow-100 text-yellow-800' },
        { name: 'Galeri', status: 'Siap', icon: PhotoIcon, color: 'bg-cyan-100 text-cyan-800' },
        { name: 'Kontak', status: 'Siap', icon: UserGroupIcon, color: 'bg-gray-100 text-gray-800' },
    ];

    const quickActions = [
        {
            title: 'Tambah Berita Baru',
            icon: DocumentTextIcon,
            color: 'bg-blue-100 text-blue-600 hover:bg-blue-200',
            iconColor: 'text-blue-600',
        },
        {
            title: 'Upload Galeri',
            icon: PhotoIcon,
            color: 'bg-green-100 text-green-600 hover:bg-green-200',
            iconColor: 'text-green-600',
        },
        {
            title: 'Update Demografi',
            icon: ChartPieIcon,
            color: 'bg-purple-100 text-purple-600 hover:bg-purple-200',
            iconColor: 'text-purple-600',
        },
        {
            title: 'Lihat Statistik',
            icon: ChartBarIcon,
            color: 'bg-orange-100 text-orange-600 hover:bg-orange-200',
            iconColor: 'text-orange-600',
        },
    ];

    const activities = [
        {
            title: 'Sistem CMS berhasil diinisialisasi',
            time: 'Hari ini, 10:30 AM',
            icon: CheckCircleIcon,
            iconColor: 'bg-blue-500',
        },
        {
            title: 'Admin berhasil login ke sistem',
            time: stats.last_login,
            icon: UserGroupIcon,
            iconColor: 'bg-green-500',
        },
        {
            title: 'Modul autentikasi telah dikonfigurasi',
            time: 'Hari ini, 09:15 AM',
            icon: DocumentTextIcon,
            iconColor: 'bg-purple-500',
        },
    ];

    const systemInfo = [
        { title: 'Versi Sistem', value: 'v1.0.0' },
        { title: 'Database', value: 'MySQL' },
        { title: 'Framework', value: 'Laravel + React' },
    ];

    return (
        <AdminLayout title="Dashboard">
            <Head title="Dashboard" />

            <div className="space-y-6">
                {/* Welcome Section */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white shadow-lg">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-bold">
                                Selamat Datang, {user.name}!
                            </h2>
                            <p className="text-blue-100 mt-2 opacity-90">
                                Kelola data dan informasi Desa Tanjung Selamat dengan mudah
                            </p>
                            <button className="mt-4 inline-flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-all duration-200">
                                <PlusIcon className="h-4 w-4 mr-2" />
                                Buat Konten Baru
                            </button>
                        </div>
                        <div className="hidden md:block">
                            <img
                                src={user.avatar_url}
                                alt={user.name}
                                className="h-20 w-20 rounded-full border-4 border-white/20 shadow-md"
                            />
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {statsCards.map((stat, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                                    <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                                </div>
                                <div className={`${stat.iconColor} p-3 rounded-lg`}>
                                    <stat.icon className="h-6 w-6 text-white" />
                                </div>
                            </div>
                            <div className="mt-4 flex items-center">
                                <span className={`text-sm font-medium ${stat.trendColor}`}>{stat.trend}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modules and Quick Actions */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Modules Overview */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">
                                Modul Sistem
                            </h3>
                            <span className="text-sm text-blue-600 font-medium">9/9 Aktif</span>
                        </div>
                        <div className="space-y-3">
                            {modules.map((module, index) => (
                                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                                    <div className="flex items-center space-x-3">
                                        <div className={`p-2 rounded-lg ${module.color}`}>
                                            <module.icon className="h-5 w-5" />
                                        </div>
                                        <span className="font-medium text-gray-900">{module.name}</span>
                                    </div>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                        {module.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Aksi Cepat
                        </h3>
                        <div className="grid grid-cols-1 gap-3">
                            {quickActions.map((action, index) => (
                                <button
                                    key={index}
                                    className={`w-full flex items-center justify-between p-4 ${action.color} rounded-lg transition-colors`}
                                >
                                    <div className="flex items-center space-x-3">
                                        <action.icon className={`h-5 w-5 ${action.iconColor}`} />
                                        <span className="font-medium">{action.title}</span>
                                    </div>
                                    <ArrowRightIcon className="h-5 w-5" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Aktivitas Terbaru
                        </h3>
                        <button className="text-sm text-blue-600 font-medium">Lihat Semua</button>
                    </div>
                    <div className="space-y-4">
                        {activities.map((activity, index) => (
                            <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                                <div className={`${activity.iconColor} p-2 rounded-full`}>
                                    <activity.icon className="h-4 w-4 text-white" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-gray-900">
                                        {activity.title}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {activity.time}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* System Info */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Informasi Sistem
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {systemInfo.map((info, index) => (
                            <div key={index} className="text-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                                <p className="text-sm text-gray-600">{info.title}</p>
                                <p className="text-lg font-semibold text-gray-900 mt-1">{info.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
