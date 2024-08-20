import { Fragment, useMemo } from "react";
import { inputsCalculateList } from "../data";
import { IFormInput, IFriend } from "../interfaces";

interface IProps {
  friend: IFriend | null;
  formInput: IFormInput;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  updateFriend: () => void;
}
export default function CalculateMenu({
  friend,
  formInput,
  handleInput,
  handleSelect,
  updateFriend,
}: IProps) {
  const renderInputs = useMemo(() => {
    return inputsCalculateList.map((input, i) => {
      return (
        <Fragment key={i}>
          {friend && (
            <div className="flex items-center justify-between">
              <p>{i === 2 ? `${friend.name}'s expense` : input.text}</p>
              <input
                className="w-20 pl-2"
                type="number"
                min="0"
                name={input.name}
                disabled={input.state}
                value={formInput[input.name as keyof IFormInput]}
                onChange={(e) => handleInput(e)}
              />
            </div>
          )}
        </Fragment>
      );
    });
  }, [friend, formInput]);
  return (
    <>
      {friend && (
        <div className="bg-orange-100 p-10">
          <h1 className="font-bold text-2xl uppercase mb-2">
            split a bill with anthony
          </h1>
          <div className="flex flex-col gap-4">
            {renderInputs}
            <div className="flex items-center justify-between">
              <p>who is paying the bill?</p>
              <select className="w-20 px-2" onChange={(e) => handleSelect(e)}>
                <option value="you">you</option>
                <option value="fri">{friend.name}</option>
              </select>
            </div>
            <button
              onClick={updateFriend}
              className="bg-green-600 px-5 py-1 text-white rounded-lg hover:bg-green-400"
            >
              Split Bill
            </button>
          </div>
        </div>
      )}
    </>
  );
}
