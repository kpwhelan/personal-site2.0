import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";

export default function Admin({ records }) {
    console.log(records);
    return (
        <div>
            <div className="w-full">
                <p className="text-3xl">Kevin Whelan - Admin Panel</p>
            </div>
            {records.map(record => {
                return <Card className="w-[95%] md:w-[50%] p-2 my-6">
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
    )
}
