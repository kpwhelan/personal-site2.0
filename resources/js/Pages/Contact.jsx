import { useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import Navbar from '@/Components/WelcomePage/Navbar';
import Footer from '@/Components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';


export default function Contact() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        message: '',
    });

    // useEffect(() => {
    //     return () => {
    //         reset('password', 'password_confirmation');
    //     };
    // }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <>
            <Head title="Contact" />

            <Navbar className={"text-my-gray w-screen p-4 flex justify-around items-center border border-b-my-sage"} />

            <form onSubmit={submit} className='w-[50%] mx-auto mt-10'>
                <div className='mb-4 flex justify-between items-center'>
                    <div>
                        <h1 className='text-lg'>Contact Form</h1>
                        <p>You Will Receive a Response Within 24 Hours</p>
                    </div>

                    <FontAwesomeIcon icon={faEnvelopeOpen} size={'2x'} opacity={0.4} />

                </div>

                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
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

                <div className="mt-4">
                    <InputLabel htmlFor="message" value="Message" />

                    <textarea id="message" name="message" value={data.message} className="mt-1 block w-full border-gray-300 focus:border-my-sage focus:ring-my-sage rounded-md shadow-sm ' +
                className" onChange={(e) => setData('message', e.target.value)} required>

                    </textarea>


                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">


                    <PrimaryButton className="ml-4 bg-my-sage"  disabled={processing}>
                    <p className='text-lg'>Send It!</p>
                    </PrimaryButton>
                </div>
            </form>

            <Footer className={'fixed left-0 bottom-0 right-0'} />
        </>
    );
}
