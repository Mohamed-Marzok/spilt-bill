import { ButtonHTMLAttributes } from "react";
import { IFriend } from "../interfaces";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  friend: IFriend;
  active: IFriend;
}

export default function Friend({ friend, active, ...buttonProps }: IProps) {
  const { num, name, image } = friend;
  const isActive = active?.id === friend.id;

  return (
    <div
      className="flex justify-between py-3 px-2 gap-3 items-center w-screen md:w-fit"
      style={{ backgroundColor: isActive ? "orange" : "white" }}
    >
      <img className="w-10 h-10 rounded-full" src={image} alt={name} />
      <div className="flex flex-col justify-between w-60">
        <p>{name}</p>
        <p
          style={{
            color: num === 0 ? "gray" : num > 0 ? "green" : "red",
          }}
        >
          {num === 0
            ? `You and ${name} are even`
            : num > 0
            ? `${name} owes you ${num}$`
            : `You owe ${name} ${-num}$`}
        </p>
      </div>
      <div className="grow "></div>
      <button
        className={`px-5 py-1 text-white rounded-lg hover:bg-orange-400 ${
          isActive ? "bg-orange-800" : "bg-orange-600"
        }`}
        {...buttonProps}
      >
        Select
      </button>
    </div>
  );
}
