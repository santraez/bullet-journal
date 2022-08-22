import { useState } from "react";
import { HiXCircle } from "react-icons/hi";
import { FaAsterisk } from "react-icons/fa";

const DiaryCell = () => {
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const numberDay = new Date().getDay();
  const dayName = dayNames[numberDay].toUpperCase();
  const dateDay = new Date().getDate();
  const today = `${dayName} ${dateDay}th`;

  const [works, setWorks] = useState([]);
  const [show, setShow] = useState(false);
  const [cross, setCross] = useState(false);

  const addWork = e => {
    if(e.target.value.trim() !== '') {
      setWorks([...works, {
        id: new Date().getTime(), 
        data: e.target.value
      }])
    }
    setShow(false);
  };
  const showInput = () => {
    setShow(true);
  };
  const deleteItem = id => {
    const updateWork = works.filter(work => work.id !== id);
    setWorks(updateWork);
  }
  const showc = () => {
    setCross(true);
  };
  const hide = () => {
    setCross(false);
  };
  return (
    <>
    <div className="container-diary-cell">
      <div className="container-diary-cell__title">
        <p>{today}</p>
      </div>
      <div className="container-diary-cel__content">
        {
          works.map((work) => {
            return (
              <div onMouseEnter={showc} onMouseLeave={hide} className="diary-cel__content" key={work.id}>
                <div className="diary-cel__content--show">
                  <FaAsterisk className="diary-cel__content--show-asterix"/>
                  <p>{work.data}</p>
                </div>
                <div className="container-icon-cross" onClick={() => deleteItem(work.id)}>
                  {
                    cross && <HiXCircle className="diary-cel__content--show-cross" />
                  }
                </div>
              </div>
            );
          })
        }
        {
          show ? (
            <div className="diary-cel__input">
              <FaAsterisk className="diary-cel__content--input-asterix"/>
              <input onBlur={addWork} type="text" placeholder="Add new ..." />
            </div>
          ) : (
            <div className="diary-cel__input--show" onDoubleClick={showInput}>
              <FaAsterisk className="diary-cel__content--input-asterix"/>
              <p>Add new ...</p>
            </div>
          )
        }
      </div>
    </div>
    </>
  );
};

export default DiaryCell;