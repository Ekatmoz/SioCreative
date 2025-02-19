import { RiReactjsLine } from 'react-icons/ri';
import { RiNextjsLine } from 'react-icons/ri';
import { RiDatabase2Line } from 'react-icons/ri';
import { RiNodejsLine } from 'react-icons/ri';
import { RiTailwindCssLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      tepeatType: 'reverse',
    },
  },
});

const Technologies = () => {
  return (
    <div className='py-16 px-8'>
      <h1 className='my-20 text-center text-4xl font-semibold'>Technológiák</h1>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div
          variants={iconVariants(2.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-2 border-neutral-200 p-4'
        >
          <RiReactjsLine className='text-7xl text-cyan-400' />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-2 border-neutral-200 p-4'
        >
          <RiNextjsLine className='text-7xl' />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-2 border-neutral-200 p-4'
        >
          <RiDatabase2Line className='text-7xl text-red-400' />
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial='initial'
        animate='animate'
        className='rounded-2xl border-2 border-neutral-200 p-4'>
          <RiNodejsLine className='text-7xl text-green-500' />
        </motion.div>
        <motion.div 
        variants={iconVariants(3)}
        initial='initial'
        animate='animate'
        className='rounded-2xl border-2 border-neutral-200 p-4'>
          <RiTailwindCssLine className='text-7xl text-blue-400' />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
