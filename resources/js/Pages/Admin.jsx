import { Button, Card, CardHeader, CardBody, Radio, Typography, Alert } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import MDEditor from '@uiw/react-md-editor';
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Admin({ records }) {
    const [value, setValue] = useState("**Hello world!!!**");
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [showReponseMessage, setShowResponseMessage] = useState(false);
    const [messageColor, setMessageColor] = useState('');

    const submitPost = () => {
        axios.post(route('submitPost'), {
            'title': title,
            'body': value,
            'imageUrl': imageUrl
        })
        .then(response => {
            if (response.data.success) {
                setShowResponseMessage(true);
                setResponseMessage(response.data.message);
                setMessageColor('my-sage');
                setTitle('');
                setValue('');
            }
        })
        .catch(error => {
            setShowResponseMessage(true);
            setResponseMessage(error.data.message);
            setMessageColor('red');
        })
    }

    const setAsResponded = event => {
        axios.post(route('mark-as-responded'), {
            'record_id': event.target.id
    })
        .then(response => {
            if (response.data.success) {
                console.log(response.data.message);
                event.target.parentNode.remove()
            }
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="p-2">
            <div className="w-full border-b-2 border-b-my-sage">
                <p className="text-2xl">Kevin Whelan - Admin Panel</p>
            </div>
            <div className="mt-6">
                <p className="text-xl">New Contacts</p>
                {records.map(record => {
                    return <Card className="w-[95%] md:w-[30%] p-2 my-6" key={record.id}>
                                <Button onClick={setAsResponded} id={record.id} className="bg-my-sage">Mark Responded</Button>
                                <CardBody>
                                    <Typography variant="h3" color="blue-gray">
                                        Name: {record.name}
                                    </Typography>
                                    <Typography variant="h5" color="blue-gray" className="mb-2">
                                        Subject: {record.subject}
                                    </Typography>
                                    <Typography>
                                        Email: {record.email}
                                    </Typography>
                                    <Typography>
                                        Message: {record.message}
                                    </Typography>
                                </CardBody>
                            </Card>
                })}
            </div>

            <div>
                <div className="my-4">
                    <InputLabel htmlFor="title" value="Title" />

                    <TextInput
                        id="title"
                        name="title"
                        value={title}
                        className="mt-1 block w-full"
                        autoComplete="current-title"
                        onChange={(e) => {setTitle(e.target.value)}}
                    />
                </div>

                <div className="my-4">
                    <InputLabel htmlFor="imageUrl" value="Image URL" />

                    <TextInput
                        id="imageUrl"
                        name="imageUrl"
                        value={imageUrl}
                        className="mt-1 block w-full"
                        autoComplete="current-imageUrl"
                        onChange={(e) => {setImageUrl(e.target.value)}}
                    />
                </div>

                <MDEditor value={value} onChange={setValue} />
                <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
                {showReponseMessage &&
                    // <Alert className={`max-w-fit my-2 text-white ${messageColor}`}>{responseMessage}</Alert>

                    <div role="alert">
                        <div className={`max-w-fit my-2 border border-t-0 rounded-b bg-${messageColor} p-3 text-white`}>
                            <p>{responseMessage}</p>
                        </div>
                    </div>
                }

                <PrimaryButton className='bg-my-sage mt-2 bg-opacity-80' onClick={submitPost}>
                    <p className='text-2xl'>Post</p>
                </PrimaryButton>
            </div>
        </div>
    )
}
