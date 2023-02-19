import React, { useEffect, useRef, useState } from "react";

const Character = () => {
    const ref = useRef();
    const [ctx, setCtx] = useState();

    useEffect(() => {
        const canvas = ref.current;
        setCtx(canvas.getContext("2d"));
    }, []);

    const drawSquare = (event) => {
        ctx.strokeStyle = "red";
        let x = event.clientX - ref.current.offsetLeft;
        let y = event.clientY - ref.current.offsetTop;
        let w = 50;
        let h = 50;

        ctx.strokeRect(x - w / 2, y - h / 2, w, h);
    };

    return (
        <div>
            <canvas
                ref={ref}
                width={1080}
                height={1080}
                onMouseDown={drawSquare}
            />
        </div>
    );
};

export default Character;
