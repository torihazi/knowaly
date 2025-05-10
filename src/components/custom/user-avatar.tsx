import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { User2 } from "lucide-react";

type UserAvatarProps = {
  imgUrl: string;
  email: string;
};

export const UserAvatar = ({ imgUrl, email }: UserAvatarProps) => {
  return (
    <>
      <Avatar className="w-8 h-8">
        <AvatarImage src={imgUrl} className="rounded-full" />
        <AvatarFallback>
          <User2 />
        </AvatarFallback>
      </Avatar>
      <span>{email}</span>
    </>
  );
};
