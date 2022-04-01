import './Styles.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const HomePage = () => {
  const [mockData, setMockdata] = useState([]);
  const url = 'https://cricbuzz-backend.herokuapp.com/minifeed';
  useEffect(() => {
    axios.get(url).then((res) => {
      setMockdata(res.data);
    });
  }, []);
  console.log(mockData);
  return (
    <>
      <div className="data">
        {mockData.map((el) => {
          return (
            <>
              <div className="privicaycb">
                <img className="imgpr" src={el.image} alt="" />
                <div id="cont">
                  <p>{el.heading}</p>
                </div>
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </>
  );
};
export const News = () => {
  const [mockData1, setMockdata1] = useState([]);
  const url1 = 'https://cricbuzz-backend.herokuapp.com/news';

  useEffect(() => {
    axios.get(url1).then((res) => {
      setMockdata1(res.data);
    });
  }, []);
  console.log(mockData1);
  return (
    <>
      <div className="data">
        {mockData1.map((el) => {
          return (
            <>
              {' '}
              <div className="privicaycb">
                <img className="imgpr" src={el.image} alt="" />
                <div id="cont">
                  <p>{el.title}</p>
                  <p>{el.date}</p>
                </div>
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </>
  );
};

export const Videos = () => {
  const [mockData2, setMockdata2] = useState([]);
  const url2 = 'https://cricbuzz-backend.herokuapp.com/videos';

  useEffect(() => {
    axios.get(url2).then((res) => {
      setMockdata2(res.data);
    });
  }, []);
  console.log(mockData2);
  return (
    <>
      <>
        <div className="data">
          {mockData2.map((el) => {
            return (
              <>
                {' '}
                <div className="privicaycb">
                  <img className="imgpr" src={el.image} alt="" />
                  <div id="cont">
                    <p>{el.title}</p>
                    <p>{el.time}</p>
                  </div>
                </div>
                <hr />
              </>
            );
          })}
        </div>
      </>
    </>
  );
};
