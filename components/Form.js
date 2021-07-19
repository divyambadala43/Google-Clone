import React from "react";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";
import { MicrophoneIcon } from "@heroicons/react/solid";
import Button from "./UI/Button";

const Form = () => {
  return (
    <form className='flex flex-col items-center mt-44 flex-grow w-4/5'>
      <Image
        src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
        height={100}
        width={300}
      />
      <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-lg lg:max-w-2xl'>
        <SearchIcon className='h-5 mr-3 text-gray-500' />
        <input type='text' className='focus:outline-none flex-grow' />
        <MicrophoneIcon className='h-5' />
      </div>
      <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
        <Button buttonText='Google Search' />
        <Button buttonText="I'm Feeling Lucky" />
      </div>
    </form>
  );
};

export default Form;
