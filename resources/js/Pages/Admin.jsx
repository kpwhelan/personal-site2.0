import { Button, Card, CardHeader, CardBody, Radio, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Admin({ records }) {
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
        </div>
    )
}
