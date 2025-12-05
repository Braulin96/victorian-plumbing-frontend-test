import { Suspense, lazy } from "react"

const ProductBlock = lazy(() => import("@components/ProductBlock/ProductBlock"))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='p-[20px] bg-white '>
        <ProductBlock />
      </div>
    </Suspense>
  )
}

export default App
