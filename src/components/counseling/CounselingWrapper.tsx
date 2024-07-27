import React from 'react';
import Image from 'next/image';

const CounselingWrapper = ({ content, className }: { content: React.ReactNode, className?: string }) => {
  return (
    <div className={`relative w-full ${className} mb-8`}>
      <div className="flex justify-center items-center h-[60px]">
        <Image
          className="pt-2.5"
          priority
          src="/images/letter_edges_yellow/letter_top_l.svg"
          alt="Letter edge"
          width={60}
          height={60}
        />
        <div className="bg-yellow flex-1 h-full flex justify-center items-center">
          <span className="text-gray-950 font-bold">COUNSELING</span>
        </div>
        <Image
          priority
          src="/images/letter_edges_yellow/letter_top_r.svg"
          alt="Letter edge"
          width={60}
          height={60}
        />
      </div>
      <div className="text-gray-950 bg-yellow z-10 relative text-base pt-2">
        {content}
      </div>
      <div className="flex justify-center items-center h-[80px]">
        <Image
          className='mt-2.5'
          priority
          src="/images/letter_edges_yellow/letter_bottom_l.svg"
          alt="Letter edge"
          width={159}
          height={90}
        />
        <div className="bg-yellow flex-1 h-full flex justify-center items-center"></div>
        <Image
          priority
          src="/images/letter_edges_yellow/letter_bottom_r.svg"
          alt="Letter edge"
          width={162}
          height={80}
        />
      </div>
    </div>
  );
};

export default CounselingWrapper;