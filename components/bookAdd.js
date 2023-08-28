export default function bookAdd() {
    return (
    <section className="container mx-auto md:px-20 py-10">
      <div className="text-center">
        <h1 className="font-bold text-4xl text-center">
          Limited Time: Get My Book For Free!
        </h1>
        <p className="text-gray-500 py-3">
          Learn anytime, anywhere. Best Blogs. Top BlogSite.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-center items-center">
          <div className="card px-5 py-8 my-3 bg-white border shadow-md mx-4">
            <h1 className="text-4xl font-semibold text-center text-orange-400 h-2/3">02</h1>
            <hr className="w-full border-1 bg-black" />
            <p className="text-xl font-semibold text-center font-serif h-1/3">days</p>
          </div>
          <div className="card px-5 py-8 my-3 bg-white border shadow-md mx-4">
            <h1 className="text-4xl font-semibold text-center text-orange-400 h-2/3">09</h1>
            <hr className="w-full border-1 bg-black" />
            <p className="text-xl font-semibold text-center font-serif h-1/3">hours</p>
          </div>
          <div className="card px-5 py-8 my-3 bg-white border shadow-md mx-4">
            <h1 className="text-4xl font-semibold text-center text-orange-400 h-2/3">37</h1>
            <hr className="w-full border-1 bg-black" />
            <p className="text-xl font-semibold text-center font-serif h-1/3">minutes</p>
          </div>
          <div className="card px-5 py-8 my-3 bg-white border shadow-md mx-4">
            <h1 className="text-4xl font-semibold text-center text-orange-400 h-2/3">20</h1>
            <hr className="w-full border-1 bg-black" />
            <p className="text-xl font-semibold text-center font-serif h-1/3">Seconds</p>
          </div>
          
        </div>
        <p className="text-gray-500 py-3">
          We offer professional SEO services that help websites increase their
          organic search score drastically in order to complete for the highest
          rankings.
        </p>
        <button className="btn btn-outline bg-orange-400 text-gray-50 border-[#202C45] border-0 border-b-4 mt-4">
          Get my free book
        </button>
      </div>
    </section>
  );
}
