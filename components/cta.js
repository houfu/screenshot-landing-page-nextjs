export default function CTA() {
    return (

        <section className="gradient w-full mx-auto text-center pt-6 pb-12">
            <h2
                className="w-full my-2 text-5xl font-black leading-tight text-center text-white"
            >
                Call to Action
            </h2>
            <div className="w-full mb-4">
                <div
                    className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"
                />
            </div>

            <h3 className="my-4 text-3xl font-extrabold">
                Main Hero Message to sell yourself!
            </h3>

            <button
                className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded my-6 py-4 px-8 shadow-lg"
            >
                Action!
            </button>
        </section>
    )
}
