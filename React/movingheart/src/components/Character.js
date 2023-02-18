import React, { useEffect, useRef, useState } from "react";

const Character = () => {
    let ref = useRef();

    const [background, setBackground] = useState({ x: -800, y: -1000 });
    const [character, setCharacter] = useState({ x: 200, y: 200 });

    useEffect(() => {
        drawBackground();
        drawCharacter();
    }, [character, background]);

    const canvas = ref.current;
    const context = canvas.getContext("2d");

    const drawBackground = () => {
        const bgImage = "rgb(255, 167, 167)";
        context?.drawImage(bgImage, background.x, background.y, 2560, 2048);
    };

    const drawCharacter = () => {
        const characterImage = "rgb(255, 255, 0)";
        context?.drawImage(characterImage, 200, 200, 32, 50);
    };

    return (
        <div>
            <canvas
                width={window.innerWidth}
                height={window.innerHeight}
                ref={ref}
            />
        </div>
    );
};

export default Character;
