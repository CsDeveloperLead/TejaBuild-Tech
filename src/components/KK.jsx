// import { Bed, Bath, ArrowRight } from 'lucide-react';

const KK = () => {
  return (
    <div className="mx-2">


  {/* Services Section */}

  <div className='w-full flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-6 md:mb-10 mx-2'>
    <div className='w-full md:w-1/3 flex flex-col items-center md:items-start gap-3'>
      <span className='text-sm text-[#f97316] flex items-center font-bold'>04 <span className='px-2 flex items-center'>|</span> Projects</span>
      <p className='text-2xl md:text-4xl font-bold '>Some of our Projects</p>
    </div>
    <div className='w-full md:w-1/3 '>
      <p className='text-[#292929] text-base text-center md:text-start mb-8 md:mb-0'>Explore a curated selection of luxury homes and high-end real estate designed to suit your preferences and needs</p>
    </div>
  </div>
  <div className='flex w-full flex-col md:flex-row gap-6'>
    <div className='w-full md:w-1/2  '>
    <div className='w-full bg-[#c4c4c4] rounded-[30px] h-[500px] md:h-[760px] flex justify-center items-end '>
    <div className=' bg-[#292929] p-4 md:p-8 rounded-[30px] w-[90%] h-[150px] md:h-[200px] flex flex-col gap-6 mb-4 md:mb-8'>
      <div className='flex justify-between items-center'>
        <p className='text-[#ef6d11] font-bold text-xl md:text-4xl'>₹10,800,000</p>
        <button className='bg-[#ef6d11] rounded-3xl text-white flex justify-center items-center w-[140px] md:w-[180px] py-2 font-semibold'>Book Now</button>
      </div>
      <div className=' flex  flex-col md:flex-row items-center  justify-between'>
        <div className='flex md:flex-col gap-3'>
          <p className='text-white font-semibold'>Noida sun city</p>
          <p className='text-gray-400 '>Miami Beach, FL</p>
        </div>
        <div className='text-white font-semibold flex items-end gap-4 '>6 bedrooms <span className='text-xl'> | </span> 7 bathrooms</div>
      </div>
    </div>

    </div>
    </div>
    <div className='w-full md:w-1/2 flex flex-col h-[450px] md:h-auto gap-6'>
    <div className='bg-[#c4c4c4] rounded-[30px] w-full h-1/2 '>

    </div>
    <div className='flex gap-6 h-1/2'>
      <div className='bg-[#c4c4c4] rounded-[30px] w-full '></div>
      <div className='bg-[#c4c4c4] rounded-[30px] w-full '></div>
    </div>
    
    </div>
  </div>
  <div className="w-full flex justify-center items-center mt-10">
    <button className="flex justify-center items-center rounded-[30px] bg-[#ef6d11] w-2/3 md:w-1/5 text-white py-3 font-semibold text-base md:text-xl">Explore More Properties</button>
  </div>
</div>

  );
};

export default KK;
