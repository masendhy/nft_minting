export default function Mint() {
  return (
    <div className="min-h-screen h-full w-full overflow-hidden flex flex-col items-center justify-center bg-brand-background">
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <img
          src="/images/blur.jpg"
          className="animate-pulse-slow absolute inset-auto block w-full min-h-screen object-cover"
        />

        <div className="flex flex-col items-center justify-center h-full w-full px-2 md:px-10">
          <div className="z-1 md:max-w-3xl w-full bg-gray-900/90 filter backdrop-blur-sm py-4 rounded-md px-2 md:px-10 flex flex-col items-center">
            <h1 className="font-josefin  font-bold text-3xl md:text-4x bg-gradient-to-br from-brand-red to-brand-blue bg-clip-text text-transparent mt-5">
              Pre Sale
            </h1>
            <h3 className="text-sm text-pink-200 tracking-widest break-all ...">
              0x7399E31089C06F7b4111BF166E578Ff90bbdfa26
            </h3>
            <div className="flex flex-col md:flex-row md:space-x-14 w-full mt-10 md:mt-14">
              <div className="relative w-full">
                <div className="z-10 absolute top-2 left-2 opacity-80 filter backdrop-blur-lg px-2 py-2 bg-black border border-brand-blue rounded-md flex items-center justify-center text-white font-semibold">
                  <p>
                    <span className="text-brand-green">0 </span> / 2206
                  </p>
                </div>
                <img
                  src="/images/41.png"
                  className="object-cover w-full sm:h-[280px] md:w-[250px] rounded-md"
                />
              </div>
              <div className="flex flex-col items-center w-full px-4 mt-16 md:mt-0">
                <div className="flex items-center justify-between w-full">
                  <button className="w-14 h-10 md:w-16 md:h-12 flex items-center justify-center text-brand-background hover:shadow-lg  bg-gray-300 font-bold rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 md:h-8 md:w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                  <p className="flex items-center justify-center flex-1 grow text-center font-bold text-brand-yellow text-3xl md:text-4xl">
                    1
                  </p>
                  <button className="w-14 h-10 md:w-16 md:h-12 flex items-center justify-center text-brand-background hover:shadow-lg  bg-gray-300 font-bold rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 md:h-8 md:w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 12H6"
                      />
                    </svg>
                  </button>
                </div>
                <p className="text-sm text-yellow-300 tracking-widest mt-3">
                  Max Mint Amount : 5
                </p>
                <div className="border-t border-b py-4 mt-16 w-full">
                  <div className="w-full text-xl flex items-center justify-between text-brand-yellow">
                    <p>Total</p>
                    <div className="flex items-center space-x-3">
                      <p>0.01 ETH</p>
                      <span className="text-gray-400">+ GAS</span>
                    </div>
                  </div>
                </div>
                {/* mint button */}
                <button className="text-brand-light mt-12 w-full rounded-md bg-gradient-to-br from-brand-black to-brand-yellow shadow-lg hover:shadow-brand-yellow hover:text-brand-black mx-4 tracking-wide ">
                  Connect Wallet
                </button>
              </div>
            </div>

            {/* Status */}
            <div className=" border border-brand-red rounded-md text-start h-full px-4 py-4 w-full mx-auto mt-8 md:mt-4">
              <p className="flex flex-col space-y-2 text-brand-red text-sm md:text-base break-words ...">
                Oops something went wrong
              </p>
            </div>

            {/* contract address */}

            <div className="border-t boder-gray-800 flex flex-col items-center mt-10 py-2 w-full">
              <h3 className="tex-2xl text-brand-yellow mt-6">
                Contract Address
              </h3>
              <a
                href="https://etherscan.io/address/0x7399e31089c06f7b4111bf166e578ff90bbdfa26"
                target="blank"
                className="text-gray-400 mt-4"
              >
                <span className="break-all ...">
                  1234567891012345678910123456789101234567891012345678910
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
