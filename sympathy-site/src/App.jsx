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
            <h1 className="text-5xl text-center text-[#0b3d91] mb-8 font-[Dancing_Script]">
                Sending all our love
            </h1>

            {/* Sympathy Messages */}
            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {messages.map((row, i) => (
                    <div
                        key={i}
                        className="bg-gradient-to-b from-[#fdfdfd] to-[#f7f7f7]
                             border-l-4 border-[#c0c4c8] rounded-2xl
                             shadow-lg shadow-gray-300/30
                             p-6 transition-transform transform hover:scale-105"
                    >
                        <div className="p-6">
                            <p className="italic text-gray-700 mb-4">{row["Your Message:"]}</p>
                            <p className="text-2xl text-right text-blue-900 mt-2 font-[Dancing_Script]">— {row["Your Name (Signature):"]}</p>
                        </div>
                    </div>
                ))}

            </div>
            <div className="w-full py-8 text-center">
                {/* Toggle Button */}
                <button
                    onClick={() => setShowCarousel(!showCarousel)}
                    className="mb-8 px-5 py-2 rounded-lg bg-[#0b3d91] text-white shadow hover:bg-[#0d47a1] transition"
                >
                    {showCarousel ? "Hide Memories" : "Show Memories"}
                </button>
            </div>



            {/* Image Carousel */}
            {showCarousel && (
            <div className="w-full max-w-3xl mx-auto mb-10 shadow-lg rounded-2xl overflow-hidden">
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
