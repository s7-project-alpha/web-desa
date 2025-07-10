import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeftIcon, PencilIcon } from '@heroicons/react/24/outline';

export default function Show({ auth, item }) {
    const getTypeColor = (type) => {
        switch (type) {
            case 'vision':
                return 'bg-blue-100 text-blue-800';
            case 'mission':
                return 'bg-green-100 text-green-800';
            case 'value':
                return 'bg-purple-100 text-purple-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getTypeLabel = (type) => {
        switch (type) {
            case 'vision':
                return 'Visi';
            case 'mission':
                return 'Misi';
            case 'value':
                return 'Nilai Dasar';
            default:
                return ucfirst(type);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Link
                            href={route('vision-mission-values.index')}
                            className="mr-4 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                        >
                            <ArrowLeftIcon className="h-5 w-5" />
                        </Link>
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            Detail Visi, Misi & Nilai Dasar
                        </h2>
                    </div>
                    <Link
                        href={route('vision-mission-values.edit', item.id)}
                        className="inline-flex items-center px-4 py-2 bg-yellow-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-yellow-700 active:bg-yellow-900 focus:outline-none focus:border-yellow-900 focus:ring ring-yellow-300 disabled:opacity-25 transition ease-in-out duration-150"
                    >
                        <PencilIcon className="h-4 w-4 mr-2" />
                        Edit
                    </Link>
                </div>
            }
        >
            <Head title={`Detail ${getTypeLabel(item.type)} - ${item.title}`} />

            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white">
                            {/* Header Info */}
                            <div className="mb-8">
                                <div className="flex items-center justify-between mb-4">
                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                                        {getTypeLabel(item.type)}
                                    </span>
                                    <div className="flex items-center space-x-4">
                                        <span className="text-sm text-gray-500">
                                            Urutan: {item.order_position}
                                        </span>
                                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                            item.is_active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                                        }`}>
                                            {item.is_active ? 'Aktif' : 'Tidak Aktif'}
                                        </span>
                                    </div>
                                </div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">{item.title}</h1>
                                <div className="flex items-center text-sm text-gray-500 space-x-4">
                                    <span>Dibuat: {new Date(item.created_at).toLocaleDateString('id-ID', {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}</span>
                                    <span>•</span>
                                    <span>Terakhir diperbarui: {new Date(item.updated_at).toLocaleDateString('id-ID', {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-3">Konten</h3>
                                    <div className="bg-gray-50 rounded-lg p-6">
                                        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                                            {item.content}
                                        </p>
                                    </div>
                                </div>

                                {item.description && (
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900 mb-3">Deskripsi Tambahan</h3>
                                        <div className="bg-blue-50 rounded-lg p-6">
                                            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* Metadata */}
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-3">Informasi Tambahan</h3>
                                    <div className="bg-gray-50 rounded-lg p-6">
                                        <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                                            <div>
                                                <dt className="text-sm font-medium text-gray-500">Jenis</dt>
                                                <dd className="mt-1 text-sm text-gray-900">{getTypeLabel(item.type)}</dd>
                                            </div>
                                            <div>
                                                <dt className="text-sm font-medium text-gray-500">Posisi Urutan</dt>
                                                <dd className="mt-1 text-sm text-gray-900">{item.order_position}</dd>
                                            </div>
                                            <div>
                                                <dt className="text-sm font-medium text-gray-500">Status</dt>
                                                <dd className="mt-1 text-sm text-gray-900">
                                                    {item.is_active ? 'Aktif' : 'Tidak Aktif'}
                                                </dd>
                                            </div>
                                            <div>
                                                <dt className="text-sm font-medium text-gray-500">ID</dt>
                                                <dd className="mt-1 text-sm text-gray-900 font-mono">{item.id}</dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-8 flex items-center justify-end space-x-3 pt-6 border-t border-gray-200">
                                <Link
                                    href={route('vision-mission-values.index')}
                                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
                                >
                                    Kembali
                                </Link>
                                <Link
                                    href={route('vision-mission-values.edit', item.id)}
                                    className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors"
                                >
                                    Edit Data
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
