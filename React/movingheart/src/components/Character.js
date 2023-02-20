import React, { useEffect, useRef, useState } from "react";

const Character = () => {
    const ref = useRef();
    const contextRef = useRef();

    const [ctx, setCtx] = useState();

    useEffect(() => {
        const canvas = ref.current;
        const context = canvas.getContext("2d");

        const chars = [];
        const max_chars = 200;
        const separation = 1;

        let ww, wh, camera;

        class Vector {
            constructor(x, y, z) {
                this.x = x;
                this.y = y;
                this.z = z;
            }

            rotate(dir, ang) {
                const X = this.x;
                const Y = this.y;
                const Z = this.z;

                const SIN = Math.sin(ang);
                const COS = Math.cos(ang);

                if (dir === "x") {
                    this.y = Y * COS - Z * SIN;
                    this.z = Y * SIN + Z * COS;
                } else if (dir === "y") {
                    this.x = X * COS - Z * SIN;
                    this.z = X * SIN + Z * COS;
                }
            }

            project() {
                const ZP = this.z + camera.z;
                const DIV = ZP / wh;
                const XP = (this.x + camera.x) / DIV;
                const YP = (this.y + camera.y) / DIV;
                const Center = [ww / 2, wh / 2];

                return [XP + Center[0], YP + Center[1], ZP];
            }
        }

        class Char {
            constructor(letter, pos) {
                this.letter = letter;
                this.pos = pos;
            }

            rotate(dir, ang) {
                this.pos.rotate(dir, ang);
            }

            render() {
                const Pixel = this.pos.project();
                const XP = Pixel[0];
                const YP = Pixel[1];
                const max_size = 50;
                const size = ((1 / Pixel[2]) * max_size) | 0;
                const brightness = size / max_size;
                const col = `rgba(255,255,${
                    (100 * brightness) | (0 + 150)
                },${brightness})`;

                context.beginPath();
                context.fillStyle = col;
                context.font = size + "px monospace";
                context.fillText(this.letter, XP, YP);
                context.fill();
                context.closePath();
            }
        }

        const render = () => {
            for (let i = 0; i < chars.length; i++) {
                chars[i].render();
            }
        };

        let time = 0;
        const update = () => {
            context.clearRect(0, 0, ww, wh);
            for (let i = 0; i < chars.length; i++) {
                const DX = 0.005 * Math.sin(time * 0.001);
                const DY = 0.005 * Math.cos(time * 0.001);
                chars[i].rotate("x", DX);
                chars[i].rotate("y", DY);
            }
            ++time;
        };

        const loop = () => {
            window.requestAnimationFrame(loop);
            update();
            render();
        };

        const signedRandom = () => {
            return Math.random() - Math.random();
        };

        const createChars = () => {
            for (let i = 0; i < max_chars; i++) {
                const character = String.fromCharCode(
                    (Math.random() * 93 + 34) | 0
                );
                const X = signedRandom() * separation;
                const Y = signedRandom() * separation;
                const Z = signedRandom() * separation;
                const POS = new Vector(X, Y, Z);
                const CHAR = new Char(character, POS);
                chars.push(CHAR);
            }
        };

        const setDim = () => {
            ww = window.innerWidth;
            wh = window.innerHeight;
            canvas.width = ww | 0;
            canvas.height = wh | 0;
            context.scale(devicePixelRatio, devicePixelRatio);
        };

        const initCamera = () => {
            camera = new Vector(0, 0, separation + 1);
        };

        window.onresize = setDim;

        setDim();
        initCamera();
        createChars();
        loop();

        setCtx(contextRef.current);
    }, []);

    return (
        <div>
            <canvas ref={ref} />
        </div>
    );
};

export default Character;
