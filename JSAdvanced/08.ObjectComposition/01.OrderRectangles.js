/**
 * Created by vo13n on 05-Jul-17.
 */
function orderRectangles(rectsData) {
    let rects = [];
    for (let [width, height] of rectsData) {
        let rect = createRectangle(width,height);
        rects.push(rect);
    }
    rects.sort((a,b) => a.compareTo(b));
    return rects;

    function createRectangle(width, height) {
        let rect = {
            width: width,
            height: height,
            area: () => rect.width * rect.height,
            compareTo: function (other) {
                let result = other.area() - rect.area();
                return result || (other.width - rect.width);
            }
        };
        return rect;
    }
}



console.log(orderRectangles([[10, 5], [5, 12]]));