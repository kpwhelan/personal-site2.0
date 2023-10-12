import BlogPostPreview from "@/Components/BlogPostPreview";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/WelcomePage/Navbar";
import logo from '../../assets/K.png';
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";

export default function Blog({ posts }) {
    const { data, setData, errors, reset } = useForm({
        email: '',
        firstName: ''
    });

    const [showForm, setShowForm] = useState(true);
    const [responseMessage, setResponseMessage] = useState('');
    const [showError, setShowError] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [processing, setProcessing] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        setProcessing(true);
        setEmailErrorMessage('');
        setNameErrorMessage('');

        if (data.email === '' || data.firstName === '') {
            if (data.email === '') setEmailErrorMessage('The email field is required');
            if (data.firstName === '') setNameErrorMessage('The name field is required');

            setProcessing(false);

            return
        }

        axios.post(route('add-subscriber'), {
            'email': data.email,
            'name': data.firstName
        })
        .then(response => {
            if (response.data.success) {
                setShowForm(false);
                setResponseMessage(response.data.message);
            }
        })
        .catch(error => {
            setResponseMessage(error.response.data.message);
            setShowError(true);
            setProcessing(false);
        })
    }
    return (
        <>
            <Navbar className={"text-my-gray w-screen p-4 flex justify-around items-center border border-b-my-sage"} />
            <div className="flex flex-col-reverse lg:flex-row">
                <div className="w-[90%] md:w-[60%] mx-auto">
                    {posts.map(post => {
                        return <BlogPostPreview key={post.id} post={post} />
                    })}
                </div>

                {/* <div className="md:fixed p-4 md:right-0 md:top-28 h-[75%] md:w-[70%] lg:w-[30%] border-l-2 border-t-2 border-b-2 flex items-center text-center md:text-left"> */}
                <div className='w-[70%] lg:w-[30%] mx-auto lg:mx-0'>
                    <div className='mt-16'>
                        {showForm &&
                        <>
                            <div className='text-center md:text-left w-[100%]'>
                                <img src={logo} className="max-w-[20%]"></img>
                                <p className='text-2xl'>Subscribe So You Don't Miss Out!</p>
                                <p>Subscribe below and get new posts delivered right to your inbox!</p>
                            </div>

                            <form onSubmit={submit} className='w-[100%] md:w-[80%] mt-10 border-b-2 md:border-b-0 pb-4 md:pb-0'>
                                <div className="mt-4">
                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        autoComplete="email"
                                        onChange={(e) => setData('email', e.target.value)}

                                    />

                                    <InputError message={emailErrorMessage} className="mt-2" />

                                    <TextInput
                                        id="first_name"
                                        name="first_name"
                                        placeholder="First Name"
                                        value={data.firstName}
                                        className="mt-1 block w-full"
                                        autoComplete="first_name"
                                        onChange={(e) => setData('firstName', e.target.value)}

                                    />

                                    <InputError message={nameErrorMessage} className="mt-2" />
                                </div>

                                {showError &&
                                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-2 flex flex-col" role="alert">
                                        <strong className="font-bold">Woops! </strong>
                                        <span className="block sm:inline">{responseMessage}</span>
                                    </div>
                                }

                                <div className="flex items-center justify-end mt-4">
                                    <PrimaryButton className="ml-4"  disabled={processing}>
                                    <p className='text-lg'>Subscribe</p>
                                    </PrimaryButton>
                                </div>
                            </form>
                            </>
                        }

                        {!showForm &&
                            <div className='text-center'><p className='text-xl lg:mt-[50%]'>{responseMessage}</p></div>
                        }
                    </div>
                </div>
                {/* </div> */}

            </div>
            <Footer />
        </>
    )
}
