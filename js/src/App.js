import { useState } from 'react';
import { MiniCalendar } from '@mantine/dates';
import { MantineProvider, createTheme } from '@mantine/core';

export default function App() {
    console.log("App component rendered");
    // Example data to pass into DaysData
    const daysInfo = { message: "Hello from App!" };

    return (
        <MantineProvider>
            <div className="App">
                <div>
                    <MyMiniCalendar />
                </div>
                {/* Pass data as a prop */}
                <DaysData data={daysInfo} />
            </div>
        </MantineProvider>
    );
}

function MyMiniCalendar() {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDaySelect = (date) => {
        setSelectedDate(date);
        console.log("Selected day:", date);
        // Add any additional logic here

        const calendarButton = document.querySelector('.mantine-UnstyledButton-root');
        if (calendarButton) {
            calendarButton.classList.add('my-custom-calendar-btn');
        }
    };

    return (
        <MiniCalendar value={selectedDate} onChange={handleDaySelect} numberOfDays={7} />
    );
}

function DaysData(response) {
    return (
        <div>
            <h2>Days Data Component {response.data.message}</h2>
            <p>{response.data.message}</p>
            {/* Additional content can be added here */}
        </div>
    );
}

