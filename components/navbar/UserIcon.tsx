import { LuUser } from 'react-icons/lu';
import { currentUser } from '@clerk/nextjs/server';

const UserIcon = async () => {
  const user = await currentUser();

  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      <img
        src={profileImage}
        alt='user image'
        className='size-6 rounded-full object-cover'
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
