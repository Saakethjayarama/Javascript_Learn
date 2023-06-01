import React, { useState } from "react";

function DateFC({ day, month, year, format }) {
  const [val, setValue] = useState(null);
  React.useEffect(() => {
    let date = format;
    date = date.replace("dd", converter(day));
    date = date.replace("mm", converter(month));
    date = date.replace("yyyy", year);
    setValue(date);
  }, [day, month, year, format]);

  const converter = (no) => {
    no = no + "";
    return no.length == 2 ? no : "0" + no;
  };

  return <div>{val ? <input type="text" disabled value={val} /> : null}</div>;
}

export default DateFC;
