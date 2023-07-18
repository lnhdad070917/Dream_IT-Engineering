import React, { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform text-[#003B73]`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function QnaComponent() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="border-[#003B73] border-b-2"
        >
          <h2 className="font-medium text-[#003B73]">Apa itu Website ?</h2>
        </AccordionHeader>
        <AccordionBody>
          <p className="font-normal text-base">
            Website adalah sekumpulan halaman web yang terhubung dan diakses
            melalui internet. Secara umum, sebuah website biasanya terdiri dari
            berbagai elemen seperti teks, gambar, video, dan fitur interaktif
            lainnya. Tujuan utama dari website adalah menyampaikan informasi
            kepada pengguna atau memungkinkan interaksi antara pengguna dan
            pemilik website.
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="border-[#003B73] border-b-2"
        >
          <h2 className="font-medium text-[#003B73]">Apa itu Portofolio ?</h2>
        </AccordionHeader>
        <AccordionBody>
          <p className="font-normal text-base">
            Portofolio adalah kumpulan atau koleksi karya, proyek, prestasi,
            atau pengalaman seseorang yang disusun dengan tujuan untuk
            mempresentasikan kemampuan, keahlian, dan potensi seseorang dalam
            bidang tertentu. Portofolio sering digunakan dalam konteks
            profesional, terutama dalam industri kreatif seperti desain grafis,
            seni, arsitektur, fotografi, penulisan, dan bidang terkait lainnya.
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className="border-[#003B73] border-b-2"
        >
          <h2 className="font-medium text-[#003B73]">Apa itu Hosting ?</h2>
        </AccordionHeader>
        <AccordionBody>
          <p className="font-normal text-base">
            Hosting adalah proses menyimpan dan menjalankan file-file website di
            server yang terhubung dengan internet sehingga website tersebut
            dapat diakses secara online. Server-server hosting yang digunakan
            oleh penyedia hosting web secara fisik tersimpan di pusat data (data
            center) yang dilengkapi dengan keamanan, sistem pemantauan, daya
            cadangan, dan koneksi internet yang andal.
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className="border-[#003B73] border-b-2"
        >
          <h2 className="font-medium text-[#003B73]">Apa itu Domain ?</h2>
        </AccordionHeader>
        <AccordionBody>
          <p className="font-normal text-base">
            Domain (nama domain) merujuk pada alamat unik yang digunakan untuk
            mengidentifikasi dan mengakses sebuah website di internet. Domain
            berfungsi sebagai alamat website yang mudah diingat oleh pengguna.
            Contohnya, "example.com" adalah sebuah domain.
          </p>
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}
