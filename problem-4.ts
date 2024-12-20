type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

type Shape = Circle | Rectangle;

function calculateShapeArea(shape: Shape): number {
  if ("radius" in shape) {
    return parseFloat((Math.PI * shape.radius * shape.radius).toFixed(2));
  } else if ("width" in shape && "height" in shape) {
    return shape.width * shape.height;
  }
  throw new Error("Invalid shape");
}

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea);

const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});
console.log(rectangleArea);
