import React, { useEffect } from "react";
import { useRef } from "react";

const getPixelRatio = (context) => {
    var backingStore =
        context.backingStorePixelRatio ||
        context.webkitBackingStorePixelRatio ||
        context.mozBackingStorePixelRatio ||
        context.msBackingStorePixelRatio ||
        context.oBackingStorePixelRatio ||
        context.backingStorePixelRatio ||
        1;
    return (window.devicePixelRatio || 1) / backingStore;
};

const Heart = () => {
    let ref = useRef();

    useEffect(() => {
        let canvas = ref.current;
        let context = canvas.getContext("2d");

        let ratio = getPixelRatio(context);
        let width = getComputedStyle(canvas)
            .getPropertyValue("width")
            .slice(0, -2);
        let height = getComputedStyle(canvas)
            .getPropertyValue("height")
            .slice(0, -2);

        canvas.width = width * ratio;
        canvas.height = height * ratio;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        let requestId;
        let i = 0;
        const render = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);

            context.beginPath();
            //context.arc(canvas.width / 4 + 2,canvas.height / 4, (canvas.width / 4) * Math.abs(Math.cos(i)),0,2*Math.PI);
            const w = canvas.width / 2;
            const h = canvas.height / 2;

            const d = Math.min(w, h);
            const k = Math.sin(i) * 10;

            context.strokeStyle = "#fff";
            context.strokeWeight = canvas.width / 100;
            context.shadowOffsetX = canvas.width / 100;
            context.shadowOffsetY = canvas.height / 100;
            context.lineWidth = canvas.width / 40;
            context.fillStyle = "rgba(254, 12, 13, 1)";

            console.log(k);
            context.moveTo(d, d);
            context.quadraticCurveTo(
                (24 * d) / 16,
                (10 * d) / 16,
                d,
                (5 * d) / 4 + k
            );
            context.quadraticCurveTo((8 * d) / 16, (10 * d) / 16, d, d);
            context.stroke();
            context.fill();

            i += 0.05;
            requestId = requestAnimationFrame(render);
            console.log(requestId);
        };

        render();
        return () => {
            cancelAnimationFrame(requestId);
        };
    });

    return (
        <canvas
            ref={ref}
            style={{ width: "400px", height: "400px", background: "black" }}
        />
    );
};

export default Heart;
