'use client'
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Card } from "@heroui/react";
const MyProfile = () => {
    const{data,isPending}=authClient.useSession();
    const users=data?.user;
    
    return (
        <div className="text-center w-6/12 mx-auto  p-10">
           <Card className="h-[50vh] my-10 border border-gray-300 ">
             <Avatar  className=" mx-auto w-30 h-30">
        <Avatar.Image className="" alt="John Doe" src={users?.image} />
        
      </Avatar>
      <div className="text-center space-y-3">
     <p className="text-2xl">{users?.name}</p>
             <p className="text-muted">{users?.email}</p>
             <Button  variant="secondary">Update Profile</Button>
      </div>
             
           </Card>
        </div>
    );
};

export default MyProfile;