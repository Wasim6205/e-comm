import { useContext } from "react";
import { MyStore } from "../context/MyContext";

export default function ProductCard({ product, quantity }) {
  const { setCartItems,incrementQuantity,decrementQuantity } = useContext(MyStore);
  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Product Image */}
      <div className="relative flex h-64 items-center justify-center bg-gray-50 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold capitalize text-gray-600 shadow-sm">
          {product.category}
        </span>

        {/* Wishlist Icon — Design Only */}
        <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-500 shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z"
            />
          </svg>
        </div>
      </div>

      {/* Product Details */}
      <div className="space-y-3 p-5">
        <div className="flex items-center gap-2">
          <span className="text-sm text-amber-500">★</span>
          <span className="text-sm font-semibold text-gray-800">
            {product.rating.rate}
          </span>
          <span className="text-sm text-gray-400">
            ({product.rating.count} reviews)
          </span>
        </div>

        <h2 className="line-clamp-2 min-h-12 text-lg font-bold leading-6 text-gray-900">
          {product.title}
        </h2>

        <p className="line-clamp-2 text-sm leading-5 text-gray-500">
          {product.description}
        </p>

        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <div>
            <p className="text-xs text-gray-400">Price</p>
            <p className="text-2xl font-extrabold tracking-tight text-gray-900">
              ${Number(product.price).toFixed(2)}
            </p>
          </div>

          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
            In Stock
          </span>
        </div>

        {/* Button — Design Only */}
        {quantity ? (
          <div className="flex w-full items-center justify-center gap-0 rounded-xl border border-gray-200 bg-white p-1">
            <button onClick={() => decrementQuantity(product.id)} className="flex h-9 w-9 items-center justify-center rounded-lg text-lg font-medium text-gray-600 transition hover:bg-gray-100">
              -
            </button>

            <p className="w-10 text-center text-sm font-semibold text-gray-900">
              {quantity}
            </p>

            <button onClick={() => incrementQuantity(product.id)} className="flex h-9 w-9 items-center justify-center rounded-lg text-lg font-medium text-gray-600 transition hover:bg-gray-100">
              +
            </button>
          </div>
        ) : (
          <div
            onClick={() => {
              setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
            }}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 7H6"
              />
              <circle cx="10" cy="21" r="1" />
              <circle cx="18" cy="21" r="1" />
            </svg>
            Add to Cart
          </div>
        )}
      </div>
    </div>
  );
}
