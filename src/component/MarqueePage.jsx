import { getMarqueeText } from '@/lib/data';
import { Button, Chip } from '@heroui/react';
import React from 'react';
import {CircleFill} from "@gravity-ui/icons";
import Marquee from "react-fast-marquee";
const MarqueePage =async () => {
    const marqueeData=await getMarqueeText();
    console.log(marqueeData);
    return (
        <div>
            <div className='flex items-center my-10 border p-5 rounded-2xl'>
                <Button variant='primary'>LIVE</Button>
                <Marquee pauseOnHover speed={100}>

                   <div className='flex gap-6 items-center'>
                    {
                        marqueeData.map((data,item)=><div key={item}>
                            <Chip className='m-3' color="warning" variant="primary">
          <CircleFill width={6} />
          <Chip.Label>{data.type}</Chip.Label>
        </Chip>
             <Chip className='m-3' color="danger" variant="primary">
          <CircleFill width={6} />
          <Chip.Label>{data.label}</Chip.Label>
        </Chip>
          <Chip>{data.message}</Chip>
                        </div>)
                    }
                   </div>
                </Marquee>
            </div>

        </div>
    );
};

export default MarqueePage;