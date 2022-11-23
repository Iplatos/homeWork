import React, {useEffect, useState} from 'react'
import SuperRange from "../c7-SuperRange/SuperRange";


type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    const [valueInput_1, setValueInput_1] = useState(value ? value[0] : 0);
    const [valueInput_2, setValueInput_2] = useState(value ? value[1] : 10);

    useEffect(() => {
        onChangeRange && onChangeRange([valueInput_1,valueInput_2])
    },[valueInput_1,valueInput_2])

    return (
        <>
            <SuperRange  value={value && value[0]} onChangeRange={setValueInput_1}/>
            <SuperRange  style={{transform:'rotate(180deg)'}} value={value && value[1]} onChangeRange={setValueInput_2}/>
        </>
    )
}

export default SuperDoubleRange
