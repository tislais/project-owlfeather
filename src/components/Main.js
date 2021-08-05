import React from 'react';

const main = `
  flex 
  flex-col 
  items-center
  col-span-12 
  p-4
  sm:col-span-12 
  sm:p-6
  md:col-span-12
  lg:col-span-9
  2xl:col-span-10
`;

const section = `
  p-4 
  bg-white 
  rounded-xl 
  shadow-lg
  sm:p-8
  md:p-12
  lg:
  xl:
  2xl:w-3/4 
  2xl:py-12 
  2xl:px-24
`;

const h2 = `
  text-4xl 
  font-extralight 
  text-gray-800 
  text-center
  sm:text-left
  md:
  lg:
  xl:my-10
`;

const span = `
  text-blue-400 
  font-semibold
`;

const img = `
  filter 
  invert 
  grayscale 
  rounded-lg 
  w-full 
  max-h-72 
  object-cover
  my-4
`;

const caption = `
  text-sm 
  text-gray-500 
  italic
  m-4
  sm:m-6
  2xl:m-10
`;

const p = `
  my-6 
  text-lg 
  text-gray-800 
  text-justify
  2xl:my-10
`;

const image = `https://media.istockphoto.com/vectors/set-of-rustic-realistic-feathers-of-different-birds-owls-peacocks-vector-id1022255880`

const Main = () => {

  return (
    <main className={main}>
      <section className={section}>
        <h2 className={h2}>Project 
          <span className={span}> Owlfeather</span>
        </h2>
        <img className={img} src={image} alt="feathers" />
        <p className={caption}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non quam et erat suscipit commodo ut congue mi. Duis dictum ac mi vel condimentum. Maecenas interdum metus nunc, nec eleifend quam eleifend nec. 
        </p>
        <p className={p}>
          Aenean maximus diam a suscipit sagittis. Proin velit est, tempus eget ligula ut, feugiat gravida arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras nisi magna, tincidunt in ullamcorper efficitur, hendrerit ut neque. Duis sit amet dapibus nulla, sed venenatis ligula. Nunc id sollicitudin nisl. Vivamus id tincidunt risus, sit amet faucibus est. Vestibulum ultricies sapien sit amet metus congue semper. Praesent imperdiet ornare nulla, et mollis nisi aliquam et. Sed id ligula eros. Cras semper finibus ante eget imperdiet. Aliquam in mauris lacus. Nulla eu ex vitae tortor iaculis tincidunt ac vitae arcu. Proin dignissim facilisis tempor.
        </p>
      </section>
    </main>
  )
};

export default Main;