import { useState } from 'react';
import { MiniCalendar } from '@mantine/dates';
import { MantineProvider, createTheme } from '@mantine/core';

export default function App() {
    console.log("App component rendered");
    return (
        <MantineProvider>
            <div className="App">
                <header className="App-header">
                    <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Learning React
                    </a>
                </header>
                <MyMiniCalendar />
            </div>
        </MantineProvider>
    );
}

function MyMiniCalendar() {
    const [selectedDate, setSelectedDate] = useState(null);
    return (
        <MiniCalendar value={selectedDate} onChange={setSelectedDate} numberOfDays={7} />
    );
}