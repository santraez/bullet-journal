import { useState } from "react";
import { HiXCircle } from "react-icons/hi";

const DiaryCell = () => {
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const numberDay = new Date().getDay();
  const dayName = dayNames[numberDay].toUpperCase();
  const dateDay = new Date().getDate();
  const today = `${dayName} ${dateDay}th`;

  const [works, setWorks] = useState([]);
  const [show, setShow] = useState(false);

  const addWork = e => {
    if(e.target.value.trim() !== '') {
      setWorks([...works, {
        id: new Date().getTime(), 
        data: `* ${e.target.value}`
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
  return (
    <>
    <div className="container-diary-cell">
      <div className="container-diary-cell__bar">
        <div className="container-diary-cell__title">
          <p>{today}</p>
        </div>
      </div>
      <div>
        {
          works.map((work) => {
            return (
              <div key={work.id}>
                <div>
                  <p>{work.data}</p>
                </div>
                <div onClick={() => deleteItem(work.id)}>
                  <HiXCircle />
                </div>
              </div>
            );
          })
        }
        {
          show ? (
            <div>
              <input onBlur={addWork} type="text" placeholder="* Add new ..." />
            </div>
          ) : (
            <div onDoubleClick={showInput}>
              <p>* Add new ...</p>
            </div>
          )
        }
      </div>
    </div>
    </>
  );
};

export default DiaryCell;