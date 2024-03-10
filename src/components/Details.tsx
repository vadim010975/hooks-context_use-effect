import { useState, useEffect } from "react";
const USER_URL = "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

type User = {
  id: number,
  name: string,
}

type userData = {
  id: number,
  name: string,
  avatar: string,
  details: {
    city: string,
    company: string,
    position: string,
  },
}

type detailsProps = {
  user: User | undefined,
}

const Details = (props: detailsProps) => {

  const [userData, setUserData] = useState<userData>();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchUser = async () => {
    setLoading(true);
    const r = await fetch(USER_URL + props.user?.id + ".json");
    const data = await r.json();
    await delay(1000);
    setUserData(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchUser();
  }, [props]);

  return (
    <div className="details">
      {loading && <div>Загрузка...</div>}
      {!loading && <ul className="details-list">
        <li className="details-img-wrapper">
          <img src={userData?.avatar} alt="image" className="details-img" />
        </li>
        <li className="details-name details-item">{userData?.name}</li>
        <li className="details-city details-item">{userData?.details?.city}</li>
        <li className="details-company details-item">{userData?.details?.company}</li>
        <li className="details-position details-item">{userData?.details?.position}</li>
      </ul>}
    </div>
  )
}

export default Details;