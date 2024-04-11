import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import CreateAccountForm from './CreateAccountForm';
import { Head } from '@inertiajs/react';

export default function Create({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create Account</h2>}
        >
            <Head title="Create" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <CreateAccountForm/>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
