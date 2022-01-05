import React from "react";

const ChartBar = (props) => {
    let barFillHeight = "0%";
    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
    }
    return (
        <div data-tip={barFillHeight + " = $" + props.value} className="h-full flex flex-col items-center tooltip">
            <div className="h-full w-full border border-fuchsia-100 rounded-2xl 
                    bg-fuchsia-200 overflow-hidden flex flex-col justify-end">
                <div className="bg-purple-800 w-full transition duration-300  ease-in-out" style={{ height: barFillHeight }}>

                </div>
            </div>
            <div className="font-bold text-xs mt-2 text-center">
                {props.lable}
            </div>
        </div>
    );
};

export default ChartBar;
