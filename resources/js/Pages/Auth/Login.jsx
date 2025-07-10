// resources/js/Pages/Auth/Login.jsx

import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { MapPinIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Login Admin" />

            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div className="text-center">
                        <div className="mx-auto h-20 w-20 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                            <MapPinIcon className="h-10 w-10 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                            CMS Admin Desa
                        </h2>
                        <p className="text-lg text-gray-600 mb-2">
                            Tanjung Selamat
                        </p>
                        <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                            <ShieldCheckIcon className="h-4 w-4" />
                            <span>Akses Terbatas untuk Admin</span>
                        </div>
                    </div>

                    {status && (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                            <p className="text-green-800 text-sm">{status}</p>
                        </div>
                    )}

                    <form onSubmit={submit} className="bg-white shadow-xl rounded-lg p-8 space-y-6">
                        <div>
                            <InputLabel htmlFor="email" value="Email atau Username" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                placeholder="admin@desatanjungselamat.id"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="password" value="Password" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="current-password"
                                placeholder="••••••••"
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="flex items-center">
                            <input
                                id="remember"
                                name="remember"
                                type="checkbox"
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                            />
                            <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
                                Ingat saya
                            </label>
                        </div>

                        <div>
                            <PrimaryButton
                                className="w-full flex justify-center py-3 px-4 text-base font-medium"
                                disabled={processing}
                            >
                                {processing ? 'Memproses...' : 'Masuk ke Dashboard'}
                            </PrimaryButton>
                        </div>

                        {canResetPassword && (
                            <div className="text-center">
                                <Link
                                    href={route('password.request')}
                                    className="text-sm text-blue-600 hover:text-blue-500"
                                >
                                    Lupa password?
                                </Link>
                            </div>
                        )}
                    </form>

                    <div className="text-center">
                        <p className="text-xs text-gray-500">
                            © 2024 Desa Tanjung Selamat. Semua hak dilindungi.
                        </p>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
