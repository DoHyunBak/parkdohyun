import { ArrowRight } from "lucide-react";
import SectionHeader from "@/shared/ui/SectionHeader";
import CodeCard from "@/shared/ui/CodeCard";

function toVarName(id = "") {
  return String(id)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

export default function CertificationsSection({ certifications = [] }) {
  return (
    <section id="certs" className="space-y-6 border-t border-zinc-900 pt-6 md:space-y-10 md:pt-8">
      <SectionHeader
        title="Certifications"
        description="Certificates and study plans."
        fields={[
          { type: "String", name: "name" },
          { type: "String", name: "status" },
        ]}
      />

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {certifications.map((cert) => {
          const certId = cert.id;
          const varName = toVarName(certId);

          return (
            <CodeCard
              key={certId}
              fileName={`cert-${certId}.java`}
              topRight={cert.status}
              lineNumbers={["01", "02", "03"]}
            >
              <a
                href={`#/certifications/${certId}`}
                className="group block transition-colors hover:text-white"
              >
                <div className="space-y-3">
                  <div className="space-y-1 text-[13px] text-zinc-400 sm:text-sm">
                    <div>
                      <span className="text-[#c792ea]">Certification</span>{" "}
                      <span className="text-white">{varName}</span>{" "}
                      <span className="text-zinc-500">=</span>{" "}
                      <span className="text-[#c792ea]">new</span>{" "}
                      <span className="text-white">Certification</span>
                      <span className="text-zinc-500">();</span>
                    </div>

                    <div>
                      <span className="text-[#82aaff]">{varName}</span>
                      <span className="text-zinc-500">.</span>
                      <span className="text-[#82aaff]">name</span>{" "}
                      <span className="text-zinc-500">=</span>{" "}
                      <span className="text-[#ecc48d]">"{cert.name}"</span>
                      <span className="text-zinc-500">;</span>
                    </div>

                    <div>
                      <span className="text-[#82aaff]">{varName}</span>
                      <span className="text-zinc-500">.</span>
                      <span className="text-[#82aaff]">status</span>{" "}
                      <span className="text-zinc-500">=</span>{" "}
                      <span className="text-[#ecc48d]">"{cert.status}"</span>
                      <span className="text-zinc-500">;</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs text-zinc-600">
                      {"// "}
                      {cert.detail}
                    </span>

                    <ArrowRight className="h-4 w-4 shrink-0 text-zinc-600 transition-transform group-hover:translate-x-1 group-hover:text-white" />
                  </div>
                </div>
              </a>
            </CodeCard>
          );
        })}
      </div>
    </section>
  );
}
