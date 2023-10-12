import MainImg from '../../../assets/main-img.jpg';
import { Card, CardBody, Typography } from '@material-tailwind/react';

export default function HeaderSectionComponent() {
    return (
        <>
            <div className="flex flex-wrap text-center justify-center xl:justify-between items-center  border-b-2 mt-10 p-2 rounded-md w-full">
                <img src={MainImg} className='rounded-md'></img>
                <p className='text-2xl'>Kevin Whelan - Caffeinated, Bearded, Rugged</p>
            </div>
        </>
    )
}
