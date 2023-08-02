import Image from 'next/image'
function Produk(){
    return(
        <div>
        <Image width={2000} height={1500} src='/img/judul.jpeg' alt='' />
        <div className='flex  flex-col px-5 py-10 text-center w-full mb-20'>
          <h1 className='sm:text-3xl text-2xl font-bold title-font mb-4 text-yellow-600'>
            OUR SIGNATURE BAKPIA KUKUS
          </h1>
        </div>
        <div className='border-b pb-5 border-gray-200 dark:border-gray-700'>
          <nav
            className='-mb-0.5 flex justify-center  space-x-6'
            aria-label='Tabs'
            role='tablist'
          >
            <button
              type='button'
              className='font-bold px-5 rounded-full hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap hover:text-amber-800 bg-amber-100 text-amber-900 active'
              id='horizontal-alignment-item-1'
              data-hs-tab='#horizontal-alignment-1'
              aria-controls='horizontal-alignment-1'
              role='tab'
            >
              Bakpia Kukus
            </button>
            <button
              type='button'
              className='font-bold px-5 rounded-full hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap hover:text-amber-800 bg-amber-100 text-amber-900 active'
              id='horizontal-alignment-item-2'
              data-hs-tab='#horizontal-alignment-2'
              aria-controls='horizontal-alignment-2'
              role='tab'
            >
              Bolu Kukus
            </button>
            <button
              type='button'
              className='font-bold px-5 rounded-full hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4  inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap hover:text-amber-800 bg-amber-100 text-amber-900 active'
              id='horizontal-alignment-item-3'
              data-hs-tab='#horizontal-alignment-3'
              aria-controls='horizontal-alignment-3'
              role='tab'
            >
              Paper Bag
            </button>
          </nav>
        </div>
        <section className="text-gray-600 body-font">
  <div className="container  px-5 py-20 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 card hover:shadow md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
        <Image width={420} height={260} src='/img/coklat mini pack.jpeg' alt='' />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">BAKPIA KUKUS</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Brownies Cokelat - Mini Pack</h2>
          <p className="mt-1">Rp. 25.000</p>
        </div>
        <button className='flex mx-auto mt-20 rounded-full text-white font-bold bg-amber-950 border-0 py-2 px-8 focus:outline-none hover:bg-amber-900 text-lg'>Add to cart</button>
      </div>
      <div className="lg:w-1/4 md:w-1/2 card hover:shadow p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
        <Image width={420} height={260} src='/img/coklat travel.jpeg' alt='' />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">BAKPIA KUKUS</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Brownies Cokelat - Travel Pack</h2>
          <p className="mt-1">Rp. 45.000</p>
        </div>
        <button className='flex mx-auto mt-20 rounded-full text-white font-bold bg-amber-950 border-0 py-2 px-8 focus:outline-none hover:bg-amber-900 text-lg'>Add to cart</button>
      </div>
      <div className="lg:w-1/4 md:w-1/2 card hover:shadow p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
        <Image width={420} height={260} src='/img/keju mini pack.jpeg' alt='' />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">BAKPIA KUKUS</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Brownies Keju - Mini Pack</h2>
          <p className="mt-1">Rp. 24.500</p>
        </div>
        <button className='flex mx-auto mt-20 rounded-full text-white font-bold bg-amber-950 border-0 py-2 px-8 focus:outline-none hover:bg-amber-900 text-lg'>Add to cart</button>
      </div>
      <div className="lg:w-1/4 md:w-1/2 card hover:shadow p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
        <Image width={420} height={260} src='/img/keju travel.jpeg' alt='' />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">BAKPIA KUKUS</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Brownies Keju - Travel Pack</h2>
          <p className="mt-1">Rp. 45.000</p>
        </div>
        <button className='flex mx-auto mt-20 rounded-full text-white font-bold bg-amber-950 border-0 py-2 px-8 focus:outline-none hover:bg-amber-900 text-lg'>Add to cart</button>
      </div>
      <div className="lg:w-1/4 md:w-1/2 card hover:shadow p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
        <Image width={420} height={260} src='/img/klepon travel.jpeg' alt='' />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">BAKPIA KUKUS</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Klepon - Travel Pack</h2>
          <p className="mt-1">Rp. 45.000</p>
        </div>
        <button className='flex mx-auto mt-20 rounded-full text-white font-bold bg-amber-950 border-0 py-2 px-8 focus:outline-none hover:bg-amber-900 text-lg'>Add to cart</button>
      </div>
      <div className="lg:w-1/4 md:w-1/2 card hover:shadow p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
        <Image width={420} height={260} src='/img/ori mini pack.jpeg' alt='' />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">BAKPIA KUKUS</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Original Cokelat - Mini Pack</h2>
          <p className="mt-1">Rp. 24.500</p>
        </div>
        <button className='flex mx-auto mt-20 rounded-full text-white font-bold bg-amber-950 border-0 py-2 px-8 focus:outline-none hover:bg-amber-900 text-lg'>Add to cart</button>
      </div>
      <div className="lg:w-1/4 md:w-1/2 card hover:shadow p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
        <Image width={420} height={260} src='/img/original travel.jpeg' alt='' />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">BAKPIA KUKUS</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Original Cokelat - Travel Pack</h2>
          <p className="mt-1">Rp. 45.000</p>
        </div>
        <button className='flex mx-auto mt-20 rounded-full text-white font-bold bg-amber-950 border-0 py-2 px-8 focus:outline-none hover:bg-amber-900 text-lg'>Add to cart</button>
      </div>
      <div className="lg:w-1/4 md:w-1/2 card hover:shadow p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
        <Image width={420} height={260} src='/img/kacang mini.jpeg' alt='' />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">BAKPIA KUKUS</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Original Kacang Hijau - Mini Pack</h2>
          <p className="mt-1">Rp. 24.500</p>
        </div>
        <button className='flex mx-auto mt-20 rounded-full text-white font-bold bg-amber-950 border-0 py-2 px-8 focus:outline-none hover:bg-amber-900 text-lg'>Add to cart</button>
      </div>
      <div className="lg:w-1/4 md:w-1/2 card hover:shadow p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
        <Image width={420} height={260} src='/img/hijau travel.jpeg' alt='' />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">BAKPIA KUKUS</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Original Kacang Hijau - Travel Pack</h2>
          <p className="mt-1">Rp. 45.000</p>
        </div>
        <button className='flex mx-auto mt-20 rounded-full text-white font-bold bg-amber-950 border-0 py-2 px-8 focus:outline-none hover:bg-amber-900 text-lg'>Add to cart</button>
      </div>
      <div className="lg:w-1/4 md:w-1/2 card hover:shadow p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
        <Image width={420} height={260} src='/img/choco lava.jpeg' alt='' />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">BAKPIA KUKUS</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">RV Chocolava - Travel Pack</h2>
          <p className="mt-1">Rp. 40.500</p>
        </div>
        <button className='flex mx-auto mt-20 rounded-full text-white font-bold bg-amber-950 border-0 py-2 px-8 focus:outline-none hover:bg-amber-900 text-lg'>Add to cart</button>
      </div>
      <div className="lg:w-1/4 md:w-1/2 card hover:shadow p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
        <Image width={420} height={260} src='/img/straw mini.jpeg' alt='' />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">BAKPIA KUKUS</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Strawberry - Mini Pack</h2>
          <p className="mt-1">Rp. 24.500</p>
        </div>
        <button className='flex mx-auto mt-20 rounded-full text-white font-bold bg-amber-950 border-0 py-2 px-8 focus:outline-none hover:bg-amber-900 text-lg'>Add to cart</button>
      </div>
      <div className="lg:w-1/4 md:w-1/2 card hover:shadow p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
        <Image width={420} height={260} src='/img/ori strawbery.jpeg' alt='' />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">BAKPIA KUKUS</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Original Strawberry - Travel Pack</h2>
          <p className="mt-1">Rp. 45.000</p>
        </div>
        <button className='flex mx-auto mt-20 rounded-full text-white font-bold bg-amber-950 border-0 py-2 px-8 focus:outline-none hover:bg-amber-900 text-lg'>Add to cart</button>
      </div>
    </div>
  </div>
</section>
        </div>

        
    )
}

export default Produk