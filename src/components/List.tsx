

import { IoMdCheckboxOutline } from "react-icons/io";

interface ListItemProps {
    item: string
}
interface ListProps {
    items: string[]
}

function ListItem({item}:ListItemProps) {
  return (
    <li className="flex items-center gap-4 md:text-lg text-base font-normal font-montserrat ">
      <span>
        <IoMdCheckboxOutline color="#015907" size={20} />
      </span>
      {item}
    </li>
  );
}

function List({items}:ListProps) {
  return (
    <ul className="flex flex-col gap-2">
    {items.map((item, index) => (
      <ListItem key={index} item={item}/>
    ))}
    </ul>
  );
}

export default List;
