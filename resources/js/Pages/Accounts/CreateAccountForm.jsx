import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import SelectInput from '@/Components/SelectInput';
import { useForm } from '@inertiajs/react';

export default function Create({className = ''}) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        location: '',
        email: '',
        type: 'agent',
        phone_number: '',
    });

    const types = [
        { value: 'agent', label: 'Agent' },
        { value: 'branch', label: 'Branch' },
        { value: 'broker', label: 'Broker' },
        { value: 'outlet', label: 'Outlet' }
    ];

    const submit = (e) => {
        e.preventDefault();
        // console.log(data);
        post(route('accounts.store'));
    };

    return (
        <section className={className}>
            <form onSubmit={submit}>
                <div className="grid grid-cols-2 gap-x-8">
                    <div>
                        <InputLabel htmlFor="name" value="Name" />

                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            onChange={(e) => setData('name', e.target.value)}
                            required
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>
                </div>
                <div className='mt-4'>
                    <InputLabel htmlFor="location" value="Location" />

                    <TextInput
                        id="location"
                        name="location"
                        value={data.location}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('location', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="grid grid-cols-2 gap-x-8 mt-4">
                    <div>
                        <InputLabel htmlFor="phone_number" value="Phone Number" />

                        <TextInput
                            id="phone_number"
                            name="phone_number"
                            value={data.phone_number}
                            className="mt-1 block w-full"
                            autoComplete="phone_number"
                            onChange={(e) => setData('phone_number', e.target.value)}
                            required
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="type" value="Type" />
                        
                        <select
                            id="type"
                            name="type"
                            value={data.type}
                            className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full"
                            onChange={(e) => setData('type', e.target.value)}
                        >
                            {types.map(type => (
                                <option key={type.value} value={type.value}>{type.label}</option>
                            ))}
                        </select>
                        <InputError message={errors.email} className="mt-2" />
                    </div>
                </div>

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ms-4" disabled={processing}>
                        Save
                    </PrimaryButton>
                </div>
            </form>
        </section>
    );
}