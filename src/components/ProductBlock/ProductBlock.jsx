import { useState, useEffect } from "react";
import axios from "axios";

import ProductCard from '@components/ProductCard/ProductCard'
import Selector from '@components/Selector/Selector'
import Pagination from '@components/Pagination/Pagination'
import LoadingSpinner from '@components/LoadingSpinner/LoadingSpinner'
import ErrorMessage from '@components/ErrorMessage/ErrorMessage'

const API_URL =
    "https://spanishinquisition.victorianplumbing.co.uk/interviews/listings?apikey=yj2bV48J40KsBpIMLvrZZ1j1KwxN4u3A83H8IBvI";

const ProductBlock = () => {
    const [products, setProducts] = useState([]);
    const [pagination, setPagination] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [page, setPage] = useState(0);
    const [sort, setSort] = useState(1);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            setError("");

            const response = await axios.post(API_URL, {
                query: "toilets",
                pageNumber: page,
                size: 30,
                additionalPages: 0,
                sort: sort,
            });

            setProducts(response.data.products);
            console.log('Fetched products data:', response.data.products);
            setPagination(response.data.pagination);
        } catch (err) {
            console.error(err);
            setError("Failed to fetch products. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [page, sort]);

    const handleSortChange = (e) => {
        setSort(Number(e.target.value));
        setPage(0);
    };

    const totalPages = pagination ? Math.ceil(pagination.total / pagination.size) : 0;

    // Map API data to ProductCard props
    const mapProductToCard = (product) => {
        const isInStock = product.stockStatus?.status === 'G';
        const isOnSale = product.price?.isOnPromotion;

        // Currency symbol considering possible GPB, EUR, USD:
        const currencySymbol = product.price?.currencyCode === 'GBP' ? '£' :
            product.price?.currencyCode === 'EUR' ? '€' :
                product.price?.currencyCode === 'USD' ? '$' : '£';

        const hasWasPrice = product.price?.wasPriceIncTax
        const hasNowPrice = product.price?.priceIncTax

        return {
            image: product.image?.url || '',
            alt: product.image?.attributes?.imageAltText || product.productName,
            productName: product.productName,
            rating: product.averageRating || 0,
            reviewsCount: product.reviewsCount || 0,
            inStock: isInStock,
            currency: currencySymbol,
            originalPrice: isOnSale ? hasWasPrice : hasNowPrice,
            discountedPrice: isOnSale ? hasNowPrice : null,
        };
    };

    return (
        <div className='max-w-7xl mx-auto px-4 py-8 w-full h-full'>
            <div className='flex justify-end mb-[24px]'>
                <Selector
                    value={sort}
                    onChange={handleSortChange}
                    id="product-sort"
                />
            </div>
            {error && (
                <div className='mb-6'>
                    <ErrorMessage error={error} />
                </div>
            )}

            {loading && (
                <div className='flex justify-center items-center min-h-screen'>
                    <LoadingSpinner />
                </div>
            )}

            {!loading && !error && products.length > 0 && (
                <>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                {...mapProductToCard(product)}
                            />
                        ))}
                    </div>

                    {totalPages > 1 && (
                        <div className='mt-8'>
                            <Pagination
                                page={page}
                                setPage={setPage}
                                totalPages={totalPages}
                            />
                        </div>
                    )}
                </>
            )}

            {!loading && !error && products.length === 0 && (
                <div className='text-center py-12'>
                    <p className='text-dark-gray text-[1rem] text-lg'>No products found.</p>
                </div>
            )}
        </div>
    )
}

ProductBlock.propTypes = {}

export default ProductBlock