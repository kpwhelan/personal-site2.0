import { Card, CardBody, CardFooter, Typography, textarea } from '@material-tailwind/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import Navbar from '@/Components/WelcomePage/Navbar';
import Footer from '@/Components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


export default function Contact() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState('');
    const [messageColor, setMessageColor] = useState('');
    const [displayForm, setDisplayForm] = useState(true);

    // useEffect(() => {
    //     return () => {
    //         reset('password', 'password_confirmation');
    //     };
    // }, []);

    const submit = (e) => {
        e.preventDefault();

        axios.post(route('send-contact'), {
            'name': data.name,
            'email': data.email,
            'subject': data.subject,
            'message': data.message
        })
        .then(response => {
            if (response.data.success) {
                reset();
                setDisplayForm(false);
            }
        })
        .catch(error => {
                setShowMessage(true);
                setMessageColor('red');
                setMessage(error.response.data.message);

                setTimeout(() => {
                    setShowMessage(false);
                    setMessageColor('');
                    setMessage('');
                }, 7000);
        })
    };

    return (
        <div className='h-[100vh]'>
            <Head title="Contact" />

            <Navbar className={"text-my-gray w-screen p-4 flex justify-around items-center border border-b-my-sage"} />

            {displayForm &&
                <form onSubmit={submit} className='w-[80%] lg:w-[50%] mx-auto mt-10'>
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
                            autoComplete="email"
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="subject" value="Subject" />

                        <TextInput
                            id="subject"
                            name="subject"
                            value={data.subject}
                            className="mt-1 block w-full"
                            autoComplete="subject"
                            onChange={(e) => setData('subject', e.target.value)}
                            required
                        />

                        <InputError message={errors.subject} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="message" value="Message" />

                        <textarea id="message" name="message" value={data.message} className="mt-1 block w-full border-gray-300 focus:border-my-sage focus:ring-my-sage rounded-md shadow-sm ' +
                    className" onChange={(e) => setData('message', e.target.value)} required />


                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    {showMessage &&
                        <div className={`p-4 my-4 text-sm text-white-800 rounded-lg bg-${messageColor}-50 dark:bg-gray-800 dark:text-white-400" role="alert transition ease-in-out`}>
                            <p>{message}</p>
                        </div>
                    }

                    <div className="flex items-center justify-end mt-4">
                        <PrimaryButton className="ml-4 bg-my-sage bg-opacity-80"  disabled={processing}>
                        <p className='text-lg'>Send It!</p>
                        </PrimaryButton>
                    </div>
                </form>
            }

            {!displayForm &&
                <Card className="mt-6 w-[90%]  md:w-[30%] mx-auto text-center">
                    <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        Thank You
                    </Typography>
                    <Typography className='mb-2'>
                     Your inquiry means a lot to me, and I’m thrilled that you’ve reached out.
                    </Typography>
                    <Typography>
                        Rest assured that I have received your message and am diving into the details. I'll get back to you as soon as possible with the information you need. In the meantime, please be sure to visit my blog and subscribe!.
                    </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                       -Kevin
                    </CardFooter>
                </Card>
            }

            <Footer className={'md:fixed md:bottom-0 md:right-0 md:left-0'} />
        </div>
    );
}
