import { ButtonHTMLAttributes } from "react";
import { IFriend } from "../interfaces";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  openMenu: boolean;
  setNewFriend: (friend: IFriend) => void;
  newFriend: IFriend;
  addFriend: () => void;
}

export default function NewFriendMenu({
  openMenu,
  newFriend,
  setNewFriend,
  addFriend,
  ...buttonProps
}: IProps) {
  return (
    <div className="w-full bg-orange-50 p-5">
      <div className={`flex flex-col gap-3 ${openMenu ? "hidden" : ""}`}>
        <div className="flex items-center justify-between">
          <p>Friend Name</p>
          <input
            className="w-1/2 px-2 shadow-md"
            type="text"
            value={newFriend.name}
            onChange={(e) =>
              setNewFriend({ ...newFriend, name: e.target.value })
            }
          />
        </div>
        <div className="flex items-center justify-between">
          <p>Image URL</p>
          <input
            className="w-1/2 px-2 shadow-md"
            type="text"
            value={newFriend.image}
            onChange={(e) =>
              setNewFriend({ ...newFriend, image: e.target.value })
            }
          />
        </div>
        <button
          className="bg-green-600 px-5 py-1 text-white rounded-lg hover:bg-green-400"
          onClick={addFriend}
        >
          Add
        </button>
      </div>
      <button
        className={`${
          openMenu
            ? "bg-orange-600 hover:bg-orange-400"
            : "bg-gray-600 hover:bg-gray-400"
        } px-5 py-1 text-white rounded-lg mt-3`}
        {...buttonProps}
      >
        {openMenu ? "Add Friend" : "Close"}
      </button>
    </div>
  );
}
