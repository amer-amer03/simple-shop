import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ICatalogDataResults } from "../../interfaces/catalog";
import { IProps } from "../../interfaces/props";
import { increaseCartItem } from "../../store/actions/cart";
import BaseButton from "../BaseButton";
import BaseTypography from "../BaseTypography";
import styles from './index.module.scss';

interface Props extends IProps {
    catalog: ICatalogDataResults[]
}

const itemsPerPage = 10;
let catalogArray: ICatalogDataResults[] = [];

const Catalog: React.FC<Props> = ({ catalog }) => {
    const [itemsToShow, setItemsToShow] = useState<ICatalogDataResults[]>([]);
    const [next, setNext] = useState<number>(20);

    const dispatch = useDispatch()

    const loopWithSlice = (start: number, end: number) => {
        const slicedCatalog = catalog.slice(start, end);
        catalogArray = [...catalogArray, ...slicedCatalog];
        setItemsToShow(catalogArray);
    };

    useEffect(() => {
        loopWithSlice(0, itemsPerPage);
    }, [catalog]);

    const handleShowMorePosts = () => {
        loopWithSlice(next, next + itemsPerPage);
        setNext(next + itemsPerPage);
    };

    const handleAddCartItem = (i: ICatalogDataResults) => {
        dispatch(increaseCartItem(i))
    }

    const catalogContent = itemsToShow.map((i) => {
        return (
            <div key={i.id} className={styles.catalogItem}>
                <img className={styles.catalogImage} src={i.imageUrl} alt={i.title} />
                <div>
                    <BaseTypography value={i.title} />
                </div>
                <div>
                    <BaseTypography value={`${i.rating}/5`} />
                </div>
                <div>
                    <BaseTypography value={`${i.price} ₴`} />
                </div>
                <BaseButton onClick={() => handleAddCartItem(i)} type="button" value='Add to cart' />
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