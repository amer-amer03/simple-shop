import classNames from "classnames";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ICatalogDataResults } from "../../interfaces/catalog";
import { IProps } from "../../interfaces/props";
import { increaseCartItem } from "../../store/actions/cart";
import { addNotification } from "../../store/actions/notification";
import BaseButton from "../BaseButton";
import BaseSwitch from "../BaseSwitch";
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
    const [sortOrder, setSortOrder] = useState<string>('priceAsc')
    const [orderedCatalog, setOrderedCatalog] = useState<ICatalogDataResults[]>([])
    const [checkedSwitch, setCheckedSwitch] = useState<boolean>(false);

    const dispatch = useDispatch()

    const loop = useCallback((start: number, end: number) => {
        const slicedCatalog = orderedCatalog.slice(start, end);
        catalogArray = [...catalogArray, ...slicedCatalog];
        setItemsToShow(catalogArray);
    }, [orderedCatalog])

    useEffect(() => {
        loop(0, itemsPerPage);
    }, [orderedCatalog, loop]);

    useEffect(() => {
        catalogArray = []
        if (sortOrder === 'priceAsc') {
            const orderedCatalog = catalog.sort((a, b) => a.priceSale - b.priceSale)
            setOrderedCatalog(orderedCatalog)
        }
        if (sortOrder === 'priceDes') {
            const orderedCatalog = catalog.sort((a, b) => b.priceSale - a.priceSale)
            setOrderedCatalog(orderedCatalog)
        }
        if (sortOrder === 'ratingAsc') {
            const orderedCatalog = catalog.sort((a, b) => a.rating - b.rating)
            setOrderedCatalog(orderedCatalog)
        }
        if (sortOrder === 'ratingDes') {
            const orderedCatalog = catalog.sort((a, b) => b.rating - a.price)
            setOrderedCatalog(orderedCatalog)
        }
        loop(0, itemsPerPage);
    }, [sortOrder, catalog, loop])


    const handleShowMorePosts = () => {
        loop(next, next + itemsPerPage);
        setNext(next + itemsPerPage);
    };

    const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
        let value = e.currentTarget.value;
        setSortOrder(value)
    }
    const handleAddCartItem = (i: ICatalogDataResults) => {
        dispatch(increaseCartItem(i))
        dispatch(addNotification(i.title + '- added to cart'))
    }

    function starRating(rating: number) {
        var starHtml = '';
        var increment = 0;
        var max = 5;

        while (increment < rating) {
            starHtml += '★';
            increment++;
        }

        while (max > rating) {
            starHtml += '☆';
            max--;
        }
        return starHtml;
    };

    const handleViewSwitch = () => {
        setCheckedSwitch(!checkedSwitch)
    }

    const catalogItemStyles = checkedSwitch ? classNames(styles.catalogItem, styles.catalogItemSmall) : styles.catalogItem

    const catalogContent = itemsToShow.map((i) => {
        return (
            <div key={i.id} className={catalogItemStyles}>
                <div className={styles.catalogImageBox}>
                    <img className={styles.catalogImage} src={i.imageUrl} alt={i.title} />
                </div>
                <div>
                    <div>
                        <BaseTypography value={i.title} />
                    </div>
                    <div>
                        {starRating(i.rating)}
                        <BaseTypography value={`  ${i.rating}/5`} />
                    </div>
                    <div>
                        <BaseTypography className={styles.price} value={`${i.price} ₴`} /> <br />
                        <BaseTypography className={styles.priceSale} value={`${i.priceSale} ₴`} />
                    </div>
                </div>
                <BaseButton className={styles.button} onClick={() => handleAddCartItem(i)} type="button" value='Add to cart' />

            </div>
        )
    })
    return (
        <div className={styles.root}>
            <div className={styles.switches}>
                <div>
                    <select onChange={(e) => handleChange(e)} name="" id="">
                        <option disabled >Sort by</option>
                        <option onChange={() => setSortOrder('priceAsc')} value='priceAsc'>Price: low to high</option>
                        <option onChange={() => setSortOrder('priceDes')} value='priceDes'>Price: high to low</option>
                        <option onChange={() => setSortOrder('ratingAsc')} value='ratingAsc'>Review: low to high</option>
                        <option onChange={() => setSortOrder('ratingDes')} value='ratingDes'>Review: high to low</option>
                    </select>
                </div>
                <div className={styles.toggle}>
                    <BaseTypography value='Toggle view' />  <BaseSwitch checked={checkedSwitch} onChange={handleViewSwitch} />
                </div>
            </div>
            <div className={styles.catalog}>
                {catalogContent}
            </div>

            <BaseButton className={styles.loadMoreButton} onClick={handleShowMorePosts} type="button" value='Load more' />
        </div>
    )
}

export default Catalog