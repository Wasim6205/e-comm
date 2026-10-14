import { useContext } from "react";
import { MyStore } from "../context/MyContext";

const CartScreen = () => {
  const { cartItems,incrementQuantity } = useContext(MyStore);

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-600">
            Your shopping bag
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Shopping Cart
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Review your items before checking out.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">

          {/* Cart Items */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-4">
              <h2 className="font-semibold text-gray-900">
                Cart Items
              </h2>
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-700">
                {cartItems.length} products
              </span>
            </div>

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-gray-200 bg-white p-4 transition hover:shadow-md sm:p-6"
              >
                <div className="flex flex-col gap-5 sm:flex-row">

                  {/* Product Image */}
                  <div className="flex h-40 w-full shrink-0 items-center justify-center rounded-xl bg-gray-50 p-4 sm:h-36 sm:w-36">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex min-w-0 flex-1 flex-col justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                        {item.category}
                      </p>

                      <h3 className="mt-2 text-base font-bold leading-6 text-gray-900 sm:text-lg">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm text-gray-500">
                        Ready for your everyday essentials
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4">
                      {/* Quantity Selector - Design Only */}
                      <div className="flex items-center rounded-lg border border-gray-200 p-1">
                        <button className="flex h-8 w-8 items-center justify-center rounded-md text-lg text-gray-600 hover:bg-gray-100">
                          −
                        </button>
                        <span className="w-9 text-center text-sm font-semibold text-gray-900">
                          {item.quantity || 1}
                        </span>
                        <button onClick={() => incrementQuantity(item.id)} className="flex h-8 w-8 items-center justify-center rounded-md text-lg text-gray-600 hover:bg-gray-100">
                          +
                        </button>
                      </div>

                      {/* Remove - Design Only */}
                      <button className="flex items-center gap-1.5 text-sm font-medium text-rose-500 transition hover:text-rose-700">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          className="h-4 w-4"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M8 6V4h8v2m3 0-1 14H6L5 6m4 4v6m6-6v6" />
                        </svg>
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-end justify-between border-t border-gray-100 pt-4 sm:min-w-24 sm:flex-col sm:items-end sm:border-0 sm:pt-0">
                    <p className="text-xs text-gray-400 sm:mb-1">
                      Price
                    </p>
                    <p className="text-xl font-extrabold text-gray-900">
                      ${Number(item.price).toFixed(2)}
                    </p>
                  </div>

                </div>
              </div>
            ))}

            {/* Continue Shopping */}
            <a
              href="/"
              className="inline-flex items-center gap-2 pt-2 text-sm font-semibold text-gray-600 transition hover:text-indigo-600"
            >
              <span>←</span>
              Continue Shopping
            </a>
          </div>

          {/* Order Summary */}
          <aside className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-6">
            <h2 className="text-xl font-bold text-gray-900">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4 border-b border-gray-100 pb-6">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Subtotal</span>
                <span className="font-medium text-gray-900">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between text-sm text-gray-500">
                <span>Shipping</span>
                <span className="font-medium text-emerald-600">
                  Free
                </span>
              </div>

              <div className="flex justify-between text-sm text-gray-500">
                <span>Taxes</span>
                <span className="text-gray-400">
                  Calculated at checkout
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between py-5">
              <span className="text-base font-bold text-gray-900">
                Total
              </span>
              <span className="text-2xl font-extrabold text-gray-900">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <button className="w-full rounded-xl bg-gray-900 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Proceed to Checkout
              <span className="ml-2">→</span>
            </button>

            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-400">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4"
              >
                <rect x="4" y="10" width="16" height="11" rx="2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 10V7a4 4 0 1 1 8 0v3" />
              </svg>
              Secure checkout
            </div>

            <div className="mt-5 rounded-xl bg-indigo-50 p-4">
              <p className="text-sm font-semibold text-indigo-900">
                Shopping with confidence
              </p>
              <p className="mt-1 text-xs leading-5 text-indigo-700">
                Review your items and order total before completing your purchase.
              </p>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default CartScreen;