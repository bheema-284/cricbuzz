import axios from 'axios';
import { useState, useEffect } from 'react';
export const HomePage = () => {
  const [mockData, setMockdata] = useState([]);
  const url =
    'https://api.cricapi.com/v1/currentMatches?apikey=8fb2094c-bd8b-4406-b438-2cc52cff19ea&offset=0&4bb075f6-10d9-4d0b-937a-65fed76bd2a8';
  useEffect(() => {
    axios.get(url).then((res) => {
      setMockdata(res.data.data);
    });
  }, []);
  console.log(mockData);
  return (
    <>
      <div className="data">
        {/* Iterate over products and show links */}

        {mockData.map((el) => {
          //return <Link to={`/`}>{<>el.image</><>el.title</>}</Link>;
          return (
            <div className="data1">
              <p>Date : {el.date}</p>
              <p>Date and Time : {el.dateTimeGMT}</p>
              <h3>{el.name}</h3>
              <div className="data2">
                <h4 className="productName">Match Type : {el.matchType}</h4>
                <h5 className="productPrice">status : {el.status}</h5>
                <h5>Teams : {el.teams}</h5>
                <p>Venue : {el.venue}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
