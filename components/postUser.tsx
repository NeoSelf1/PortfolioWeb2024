import { getUser } from "@/lib/data";
import Image from "next/image";

type userIdProp = {
  userId: string;
};
const PostUser = async ({ userId }: userIdProp) => {
  const user = await getUser(userId);

  return (
    <div className="flex items-center gap-5">
      {user.img && (
        <Image
          className="object-cover rounded-lg"
          src={user.img}
          alt=""
          width={50}
          height={50}
        />
      )}
      <div className="flex flex-col gap-[2px]">
        <span className="text-gray-500 font-bold">Author</span>
        <span className="font-medium">{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
