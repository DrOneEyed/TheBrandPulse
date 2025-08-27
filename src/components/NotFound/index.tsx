import Link from "next/link";

const NotFound = () => {
  return (
    <section className="pb-[120px] pt-[150px]">
      <div className="container">
        <div className="-mx-4 flex">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[400px] text-center">
              <h2 className="mb-2 text-[50px] font-bold leading-none text-black dark:text-white sm:text-[80px] md:text-[100px]">
                404
              </h2>
              <h4 className="mb-3 text-[22px] font-semibold leading-tight text-black dark:text-white">
                Oops! That page can't be found
              </h4>
              <p className="mb-8 text-lg text-body-color dark:text-body-color-dark">
                The page you are looking for it maybe deleted or never existed.
              </p>
              <Link
                href="/"
                className="inline-block rounded-lg bg-primary px-8 py-3 text-center text-base font-semibold text-white transition duration-300 hover:bg-opacity-90"
              >
                Go To Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;