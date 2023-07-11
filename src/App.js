import React, { useState } from "react";
import "./styles.css";

const DAYS_PER_WEEK = 7;
const TOTAL_DAYS = 30;

const App = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const renderCalendar = () => {
    const calendar = [];
    let dayCount = 1;

    while (dayCount <= TOTAL_DAYS) {
      const week = [];

      for (let i = 0; i < DAYS_PER_WEEK; i++) {
        if (dayCount > TOTAL_DAYS) break;

        const day = dayCount;
        const isCurrentMonth = true; // Assuming we are displaying the current month

        week.push(
          <td
            key={day}
            className={isCurrentMonth && selectedDay === day ? "selected" : ""}
            onClick={() => handleDayClick(day)}
          >
            {day}
          </td>
        );

        dayCount++;
      }

      calendar.push(<tr key={dayCount}>{week}</tr>);
    }

    return calendar;
  };

  return (
    <div className="container">
      <table className="calendar">
        <thead>
          <tr>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>
        <tbody>{renderCalendar()}</tbody>
      </table>

      <div className="selection">
        {selectedDay && <p>Month 1, Selected day is {selectedDay}</p>}
      </div>
    </div>
  );
};

export default App;
