import { useEffect, useState } from "react";
import Papa from "papaparse";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
    const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTatIncLa1fn6joPjAqzIxxc2DTO3lHvHDhGTPd_0vL9XCzCZAnhGOt68SlOFsiru3gRsC6715A0GZP/pub?gid=707337266&single=true&output=csv";
    const [messages, setMessages] = useState([]);
    const [showCarousel, setShowCarousel] = useState(false);

    useEffect(() => {
        Papa.parse(SHEET_URL, {
            download: true,
            header: true,
            complete: (results) => {
                setMessages(results.data);
            },
        });
    }, []);

    return (
        <div className="min-h-screen w-full bg-gray-100 text-gray-800 flex flex-col items-center py-10 px-4">
            <h1 className="text-5xl text-center text-blue-900 mb-8 font-[Dancing_Script]">
                Sending all our love
            </h1>

            {/* Sympathy Messages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl px-4">
                {messages.map((row, i) => (
                    <div
                        key={i}
                        className="shadow-md bg-white/90 border-l-4 border-gray-400 rounded-xl"
                    >
                        <div className="p-4">
                            <p className="italic text-gray-700">“{row["Your Message:"]}”</p>
                            <p className="text-2xl text-right text-blue-900 mt-2 font-[Dancing_Script]">— {row["Your Name (Signature):"]}</p>
                        </div>
                    </div>
                ))}

            </div>
            <div className="w-full py-8 text-center">
                {/* Toggle Button */}
                <button
                    onClick={() => setShowCarousel(!showCarousel)}
                    className="mb-6 px-4 py-2 rounded-lg bg-gray-600 text-white shadow hover:bg-gray-700 transition"
                >
                    {showCarousel ? "Hide Memories" : "Show Memories"}
                </button>
            </div>



            {/* Image Carousel */}
            {showCarousel && (
            <div className="w-full max-w-2xl mb-8 shadow-lg rounded-2xl overflow-hidden">
                <Carousel
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                    interval={5000}
                >
                    <div>
                        <img src="/images/beau1.jpg" alt="Beau" />
                    </div>
                    <div>
                        <img src="/images/beau2.jpg" alt="Beau" />
                    </div>
                    <div>
                        <img src="/images/beau3.jpg" alt="Beau" />
                    </div>
                    <div>
                        <img src="/images/beau4.jpg" alt="Beau" />
                    </div>
                    <div>
                        <img src="/images/beau5.jpg" alt="Beau" />
                    </div>
                    <div>
                        <img src="/images/beau6.jpg" alt="Beau" />
                    </div>
                    <div>
                        <img src="/images/beau7.jpg" alt="Beau" />
                    </div>
                    <div>
                        <img src="/images/beau8.jpg" alt="Beau" />
                    </div>
                    <div>
                        <img src="/images/beau9.jpg" alt="Beau" />
                    </div>
                    <div>
                        <img src="/images/beau10.jpg" alt="Beau" />
                    </div>
                    <div>
                        <img src="/images/beau11.jpg" alt="Beau" />
                    </div>
                </Carousel>
            </div>
                )}
        </div>
    );
}

export default App;
