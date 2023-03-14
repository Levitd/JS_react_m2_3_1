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
        counters[counters.findIndex(el => el.id === id)]['value'] += 1;
        const newCounters = counters.concat();
        /*
        странное поведение... Если обновить  setCounters(counters), то не обновляется, а через новый массив работает....
        Посмютрю потом, как можно было по другому, или как нужно было по другому
        */
        setCounters(newCounters);
    };
    const handleDecrement = (id) => {
        counters[counters.findIndex(el => el.id === id)]['value'] -= 1;
        const newCounters = counters.concat();
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