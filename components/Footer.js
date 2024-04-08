import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import ContactForm from "./ContactForm";
import EasterEggBtn from "./EasterEggBtn";

export default function Footer() {
  return (
    <footer className="bg-transparent p-10">
      <EasterEggBtn />
      <div className="mt flex justify-center">
        <ContactForm />
      </div>

      <Link
        href="https://github.com/EmelieJohanna"
        className="text-slate-70 hover:text-slate-900 flex justify-center p-4"
      >
        <FaGithub />
      </Link>
      <div className="flex justify-center">
        &copy; {new Date().getFullYear()} Emelie Johanna Group. All rights
        reserved.
      </div>
    </footer>
  );
}
