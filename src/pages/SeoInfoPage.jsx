import { pageMetadata } from "../data/seoMetadata.js";

export default function SeoInfoPage({ path = "/" }) {
  const meta = pageMetadata[path] || pageMetadata["/"];

  return (
    <main className="min-h-[520px] bg-[#f7f9f8] px-6 py-20">
      <section className="mx-auto max-w-[980px] rounded-[34px] bg-white px-8 py-14 shadow-[0_24px_60px_rgba(15,23,42,0.08)] md:px-14">
        <p className="mb-4 text-[13px] font-black uppercase tracking-[2.5px] text-[#27c7c4]">
          Pawzy
        </p>
        <h1 className="max-w-[760px] text-[38px] font-black leading-[1.12] text-[#111827] md:text-[54px]">
          {meta.title.replace(" | Pawzy", "").replace("Pawzy — ", "")}
        </h1>
        <p className="mt-6 max-w-[760px] text-[17px] font-medium leading-[1.8] text-[#596174]">
          {meta.description}
        </p>
        <a
          href="/"
          className="mt-10 inline-flex h-[54px] items-center justify-center rounded-[14px] bg-[#27c7c4] px-7 text-[15px] font-extrabold text-white shadow-[0_16px_30px_rgba(39,199,196,0.28)]"
        >
          Back to Home →
        </a>
      </section>
    </main>
  );
}
