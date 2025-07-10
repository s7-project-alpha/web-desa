import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function Edit({ auth, item }) {
    const { data, setData, put, processing, errors } = useForm({
        type: item.type || 'vision',
        title: item.title || '',
        content: item.content || '',
        description: item.description || '',
        order_position: item.order_position || 1,
        is_active: item.is_active || true,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('vision-mission-values.update', item.id));
    };

    const typeOptions = [
        { value: 'vision', label: 'Visi' },
        { value: 'mission', label: 'Misi' },
        { value: 'value', label: 'Nilai Dasar' },
    ];

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center">
                    <Link
                        href={route('vision-mission-values.index')}
                        className="mr-4 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                    >
                        <ArrowLeftIcon className="h-5 w-5" />
                    </Link>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Edit Visi, Misi & Nilai Dasar
                    </h2>
                </div>
            }
        >
            <Head title="Edit Visi, Misi & Nilai Dasar" />

            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Type Selection */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Jenis <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        value={data.type}
                                        onChange={(e) => setData('type', e.target.value)}
                                        className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        required
                                    >
                                        {typeOptions.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.type && (
                                        <p className="mt-1 text-sm text-red-600">{errors.type}</p>
                                    )}
                                </div>

                                {/* Title */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Judul <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={data.title}
                                        onChange={(e) => setData('title', e.target.value)}
                                        className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        placeholder="Masukkan judul..."
                                        required
                                    />
                                    {errors.title && (
                                        <p className="mt-1 text-sm text-red-600">{errors.title}</p>
                                    )}
                                </div>

                                {/* Content */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Konten <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        value={data.content}
                                        onChange={(e) => setData('content', e.target.value)}
                                        rows={6}
                                        className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        placeholder="Masukkan konten..."
                                        required
                                    />
                                    {errors.content && (
                                        <p className="mt-1 text-sm text-red-600">{errors.content}</p>
                                    )}
                                </div>

                                {/* Description */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Deskripsi Tambahan
                                    </label>
                                    <textarea
                                        value={data.description}
                                        onChange={(e) => setData('description', e.target.value)}
                                        rows={3}
                                        className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        placeholder="Masukkan deskripsi tambahan (opsional)..."
                                    />
                                    {errors.description && (
                                        <p className="mt-1 text-sm text-red-600">{errors.description}</p>
                                    )}
                                </div>

                                {/* Order Position */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Urutan <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="number"
                                        value={data.order_position}
                                        onChange={(e) => setData('order_position', parseInt(e.target.value) || 1)}
                                        min="1"
                                        className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        required
                                    />
                                    <p className="mt-1 text-sm text-gray-500">
                                        Angka yang lebih kecil akan ditampilkan lebih awal
                                    </p>
                                    {errors.order_position && (
                                        <p className="mt-1 text-sm text-red-600">{errors.order_position}</p>
                                    )}
                                </div>

                                {/* Is Active */}
                                <div>
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={data.is_active}
                                            onChange={(e) => setData('is_active', e.target.checked)}
                                            className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        />
                                        <span className="ml-2 text-sm text-gray-700">
                                            Aktif (tampilkan di website)
                                        </span>
                                    </label>
                                    {errors.is_active && (
                                        <p className="mt-1 text-sm text-red-600">{errors.is_active}</p>
                                    )}
                                </div>

                                {/* Submit Buttons */}
                                <div className="flex items-center justify-end space-x-3 pt-6 border-t border-gray-200">
                                    <Link
                                        href={route('vision-mission-values.index')}
                                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
                                    >
                                        Batal
                                    </Link>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 transition-colors"
                                    >
                                        {processing ? 'Menyimpan...' : 'Perbarui'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
