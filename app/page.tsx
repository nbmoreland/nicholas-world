import Image from "next/image";
import uta_seal from "@/public/uta-seal.jpg";
import ut_seal from "@/public/texas-seal.svg";

export default function Home() {
  return (
    <>
      <main className="pb-40 pt-10">
        <section className="px-20 lg:px-32 2xl:px-52 4xl:px-72 py-10 h-96">
          <h1 className="text-5xl font-bold">Hi, I am Nicholas Moreland</h1>
          <p className="text-2xl pt-4">
            I am a software engineer with a passion for building things.
          </p>
        </section>
        <section className="px-20 lg:px-32 2xl:px-52 4xl:px-72 py-10 h-96 bg-gray-100">
          <h1 className="text-5xl font-bold">Skills</h1>
          <p className="text-2xl pt-4">
            Languages, frameworks, and tools I have experience with.
          </p>
        </section>
        <section className="px-20 lg:px-32 2xl:px-52 4xl:px-72 py-10 h-96">
          <h1 className="text-5xl font-bold">Work Experience</h1>
          <p className="text-2xl pt-4">
            Professional experience I have gained over the years.
          </p>
        </section>
        <section className="px-20 lg:px-32 2xl:px-52 4xl:px-72 py-10 h-96 bg-gray-100">
          <h1 className="text-5xl font-bold">Projects</h1>
          <p className="text-2xl pt-4">
            Personal projects I have worked on in my free time.
          </p>
        </section>
        <section className="px-20 lg:px-32 2xl:px-52 4xl:px-72 py-10 space-y-4">
          <h1 className="text-5xl font-bold">Education</h1>
          <p className="text-2xl">Post-secondary education I have received.</p>
          <div className="flex justify-center py-4 space-x-40">
            <Image src={uta_seal} alt="UTA Seal" width={200} height={200} />
            <Image src={ut_seal} alt="UT Seal" width={200} height={200} />
          </div>
        </section>
        <section className="px-20 lg:px-32 2xl:px-52 4xl:px-72 py-10 h-96 bg-gray-100">
          <h1 className="text-5xl font-bold">Certifications</h1>
          <p className="text-2xl pt-4">
            Techincal certifications I have earned.
          </p>
        </section>
      </main>
    </>
  );
}
