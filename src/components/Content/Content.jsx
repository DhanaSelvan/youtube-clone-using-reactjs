import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { FaUserCircle } from "react-icons/fa";


import laptop from '../../assets/laptop.jpg'

const Content = () => {
    return (
        <>
        <section className="p-5">
            <div className="card-wrapper flex gap-5 flex-wrap justify-center">
                <Card maxW='sm' className='w-[300px] rounded-lg'>
                    <CardHeader className='mb-3'>
                        <img src={laptop} alt="" className='rounded-lg'/>
                    </CardHeader>
                    <CardBody className='flex gap-3'>
                        <div>
                            {/* <img src="" alt="" /> */}
                            <FaUserCircle className='size-12'/>
                        </div>
                        <div className='flex flex-col'>
                            <h3 className='text-xl font-bold'>React Full Tutorial by DS Coders</h3>
                            <h4 className='text-lg font-semibold text-slate-600'>DS Coders</h4>
                            <h5 className='text-slate-500'>11.M Views          1 year ago</h5>
                        </div>
                    </CardBody>
                </Card>
                <Card maxW='sm' className='w-[300px] rounded-lg'>
                    <CardHeader className='mb-3'>
                        <img src={laptop} alt="" className='rounded-lg'/>
                    </CardHeader>
                    <CardBody className='flex gap-3'>
                        <div>
                            {/* <img src="" alt="" /> */}
                            <FaUserCircle className='size-12'/>
                        </div>
                        <div className='flex flex-col'>
                            <h3 className='text-xl font-bold'>React Full Tutorial by DS Coders</h3>
                            <h4 className='text-lg font-semibold text-slate-600'>DS Coders</h4>
                            <h5 className='text-slate-500'>11.M Views          1 year ago</h5>
                        </div>
                    </CardBody>
                </Card>
                <Card maxW='sm' className='w-[300px] rounded-lg'>
                    <CardHeader className='mb-3'>
                        <img src={laptop} alt="" className='rounded-lg'/>
                    </CardHeader>
                    <CardBody className='flex gap-3'>
                        <div>
                            {/* <img src="" alt="" /> */}
                            <FaUserCircle className='size-12'/>
                        </div>
                        <div className='flex flex-col'>
                            <h3 className='text-xl font-bold'>React Full Tutorial by DS Coders</h3>
                            <h4 className='text-lg font-semibold text-slate-600'>DS Coders</h4>
                            <h5 className='text-slate-500'>11.M Views          1 year ago</h5>
                        </div>
                    </CardBody>
                </Card>
                <Card maxW='sm' className='w-[300px] rounded-lg'>
                    <CardHeader className='mb-3'>
                        <img src={laptop} alt="" className='rounded-lg'/>
                    </CardHeader>
                    <CardBody className='flex gap-3'>
                        <div>
                            {/* <img src="" alt="" /> */}
                            <FaUserCircle className='size-12'/>
                        </div>
                        <div className='flex flex-col'>
                            <h3 className='text-xl font-bold'>React Full Tutorial by DS Coders</h3>
                            <h4 className='text-lg font-semibold text-slate-600'>DS Coders</h4>
                            <h5 className='text-slate-500'>11.M Views          1 year ago</h5>
                        </div>
                    </CardBody>
                </Card>
                <Card maxW='sm' className='w-[300px] rounded-lg'>
                    <CardHeader className='mb-3'>
                        <img src={laptop} alt="" className='rounded-lg'/>
                    </CardHeader>
                    <CardBody className='flex gap-3'>
                        <div>
                            {/* <img src="" alt="" /> */}
                            <FaUserCircle className='size-12'/>
                        </div>
                        <div className='flex flex-col'>
                            <h3 className='text-xl font-bold'>React Full Tutorial by DS Coders</h3>
                            <h4 className='text-lg font-semibold text-slate-600'>DS Coders</h4>
                            <h5 className='text-slate-500'>11.M Views          1 year ago</h5>
                        </div>
                    </CardBody>
                </Card>
                <Card maxW='sm' className='w-[300px] rounded-lg'>
                    <CardHeader className='mb-3'>
                        <img src={laptop} alt="" className='rounded-lg'/>
                    </CardHeader>
                    <CardBody className='flex gap-3'>
                        <div>
                            {/* <img src="" alt="" /> */}
                            <FaUserCircle className='size-12'/>
                        </div>
                        <div className='flex flex-col'>
                            <h3 className='text-xl font-bold'>React Full Tutorial by DS Coders</h3>
                            <h4 className='text-lg font-semibold text-slate-600'>DS Coders</h4>
                            <h5 className='text-slate-500'>11.M Views          1 year ago</h5>
                        </div>
                    </CardBody>
                </Card>
                <Card maxW='sm' className='w-[300px] rounded-lg'>
                    <CardHeader className='mb-3'>
                        <img src={laptop} alt="" className='rounded-lg'/>
                    </CardHeader>
                    <CardBody className='flex gap-3'>
                        <div>
                            {/* <img src="" alt="" /> */}
                            <FaUserCircle className='size-12'/>
                        </div>
                        <div className='flex flex-col'>
                            <h3 className='text-xl font-bold'>React Full Tutorial by DS Coders</h3>
                            <h4 className='text-lg font-semibold text-slate-600'>DS Coders</h4>
                            <h5 className='text-slate-500'>11.M Views          1 year ago</h5>
                        </div>
                    </CardBody>
                </Card>
                <Card maxW='sm' className='w-[300px] rounded-lg'>
                    <CardHeader className='mb-3'>
                        <img src={laptop} alt="" className='rounded-lg'/>
                    </CardHeader>
                    <CardBody className='flex gap-3'>
                        <div>
                            {/* <img src="" alt="" /> */}
                            <FaUserCircle className='size-12'/>
                        </div>
                        <div className='flex flex-col'>
                            <h3 className='text-xl font-bold'>React Full Tutorial by DS Coders</h3>
                            <h4 className='text-lg font-semibold text-slate-600'>DS Coders</h4>
                            <h5 className='text-slate-500'>11.M Views          1 year ago</h5>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </section>
        </>
    )
}

export default Content;