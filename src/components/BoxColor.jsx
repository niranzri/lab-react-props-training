function BoxColor({r, g, b, text}) {

    return (
        <div className="lastContainer" style={{backgroundColor: `rgb(${r}, ${g}, ${b})`, color: text}}>
            <p className="rgbText"> rgb ({r}, {g}, {b})</p>
        </div>
    );
}

export default BoxColor;

/* Another option:

const style = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    color: text,
}

style = {style};

*/