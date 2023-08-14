import CardPayment from './CardPayment'

import morcego from "../../../public/owle 1-min.png"
import arvore from "../../../public/arvore.png"
import stone from "../../../public/stone.png"

export default function WalletConnection() {
  return (
    <div className="w-full h-[800px] 2xl:h-[1080px] overflow-hidden relative bg-[rgba(80,194,120,0.15)]">
        <div id='section3 ' className='card-payment absolute w-full h-full flex justify-center items-center mt-[0%] md:mt-[0%] xl:mt-[0%] 2xl:mt-[0%]'>
          <CardPayment /> 
        </div>
      <div className='w-full h-full relative lg:w-[75%]'>
        <img className='absolute left-[0%] md:left-[12%] bottom-[12%] w-[35%] md:bottom-[14%] lg:top-[35rem] xl:top-[24rem] 2xl:top-[32rem] md:w-[18%] xl:w-70 xl:ml-[8%] z-10' src={morcego} alt='bat' />
        <img className='absolute top-0 w-[100%] h-[110%]' src={arvore} alt='tree' />
        <img className='absolute bottom-[8%] md:-bottom-[5%]  left-0 w-[90%] md:w-[50%] xl:w-[50rem] xl:left-[8%] 2xl:left-0' src={stone} alt='stone' />
      </div>
    </div>
  )
}
