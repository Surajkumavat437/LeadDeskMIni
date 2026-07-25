import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 text-center pb-2 sm:pb-4 text-xs text-gray-500">
      <p>
        Built for{" "}
        <span className="font-semibold text-indigo-600">Digital Heroes</span>{" "}
        Training Task
      </p>
      <a
        href="https://digitalheroesco.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 inline-flex items-center gap-1 font-semibold text-indigo-600 hover:underline"
      >
        digitalheroesco.com
        <ExternalLink size={13} />
      </a>
    </footer>
  );
}
