/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
export default function CTA() {
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-white-900 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
                  <span className="block">What do we offer?</span>
                  {/* <span className="block">Start your free trial today.</span> */}
                </h2>
                <p className="mt-4 text-lg leading-6 text-indigo-600">
                We screen crypto wallets and transactions to identify the source of funds and provide you with a detailed report. You can determine the risk score of any wallet to avoid problems with regulatory authorities and to protect yourself from illicit funds.
                </p><br/><hr></hr><br/>
                <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
                  <span className="block">Why is it needed?</span>
                  {/* <span className="block">Start your free trial today.</span> */}
                </h2>
                <p className="mt-4 text-lg leading-6 text-indigo-600">
                By receiving illicit funds, you risk having your money frozen.
                </p>
                <p className="mt-4 text-lg leading-6 text-indigo-600">
                By checking your wallet's AML status, you can determine its risk score and have a piece of mind.
                </p>
                <p className="mt-4 text-lg leading-6 text-indigo-600">
                Our professionals will help you deal with a high-risk score.
                </p>

                <div className="flex">
                <a
                  href="#"
                  className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50"
                >
                  Sign up for free
                </a>&nbsp;&nbsp;
                <a
                  href="#"
                  className="mt-8 bg-white border border-transparent rounded-xl shadow px-5 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50"
                >
                  Sign up for free
                </a>
                </div>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <img
                className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg"
                alt="App screenshot"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  