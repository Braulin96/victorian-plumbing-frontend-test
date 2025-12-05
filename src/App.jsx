import ProductBlock from "@components/ProductBlock/ProductBlock"

// TODO: In production, use lazy loading with Suspense for better performance:
// const ProductBlock = lazy(() => import('@components/ProductBlock/ProductBlock'))

function App() {
  return (
    <div className='p-[20px] bg-white '>
      <ProductBlock />
    </div>
  )
}

export default App
