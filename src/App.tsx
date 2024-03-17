import "./App.css"
import { useState, useEffect } from "react";
import List from "./components/List";
import Details from "./components/Details";
import { UserType } from "./components/User";
const LIST_URL="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default function App() {

  const [list, setList] = useState<UserType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<UserType>();

  const fetchList = async () => {
    setLoading(true);
    const r = await fetch(LIST_URL);
    const data = await r.json();
    await delay(1000);
    setList(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchList();
  }, []);

  const clickHandler = (user: UserType) => {
    setUser(user);
  }

  return (
    <div className="list-users">
      {loading && <div>Загрузка...</div>}
      {!loading && <List list={list} selectedId={user?.id} clickHandler={clickHandler} />}
      {user && <Details user={user} />}
    </div>
  );
}