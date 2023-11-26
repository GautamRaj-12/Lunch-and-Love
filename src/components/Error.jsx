import { useRouteError } from 'react-router-dom';
import errorImage from '../assets/404.png';
const Error = () => {
  const err = useRouteError();
  const { status, statusText } = err;
  return (
    <>
      <h1 className='mt-2 text-3xl text-center md:text-5xl text-slate-500 font-leckerLi'>
        Oops!!!!!!!! {status} : {statusText}
      </h1>
      <div className='h-[80vh] flex items-center justify-center'>
        <img src={errorImage} alt='' className='max-w-[500px] max-h-auto' />
      </div>
    </>
  );
};

export default Error;
