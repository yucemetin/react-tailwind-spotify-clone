import React from 'react'
import { Range, getTrackBackground } from "react-range"

export default function CustomRange({ value, step, min, max, onChange }) {
    return (
        <Range
            values={[value]}
            step={step}
            min={min}
            max={max}
            onChange={values => onChange(values[0])}
            renderTrack={({ props, children }) => (
                <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    className="group"
                    style={{
                        ...props.style,
                        height: "36px",
                        display: "flex",
                        width: "100%"
                    }}
                >
                    <div
                        ref={props.ref}
                        style={{
                            height: "5px",
                            width: "100%",
                            borderRadius: "4px",
                            background: getTrackBackground({
                                values: [value],
                                colors: ["#1BB954", "#535353"],
                                min: min,
                                max: max
                            }),
                            alignSelf: "center"
                        }}
                    >
                        {children}
                    </div>
                </div>
            )}
            renderThumb={({ props, isDragged }) => (
                <div
                    {...props}
                    className={`h-3 w-3 rounded-full bg-white ${!isDragged ? 'opacity-0' : ''} group-hover:opacity-100`}
                    style={{
                        ...props.style,
                        boxShadow: "0px 2px 4px 0px rgb(0,0,0 /50%)"
                    }}
                >
                </div>
            )}
        />
    )
}
