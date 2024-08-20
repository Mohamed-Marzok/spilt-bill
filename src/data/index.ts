import { IFriend, IInputsCalculate } from "../interfaces";
import { v4 as uuidv4 } from "uuid";
export const friendsList: IFriend[] = [
  {
    id: uuidv4(),
    name: "zoka",
    num: 0,
    image:
      "https://cdn.pixabay.com/photo/2024/08/01/15/57/woman-8937604_640.png",
  },
  {
    id: uuidv4(),
    name: "ali",
    num: 10,
    image:
      "https://cdn.pixabay.com/photo/2024/08/01/15/57/woman-8937604_640.png",
  },
  {
    id: uuidv4(),
    name: "may",
    num: -50,
    image:
      "https://cdn.pixabay.com/photo/2024/08/01/15/57/woman-8937604_640.png",
  },
];
export const inputsCalculateList: IInputsCalculate[] = [
  {
    state: false,
    text: "💰 Bill value",
    name: "total",
  },
  {
    state: false,
    text: "🕴 you expense",
    name: "you",
  },
  {
    state: true,
    text: "",
    name: "fri",
  },
];
