import { FC } from "react";

export type UserType = {
  id: number,
  name: string,
}

type UserProps = {
  user: UserType,
  selectedId: number | undefined,
  clickHandler: (user: UserType) => void;
}

const User: FC<UserProps> = ({user, selectedId, clickHandler}) => {
  return (
    <li
      className={user.id === selectedId ? "list-user user-selected" : "list-user"}
      onClick={() => { clickHandler(user) }}
    >
      {user.name}
    </li>
  )
}

export default User;
