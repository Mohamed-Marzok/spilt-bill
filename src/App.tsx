import { useEffect, useMemo, useState } from "react";
import { friendsList } from "./data";
import { IFormInput, IFriend } from "./interfaces";
import Friend from "./components/Friend";
import NewFriendMenu from "./components/NewFriendMenu";
import CalculateMenu from "./components/CalculateMenu";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [friends, setFriends] = useState<IFriend[]>(friendsList);
  const [active, setActive] = useState<IFriend>(friendsList[0]);
  const [openMenu, setOpenMenu] = useState<boolean>(true);
  const [newFriend, setNewFriend] = useState<IFriend>({
    id: "",
    image: "",
    name: "",
    num: 0,
  });
  const [formInput, setFormInput] = useState<IFormInput>({
    total: 0,
    you: 0,
    fri: 0,
    who: "you",
  });
  // Handler to set active friend
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormInput({ ...formInput, [name]: value });
  };
  useEffect(() => {
    const friValue = formInput.total - formInput.you;
    setFormInput({ ...formInput, fri: friValue });
  }, [formInput]);
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormInput({ ...formInput, who: value });
  };
  const addFriend = () => {
    const friend = { ...newFriend, id: uuidv4() };
    setFriends([...friends, friend]);
    setNewFriend({ id: "", image: "", name: "", num: 0 });
  };
  const updateFriend = () => {
    if (formInput.who === "you") {
      const update = friends.map((friend) => {
        return friend.id === active.id
          ? { ...friend, num: -formInput.fri }
          : friend;
      });
      setFriends(update);
    } else {
      const update = friends.map((friend) => {
        return friend.id === active.id
          ? { ...friend, num: formInput.you }
          : friend;
      });
      setFriends(update);
    }
  };

  // Render friends with click handler
  const friendsRerender = useMemo(() => {
    return friends.map((friend) => (
      <Friend
        key={friend.id}
        friend={friend}
        active={active}
        onClick={() => setActive(friend)}
      />
    ));
  }, [friends, active]);

  return (
    <div className="container mx-auto h-screen flex flex-col md:flex-row items-center justify-center gap-10">
      <div>
        <div>{friendsRerender}</div>
        <NewFriendMenu
          openMenu={openMenu}
          onClick={() => setOpenMenu((prev) => !prev)}
          addFriend={addFriend}
          newFriend={newFriend}
          setNewFriend={setNewFriend}
        />
      </div>
      <CalculateMenu
        friend={active}
        formInput={formInput}
        handleInput={handleInput}
        handleSelect={handleSelect}
        updateFriend={updateFriend}
      />
    </div>
  );
}

export default App;
