import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { PlusIcon, PencilIcon, TrashIcon, EyeIcon } from '@heroicons/react/24/outline';

export default function Index({ auth, visions, missions, values }) {
    const { delete: destroy } = useForm();
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);

    const handleDelete = (item) => {
        setItemToDelete(item);
        setShowDeleteModal(true);
    };

    const confirmDelete = () => {
        if (itemToDelete) {
            destroy(route('vision-mission-values.destroy', itemToDelete.id), {
                onSuccess: () => {
                    setShowDeleteModal(false);
                    setItemToDelete(null);
                }
            });
        }
    };

    const ItemCard = ({ item, bgColor, textColor }) => (
        <div className={`${bgColor} rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200`}>
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${textColor} bg-white/20`}>
                        {item.type_label || (item.type === 'vision' ? 'Visi' : item.type === 'mission' ? 'Misi' : 'Nilai Dasar')}
                    </span>
                    <span className="ml-2 text-sm text-gray-600">
                        Urutan: {item.order_position}
                    </span>
                </div>
                <div className="flex items-center space-x-2">
                    <Link
                        href={route('vision-mission-values.show', item.id)}
                        className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                    >
                        <EyeIcon className="h-4 w-4" />
                    </Link>
                    <Link
                        href={route('vision-mission-values.edit', item.id)}
                        className="p-2 text-gray-500 hover:text-yellow-600 hover:bg-yellow-50 rounded-md transition-colors"
                    >
                        <PencilIcon className="h-4 w-4" />
                    </Link>
                    <button
                        onClick={() => handleDelete(item)}
                        className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
                    >
                        <TrashIcon className="h-4 w-4" />
                    </button>
                </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                {item.content}
            </p>
            {item.description && (
                <p className="text-gray-500 text-xs mt-2 italic">
                    {item.description}
                </p>
            )}
            <div className="mt-4 flex items-center justify-between">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    item.is_active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                    {item.is_active ? 'Aktif' : 'Tidak Aktif'}
                </span>
                <span className="text-xs text-gray-500">
                    {new Date(item.updated_at).toLocaleDateString('id-ID')}
                </span>
            </div>
        </div>
    );

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Visi, Misi & Nilai Dasar
                    </h2>
                    <Link
                        href={route('vision-mission-values.create')}
                        className="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-700 active:bg-blue-900 focus:outline-none focus:border-blue-900 focus:ring ring-blue-300 disabled:opacity-25 transition ease-in-out duration-150"
                    >
                        <PlusIcon className="h-4 w-4 mr-2" />
                        Tambah Data
                    </Link>
                </div>
            }
        >
            <Head title="Visi, Misi & Nilai Dasar" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* Visi Section */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                            <span className="w-1 h-8 bg-blue-600 mr-3"></span>
                            Visi Desa
                        </h3>
                        {visions.length > 0 ? (
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {visions.map((vision) => (
                                    <ItemCard
                                        key={vision.id}
                                        item={vision}
                                        bgColor="bg-blue-50"
                                        textColor="text-blue-800"
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="bg-gray-50 rounded-lg p-8 text-center">
                                <p className="text-gray-500">Belum ada data visi yang ditambahkan.</p>
                            </div>
                        )}
                    </div>

                    {/* Misi Section */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                            <span className="w-1 h-8 bg-green-600 mr-3"></span>
                            Misi Desa
                        </h3>
                        {missions.length > 0 ? (
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {missions.map((mission) => (
                                    <ItemCard
                                        key={mission.id}
                                        item={mission}
                                        bgColor="bg-green-50"
                                        textColor="text-green-800"
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="bg-gray-50 rounded-lg p-8 text-center">
                                <p className="text-gray-500">Belum ada data misi yang ditambahkan.</p>
                            </div>
                        )}
                    </div>

                    {/* Nilai Dasar Section */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                            <span className="w-1 h-8 bg-purple-600 mr-3"></span>
                            Nilai Dasar
                        </h3>
                        {values.length > 0 ? (
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {values.map((value) => (
                                    <ItemCard
                                        key={value.id}
                                        item={value}
                                        bgColor="bg-purple-50"
                                        textColor="text-purple-800"
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="bg-gray-50 rounded-lg p-8 text-center">
                                <p className="text-gray-500">Belum ada data nilai dasar yang ditambahkan.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Delete Modal */}
            {showDeleteModal && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
                    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                        <div className="mt-3 text-center">
                            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                                <TrashIcon className="h-6 w-6 text-red-600" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mt-2">
                                Hapus Data
                            </h3>
                            <div className="mt-2 px-7 py-3">
                                <p className="text-sm text-gray-500">
                                    Apakah Anda yakin ingin menghapus "{itemToDelete?.title}"?
                                    Tindakan ini tidak dapat dibatalkan.
                                </p>
                            </div>
                            <div className="flex justify-center space-x-3 mt-4">
                                <button
                                    onClick={() => setShowDeleteModal(false)}
                                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
                                >
                                    Batal
                                </button>
                                <button
                                    onClick={confirmDelete}
                                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                                >
                                    Hapus
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}
