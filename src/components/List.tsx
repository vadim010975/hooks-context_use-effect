import { FC } from "react";
import User, { UserType } from "./User";

type ListProps = {
  list: UserType[],
  selectedId: number | undefined,
  clickHandler: (user: UserType) => void;
}

const List: FC<ListProps> = ({list, ...props}) => {
  return (
    <ul className="list">
      {list.map(user => (
        <User user={user} key={user.id} {...props} />
      ))}
    </ul>
  )
}

export default List;
