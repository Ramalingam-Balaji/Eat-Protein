import {
  FaGooglePlay,
  FaApple,
  FaDownload,
  FaStar,
} from "react-icons/fa";

import eatProteinApp from "../assets/eat_protein_app.png";

import { QRCodeCanvas } from "qrcode.react";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="w-full bg-white py-10 px-4 sm:px-6 lg:px-10 scroll-mt-20"
    >
      <div className="max-w-[1400px] mx-auto">

        <div className="border border-gray-200 rounded-2xl overflow-hidden bg-gradient-to-r from-green-50 to-white shadow-sm">

          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">

            {/* ================================================= */}
            {/* LEFT - APP IMAGE */}
            {/* ================================================= */}

            <div className="lg:col-span-4 flex items-center justify-center p-6 lg:p-8">

              <img
                src={eatProteinApp}
                alt="Eat Protein App"
                className="w-full max-w-[900Px] h-auto object-contain"
              />

            </div>


            {/* ================================================= */}
            {/* MIDDLE - APP INFORMATION */}
            {/* ================================================= */}

            <div className="lg:col-span-5 p-6 lg:p-10">

              {/* App Label */}

              <div className="flex items-center gap-3 mb-3">

                <div className="bg-green-600 text-white p-3 rounded-xl">
                  <FaDownload />
                </div>

                <span className="text-green-700 font-semibold">
                  Eat Protein App
                </span>

              </div>


              {/* Heading */}

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">

                Download the

                <span className="text-green-600 block">
                  Eat Protein App Today!
                </span>

              </h2>


              {/* Description */}

              <p className="mt-4 text-gray-600 leading-6">

                Your complete health & nutrition partner. Get
                personalized diet plans, discover healthy foods,
                track your fitness and find stores near you.

              </p>


              {/* Rating */}

              <div className="flex items-center gap-3 mt-5">

                <div className="flex text-yellow-400 gap-1">

                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />

                </div>

                <span className="text-sm text-gray-500">
                  4.8/5 from 50,000+ users
                </span>

              </div>


              {/* Store Buttons */}

              <div className="flex flex-wrap gap-3 mt-6">

                {/* Google Play */}

                <a
                  href="https://play.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-black text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition"
                >

                  <FaGooglePlay className="text-xl" />

                  <div className="text-left">

                    <p className="text-[9px]">
                      GET IT ON
                    </p>

                    <p className="text-sm font-semibold">
                      Google Play
                    </p>

                  </div>

                </a>


                {/* App Store */}

                <a
                  href="#"
                  className="flex items-center gap-2 bg-black text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition"
                >

                  <FaApple className="text-2xl" />

                  <div className="text-left">

                    <p className="text-[9px]">
                      Download on the
                    </p>

                    <p className="text-sm font-semibold">
                      App Store
                    </p>

                  </div>

                </a>

              </div>

            </div>


            {/* ================================================= */}
            {/* RIGHT - QR CODE */}
            {/* ================================================= */}

            <div className="lg:col-span-3 flex justify-center p-6 lg:p-8">

              <div className="bg-white border border-gray-200 rounded-2xl p-5 text-center shadow-sm">

                <QRCodeCanvas
                  value="https://play.google.com/"
                  size={150}
                  level="H"
                  includeMargin={true}
                />

                <p className="font-bold text-gray-800 mt-3">
                  Scan to Download
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Download the Eat Protein app
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;