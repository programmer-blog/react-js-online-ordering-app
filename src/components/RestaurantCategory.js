import ItemList from './ItemList'

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    const handleClick = () => {
        setShowIndex();
    }
    return (
        <div>
            <div className='w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4'>
                <div className='cursor-pointer flex justify-between' onClick={handleClick}>
                    <span className='font-bold'>{data.title} - {data.itemCards.length}</span>
                    <span>🔻</span>
                </div>
                {showItems && <ItemList items={data.itemCards} />}
            </div>
        </div>
    )
}

export default RestaurantCategory