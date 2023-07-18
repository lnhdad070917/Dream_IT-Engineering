import React from "react";
import { Icon } from "@iconify/react";

export default function FooterComponent() {
  return (
    <div className="flex justify-center bg-[#003B73] text-white">
      <div className="w-4/5 ">
        <div className="flex gap-20 pt-20">
          <div className="w-1/3">
            <h2 className="text-2xl pb-5">Tentang Kami</h2>
            <p className="font-medium text-[12px]">
              DreamIT merupakan platform penyedia jasa pembuatan website yang
              memberikan layanan mulai dari desain website, developing hingga
              hosting. Pilih desain website yang kamu inginkan maka kami akan
              wujudkan website impianmu.
            </p>
          </div>
          <div className="w-1/3">
            <h2 className="text-2xl pb-5">Tautan Langsung</h2>
            <button>Home</button> <br />
            <button>Desain</button> <br />
            <button>Fasilitas</button> <br />
            <button>Testimoni</button>
          </div>
          <div className="w-1/3">
            <h2 className="text-2xl pb-5">Kontak Kami</h2>
            <div className="flex gap-2 pb-2">
              <Icon icon="ri:map-pin-2-fill" width={20} />
              <p className="font-medium text-[12px]">
                Purwokerto, Banyumas, Jawa Tengah
              </p>
            </div>
            <div className="flex gap-2 pb-2">
              <Icon icon="mdi:telephone" width={20} />
              <p className="font-medium text-[12px]">+6282 3253 54547</p>
            </div>
            <div className="flex gap-2 pb-2">
              <Icon icon="ic:round-mail" width={20} />
              <p className="font-medium text-[12px]">
                dreamit.engineering@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="pt-5 flex gap-5 pb-5">
          <button>
            <Icon icon="cib:facebook" width={25} />
          </button>
          <button>
            <Icon icon="formkit:instagram" width={25} />
          </button>
          <button>
            <Icon icon="bi:twitter" width={25} />
          </button>
        </div>
        <hr className="border-t-[3px] pt-3" />
        <p className="font-normal pb-4">
          Copyright &copy;2023 All rights reserved | This template is made with
          by DreamIT
        </p>
      </div>
    </div>
  );
}
