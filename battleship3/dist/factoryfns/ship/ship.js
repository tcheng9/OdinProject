const shipFactory = function (coordinates){
    const shipArray = [];

    coordinates.map((coordinates) => {
        return shipArray.push(coordinates);
    });

    function hit(hitIndex){
        shipArray[hitIndex] = "hit";
    }

    function isSunk(){
        return shipArray.every((shipPart) => shipPart === 'hit');
    }

    return {
        hit, 
        isSunk,
        coordinates,
        shipArray
    }
};

export default shipFactory;