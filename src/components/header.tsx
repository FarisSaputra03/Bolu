import React from 'react';
import Image from 'next/image';
import { AiOutlineUser } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Link from 'next/link';
const Header = () => {
  return (
    <header className='text-gray-600 body-font'>
      <div className=' w-full felx top-0'>
        <div className='h-10 bg-amber-900 flex w-full'></div>
        <div className='flex bg-yellow-50 py-5 mx-auto min-w-[70%] justify-evenly  items-center'>
          <p className='flex items-center px-10 gap-1  text-amber-900'>
            <BsFillTelephoneFill />
            0811 1500 526{' '}
          </p>
          <Link href={"/"}>
          <button>
            <Image width={116} height={48} src='/img/jogja.jpeg' alt='' />{' '}
          </button>
          </Link>

          <h1 className='flex items-center gap-1 text-amber-900 font-bold mr-20'>
            <AiOutlineUser size='2rem' />
            Login | Register <IoIosNotificationsOutline size='2rem' />{' '}
            <AiOutlineShoppingCart size='2rem' />
          </h1>
        </div>
        <hr />
        <div className='flex bg-yellow-50 justify-center my-0'>
          <nav className='flex font-bold'>
            <button className='mr-5 text-amber-900'>Tentang</button>
            <Link href={'/produk'}>
              <button className='mr-5 text-amber-900'>Produk</button>
            </Link>
            <Link href={'/artikel'}>
              <button className='mr-5 text-amber-900'>Artikel</button>
            </Link>
            <Link href={"/toko"}>
            <button className='mr-5 text-amber-900'>Toko</button>
            </Link>
            <button className='mr-5 text-amber-900'>Promo</button>
          </nav>
        </div>
        <hr />
      </div>
    </header>
  );
};

export default Header;
