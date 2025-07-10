
const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-8 bg-gray-900 rounded-2xl shadow-lg mx-auto max-w-lg mt-12">
      <h2 className="text-3xl font-bold mb-4 text-orange-400">Contact Us</h2>
      <p className="mb-6 text-gray-100 text-center">Have questions or feedback? Fill out the form below and we'll get back to you soon!</p>
      <form className="w-full flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="px-4 py-2 rounded-md bg-gray-200 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="px-4 py-2 rounded-md bg-gray-200 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          className="px-4 py-2 rounded-md bg-gray-200 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white font-semibold py-2 rounded-xl transition-colors duration-200 mt-2"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact