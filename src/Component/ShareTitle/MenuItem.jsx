

const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className="text-black flex flex-row items-center gap-5 mb-20">
            <div className="w-[150px] "><img style={{borderRadius: '0px 200px 200px 200px'}} src={image} alt="item" /></div>
            <div>
                <h2 className="text-xl font-medium uppercase">{name} ------------------------</h2>
                <p className="text-lg font-normal text-gray-500">{recipe}</p>
            </div>
            <p className="text-yellow-400">${price}</p>
        </div>
    );
};

export default MenuItem;