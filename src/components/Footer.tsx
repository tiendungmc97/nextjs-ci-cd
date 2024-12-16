import Image from "next/image";

function Footer() {
  return (
    <div className="bg-[#d4dce7] px-4 py-4 text-black md:px-20">
      <div className="flex flex-wrap justify-between gap-8 pt-10">
        <div className="flex max-w-80 flex-col gap-4">
          <p className="text-xl font-semibold">Logo</p>
          <p>Our vision is to provide convenience and help increase your sales business.</p>
          <div className="flex gap-4">
            <Image
              src="/icons/facebook.png"
              alt="facebook"
              width={40}
              height={40}
              className="rounded-full bg-black"
            />
            <Image
              src="/icons/twitter.png"
              alt="twitter"
              width={40}
              height={40}
              className="rounded-full border-none bg-black outline-none"
            />
            <Image
              src="/icons/instagram.png"
              alt="instagram"
              width={40}
              height={40}
              className="rounded-full border-none bg-black outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 text-gray-800">
          <p className="text-xl font-semibold">About</p>
          <p>How it works</p>
          <p>Featured</p>
          <p>Partnership</p>
          <p>Business Relation</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xl font-semibold">Community</p>
          <p>Events</p>
          <p>Blog</p>
          <p>Podcast</p>
          <p>Invite a friend</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xl font-semibold">Socials</p>
          <p>Discord</p>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Facebook</p>
        </div>
      </div>
      <div className="flex flex-col justify-between pt-10 text-sm opacity-50 md:flex-row">
        <p className="text-center md:text-start">© 2021 All rights reserved</p>
        <div className="flex justify-between gap-4 md:justify-normal lg:gap-8">
          <p>Privacy & Policy</p>
          <p>Terms & Condition</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
