import Link from "./components/Link";

import bkg from "./assets/checks.png";

export default function App() {
  return (
    <div className="bg-white">
      <div className="grid min-h-screen place-items-center px-6 lg:px-8 relative z-0 overflow-hidden">
        <img
          src={bkg}
          alt=""
          className="absolute -z-10 -top-24 -left-24 rotate-45 max-h-[70vh]"
          draggable="false"
        />
        <img
          src={bkg}
          alt=""
          className="absolute -z-10 -bottom-24 -right-24 rotate-[135deg] max-h-[70vh]"
          draggable="false"
        />
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Read the blog post.{" "}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl [text-wrap:balance]">
              Must-Have Tailwind Tools
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 [text-wrap:balance]">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="#"
                className="shadow-sm bg-indigo-600  text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
              <Link href="#" className="leading-6 text-gray-900">
                Learn more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
