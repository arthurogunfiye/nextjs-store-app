import { LuUser } from 'react-icons/lu';
import { currentUser } from '@clerk/nextjs/server';
import Image from 'next/image';

const UserIcon = async () => {
  const user = await currentUser();

  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      <Image
        src={profileImage}
        alt='user image'
        className='size-6 rounded-full object-cover'
        width={20}
        height={20}
      />
    );
  }

  return (
    <LuUser className='size-6 bg-primary rounded-full text-white'>
      UserIcon
    </LuUser>
  );
};

export default UserIcon;
