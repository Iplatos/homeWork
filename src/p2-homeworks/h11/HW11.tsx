import React, {useState} from 'react'
import {RangeSlider} from "./common/MuiSlider/MuiSlider";

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeDoubleRange = (value: number | number[]) => {
        if (Array.isArray(value)) {
            setValue1(value[0]);
            setValue2(value[1]);
        }else {
            setValue1(value);
        }

    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <RangeSlider
                    value={value1}
                    onChangeDoubleRange={onChangeDoubleRange}
                    // сделать так чтоб value1 изменялось
                />
            </div>


            <RangeSlider value={[value1, value2]} onChangeDoubleRange={onChangeDoubleRange}/>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
