import { useEffect, useState } from "react";
import { ICatalogDataResults } from "../../typescript/interfaces/catalog"
import { IProps } from "../../typescript/interfaces/props"
import BaseButton from "../BaseButton";
import styles from './index.module.scss';

interface Props extends IProps {
    catalog: ICatalogDataResults[]
}

const itemsPerPage = 10;
let catalogArray: ICatalogDataResults[] = [];

const Catalog: React.FC<Props> = ({ catalog }) => {

    const [itemsToShow, setItemsToShow] = useState<ICatalogDataResults[]>([]);
    const [next, setNext] = useState<number>(20);
    const [cart, setCart] = useState<ICatalogDataResults[]>([])


    const loopWithSlice = (start: number, end: number) => {
        const slicedCatalog = catalog.slice(start, end);
        catalogArray = [...catalogArray, ...slicedCatalog];
        setItemsToShow(catalogArray);
    };

    useEffect(() => {
        loopWithSlice(0, itemsPerPage);
    }, [catalog]);

    let localCart = localStorage.getItem("cart");

    useEffect(() => {
        if (localCart) {
            setCart(JSON.parse(localCart))
        }

    }, [localCart]);

    const handleShowMorePosts = () => {
        loopWithSlice(next, next + itemsPerPage);
        setNext(next + itemsPerPage);
    };

    const addItem = (i: ICatalogDataResults) => {
        const cartCopy = [...cart];

        let existingItem = cartCopy.find((cartItem: ICatalogDataResults) => cartItem.id === i.id)

        if (!existingItem) {
            cartCopy.push(i)
        }
        setCart(cartCopy)

        const stringCart = JSON.stringify(cartCopy);
        localStorage.setItem("cart", stringCart)
    }

    const catalogContent = itemsToShow.map((i) => {
        return (
            <div key={i.id} className={styles.catalogItem}>
                <img className={styles.catalogImage} src={i.imageUrl} alt={i.title} />
                <div>
                    {i.title}
                </div>
                <div>
                    {i.rating}/5
                </div>
                <div>
                    {i.price} ₴
                </div>
                <BaseButton onClick={() => addItem(i)} type="button" value='Add to cart' />
            </div>
        )
    })
    return (
        <div className={styles.root}>
            <div className={styles.catalog}>
                {catalogContent}
            </div>
            <BaseButton className={styles.button} onClick={handleShowMorePosts} type="button" value='Load more' />
        </div>
    )
}

export default Catalog