import React from "react";
import Sketch from "react-p5";

let start = 0
let end = 0
let blue;
let green;
let color;
const SketchTemplate = (props) => {
    const setup = (p5, canvasParentRef) => {

        p5.createCanvas(500, 500).parent(canvasParentRef);
        start = p5.width * 0.1
        end = p5.width * 0.9
        blue = p5.map(p5.random(), 0, 1, 0, 255);
        green = p5.map(p5.random(), 0, 1, 0, 255);
        p5.noStroke()

        p5.noiseDetail(2, .9)
    };

    const draw = (p5) => {
        p5.background(255);
        for (let x = start; x < end; x += 2) {
            const value = p5.noise(x / 100)
            const mappedValue = p5.map(value, 0, 1, -1 * (p5.height / 2), p5.height / 2)
            const rValue = p5.map(x, start, end, 0, 255);
            color = p5.color(rValue, green, blue);
            p5.fill(color);
            p5.circle(x, (p5.height / 2) + mappedValue, p5.width * 0.09);
        }
    };

    return <Sketch setup={setup} draw={draw} />;
};

export default SketchTemplate