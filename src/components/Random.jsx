function Random ({min, max}) {
    const random = Math.round(Math.random() * (max - min) + min);

    return (
        <div className="container">
            {'Random value between ' + min + ' and ' + max + ' => ' + random}
        </div>
    );
}

export default Random
