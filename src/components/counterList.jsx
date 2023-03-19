import React, { useState } from 'react';
import Counter from './counter';

const CounterList = () => {
    const initialState = [
        { id: 0, value: 0, name: 'Ненужная вещь' },
        { id: 1, value: 4, name: 'Ложка' },
        { id: 2, value: 0, name: 'Вилка' },
        { id: 3, value: 0, name: 'Тарека' },
        { id: 4, value: 0, name: 'Набор минималиста' },
    ];
    let [counters, setCounters] = useState(initialState)

    const handleDelete = (id) => {
        const newCounters = counters.filter(c => c.id !== id);
        setCounters(newCounters);
    }
    const handleReset = () => {
        console.log('reset');
        setCounters(initialState);
    }

    const handleIncrement = (id) => {
        const newCounters = counters.map((el) => {
            if (el.id === id) {
                return { ...el, value: el.value + 1 };
            } else {
                return el;
            }
        });
        setCounters(newCounters);

    };
    const handleDecrement = (id) => {
        const newCounters = counters.map((el) => {
            if (el.id === id) {
                return { ...el, value: el.value - 1 };
            } else {
                return el;
            }
        });
        setCounters(newCounters);
    };

    return <>
        {counters.map(count => <Counter
            key={count.id}
            // id={count.id}
            // value={count.value}
            // name={count.name}
            // counter={count}
            onDelete={handleDelete}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            {...count}
        />)}
        <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
    </>
}
export default CounterList