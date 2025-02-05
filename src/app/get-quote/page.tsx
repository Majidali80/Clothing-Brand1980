import Navbar2 from "../components/Navbar2/page";
import Footer from "../components/Footer/page";

export default function GetQuote() {
  return (
    <div>
      <Navbar2 />
      <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 mt-96">
        <h1 className="text-4xl font-bold text-[#252B42] mb-8">Get Your Quote Now</h1>

        {/* Best Quotes Section */}
        <section className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-[#252B42] mb-4">Best Quotes</h2>
          <p className="text-lg text-[#737373] mb-4">
            Here are some of the best quotes that can inspire you as you consider our services. We strive to deliver the best quality and value for your needs.
          </p>

          <div className="space-y-4">
            <blockquote className="text-xl italic text-[#737373]">
              "Success usually comes to those who are too busy to be looking for it." — Henry David Thoreau
            </blockquote>
            <blockquote className="text-xl italic text-[#737373]">
              "The only limit to our realization of tomorrow is our doubts of today." — Franklin D. Roosevelt
            </blockquote>
            <blockquote className="text-xl italic text-[#737373]">
              "Don't watch the clock; do what it does. Keep going." — Sam Levenson
            </blockquote>
          </div>
        </section>

        {/* Quote Request Form */}
        <section className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">
          <h2 className="text-2xl font-bold text-[#252B42] mb-6">Request a Quote</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-lg text-[#252B42]" htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-4 border border-gray-300 rounded-lg"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-lg text-[#252B42]" htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-4 border border-gray-300 rounded-lg"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label className="block text-lg text-[#252B42]" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full p-4 border border-gray-300 rounded-lg"
                placeholder="Provide some details about your request"
                rows={4}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#23A6F0] text-white font-bold text-lg rounded-lg"
            >
              Submit Request
            </button>
          </form>
        </section>
        <Footer />
      </div>
      
    </div>
    
  );
}
