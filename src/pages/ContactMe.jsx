import { Facebook, Home, Instagram, Mail } from "lucide-react";
import React from "react";
import useArtistInfoStore from "../stores/ArtistInfoStore";
import useUserAuthStore from "../stores/UserAuthStore";

const ContactMe = () => {
  const { artistInfo } = useArtistInfoStore();
  const { loggedInUser } = useUserAuthStore();

  return (
    <div
      className="flex flex-col justify-center items-center h-screen-minus-title-header overflow-y-auto"
      style={{ height: "calc(100vh - 65px)" }}
    >
      <div className="flex flex-col rounded-md glass w-[90%] md:flex-row md:min-w-max md:w-[30%]">
        <div className="text-wrap p-5 md::w-1/2">
          <div className="flex flex-col">
            <span className="font-medium">
              Feel free to reach out to me at :
            </span>

            <div
              className="flex flex-row mt-3 cursor-pointer"
              onClick={() => {
                window.open("mailto:" + artistInfo?.email);
              }}
            >
              <div className="flex flex-col justify-center mr-3">
                <Mail strokeWidth={2} />
              </div>
              <div className="flex flex-col justify-center">
                <span>{artistInfo?.email}</span>
              </div>
            </div>

            <span className="mt-5 font-medium">
              Follow my pages / profiles :
            </span>

            <div
              className="flex flex-row mt-3 cursor-pointer"
              onClick={() => {
                window.open(artistInfo?.socialNetworks[0]?.link);
              }}
            >
              <div className="flex flex-col justify-center mr-3">
                <Facebook strokeWidth={2} />
              </div>
              <div className="flex flex-col justify-center">
                <span>{artistInfo?.socialNetworks[0]?.link}</span>
              </div>
            </div>

            <div
              className="flex flex-row mt-3 cursor-pointer"
              onClick={() => {
                window.open(artistInfo?.socialNetworks[1]?.link);
              }}
            >
              <div className="flex flex-col justify-center mr-3">
                <Instagram strokeWidth={2} />
              </div>
              <div className="flex flex-col justify-center">
                <span>{artistInfo?.socialNetworks[1]?.link}</span>
              </div>
            </div>

            <span className="mt-5 font-medium">Address :</span>

            <div
              className="flex flex-row mt-3"
              onClick={() => {
                window.open(artistInfo?.socialNetworks[0]?.link);
              }}
            >
              <div className="flex flex-col justify-center mr-3">
                <Home strokeWidth={2} />
              </div>
              <div className="flex flex-col justify-center">
                <span>{artistInfo?.address}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 md:w-1/2">
          <form className="flex flex-col">
            <input
              className="rounded-md border mb-3 p-2 shadow-inner border-zinc-300 "
              type="text"
              value={loggedInUser?.name}
              placeholder="Name"
              required
            />
            <input
              className="rounded-md border mb-3 p-2 shadow-inner border-zinc-300 "
              type="email"
              value={loggedInUser?.email}
              placeholder="Email"
              required
            />
            <textarea
              className="rounded-md border mb-3 p-2 shadow-inner border-zinc-300 "
              placeholder="Message"
              rows={5}
              required
            ></textarea>
            <button
              className="rounded-md p-2 mt-3 bg-indigo-700 text-white w-full cursor-pointer"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
