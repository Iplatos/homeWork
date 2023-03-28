import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


type PropsType = {
    value:number | number[]
    onChangeDoubleRange:(value:number | number[])=>void
    activeThumb?:number
}

export const RangeSlider=(props:PropsType)=> {
    const minDistance = 10;
    const handleChange = (event: Event, newValue:number | number[],activeThumb?: number,) => {
        props.onChangeDoubleRange(newValue);
        if (Array.isArray(newValue)) {
            if (activeThumb === 0) {
                props.onChangeDoubleRange([Math.min(newValue[0], newValue[1] - minDistance), newValue[1]]);
            } else {
                props.onChangeDoubleRange([newValue[0], Math.max(newValue[1], newValue[0] + minDistance)]);
            }
        }
    };

    return (
        <Box sx={{ width: 300 }}>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={props.value}
                min={0}
                max={100}
                onChange={handleChange}
                valueLabelDisplay="auto"
                disableSwap
            />
        </Box>
    );
}