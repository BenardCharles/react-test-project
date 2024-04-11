import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link } from '@inertiajs/react';

export default function Index({ auth }) {
    const { accounts } = usePage().props;
    const {data} = accounts;
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Accounts</h2>
                    <Link href={route('accounts.create')} className="inline-flex items-center px-1 pt-1 sm:ms-10 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900">
                        Add Account
                    </Link>
                </div>
            }
        >
            <Head title="Accounts" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <div className="overflow-x-auto rounded">
                            <table className="w-full whitespace-nowrap">
                                <thead>
                                    <tr className="font-bold text-left">
                                        <th className="pb-4">Name</th>
                                        <th className="pb-4">Location</th>
                                        <th className="pb-4">Email</th>
                                        <th className="pb-4">Type</th>
                                        <th className="pb-4">Phone Number</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(({id, name, location, type, email, phone_number}) => (
                                        <tr
                                            key={id}
                                            className="hover:bg-gray-100 focus-within:bg-gray-100"
                                        >
                                            <td className="pb-4 border-t">{name}</td>
                                            <td className="pb-4 border-t">{location}</td>
                                            <td className="pb-4 border-t">{email}</td>
                                            <td className="pb-4 border-t">{type.toUpperCase()}</td>
                                            <td className="pb-4 border-t">{phone_number}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
