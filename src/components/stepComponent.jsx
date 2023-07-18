import React from "react";
import { Icon } from "@iconify/react";

export default function StepComponent() {
  return (
    <div className="flex jusitfy-center items-center gap-5">
      <div>
        <div className="rounded-full border border-dashed border-[#003B73] p-3">
          <div className="flex justify-center text-[#003B73]">
            <Icon icon="ph:lightbulb-light" width={40} />
          </div>
        </div>
        <p className="text-base font-light text-center text-[#003B73]">Pilih</p>
      </div>
      <div className="pb-5 text-[#003B73]">
        <Icon icon="ep:right" width={20} />
      </div>
      <div>
        <div className="rounded-[50%] border border-dashed border-[#003B73] p-3">
          <div className="flex justify-center text-[#003B73]">
            <Icon icon="fa-regular:edit" width={40} />
          </div>
        </div>
        <p className="text-base font-light text-center text-[#003B73]">Edit</p>
      </div>
      <div className="pb-5 text-[#003B73]">
        <Icon icon="ep:right" width={20} />
      </div>
      <div>
        <div className="rounded-full border border-dashed border-[#003B73] p-3">
          <div className="flex justify-center text-[#003B73]">
            <Icon icon="fluent:mail-inbox-arrow-up-20-regular" width={40} />
          </div>
        </div>
        <p className="text-base font-light text-center text-[#003B73]">Kirim</p>
      </div>
      <div className="pb-5 text-[#003B73]">
        <Icon icon="ep:right" width={20} />
      </div>
      <div>
        <div className="rounded-full border border-dashed border-[#003B73] p-3">
          <div className="flex justify-center text-[#003B73]">
            <Icon icon="octicon:clock-24" width={40} />
          </div>
        </div>
        <p className="text-base font-light text-center text-[#003B73]">
          Tunggu
        </p>
      </div>
      <div className="pb-5 text-[#003B73]">
        <Icon icon="ep:right" width={20} />
      </div>
      <div>
        <div className="rounded-full border border-dashed border-[#003B73] p-3">
          <div className="flex justify-center text-[#003B73]">
            <Icon icon="ph:seal-check" width={40} />
          </div>
        </div>
        <p className="text-base font-light text-center text-[#003B73]">
          Selesai
        </p>
      </div>
    </div>
  );
}
