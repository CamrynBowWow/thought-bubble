import React from 'react';
import { Button } from './ui/button';
import { User2Icon } from 'lucide-react';

type UserIconProps = {
	style: string;
};

const UserIcon = ({ style }: UserIconProps) => {
	return (
		<Button className={style}>
			<User2Icon />
		</Button>
	);
};

export default UserIcon;
