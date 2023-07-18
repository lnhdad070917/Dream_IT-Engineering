import React from "react";
import NavbarComponent from "../components/navbar";
import StatistikComponent from "../components/statistikComponent";
import CarouselComponent from "../components/carouselComponent";
import PricingComponent from "../components/pricingComponent";
import StepComponent from "../components/stepComponent";
import QnaComponent from "../components/qnaComponent";
import { Icon } from "@iconify/react";

export default function Dashboard() {
  const WhyChooseUs = [
    {
      highlight: "Desain yang Menakjubkan dan Unik",
      text: "Bakat kreatif, tampilan menakjubkan, identitas merek, pengunjung tertarik.",
    },
    {
      highlight: "Optimalisasi SEO untuk Tingkatkan Visibilitas",
      text: "Optimasi SEO: Meningkatkan visibilitas, rangking lebih tinggi di pencarian.",
    },
    {
      highlight: "Responsif di Semua Perangkat",
      text: "Desain responsif: sempurna di semua perangkat, jangkau audiens global.",
    },
    {
      highlight: "Rekam Jejak Sukses",
      text: "Bisnis sukses di dunia digital. Bergabunglah dan wujudkan potensi Anda.",
    },
  ];
  return (
    <div style={{ overflowX: "hidden" }}>
      <NavbarComponent />
      <div className="flex justify-center items-center h-full pt-24">
        <div className="text-center w-[45%]">
          <h2 className="text-[36px]">Showcase Your Talent,</h2>
          <h2 className="text-[36px]">
            Create Your <span className="text-[#003B73]">Online Canvas</span>
          </h2>
          <p className="pt-2 font-medium">
            Kembangkan kreativitasmu, ciptakan website menarik, dan tampilkan
            bakatmu dengan aplikasi portofolio profesional kami
          </p>
          <div className="text-white flex justify-evenly pt-[80px]">
            <button className="bg-[#003B73] text-xl border-2 rounded-[8px] w-[240px] py-[10px] font-bold border-[#003B73]">
              Buat Portofolio
            </button>
            <button className="text-xl border-2 rounded-[8px] w-[240px] py-[10px] font-bold text-[#003B73] border-[#003B73]">
              About Us
            </button>
          </div>
        </div>
      </div>
      <div className="pt-[60px] pb-[64px]">
        <StatistikComponent />
      </div>
      <div className="pb-[80px]">
        <h2 className="text-center text-[32px]">
          <span className="border-b-4 border-[#003B73]">Why Choose Us</span>
        </h2>
        <div className="flex justify-center">
          <div className="flex flex-wrap w-[88%] pt-[64px] gap-0">
            {WhyChooseUs.map((data, index) => (
              <div
                className="md:w-1/2 flex md:justify-normal justify-center md:flex-nowrap flex-wrap gap-5 p-5"
                key={index}
              >
                <div className="flex items-center text-[#003B73]">
                  <Icon icon="solar:verified-check-bold" width={100} />
                </div>
                <div className="flex items-center">
                  <div>
                    <h2 className="text-[24px] text-[#003B73]">
                      {data.highlight}
                    </h2>
                    <p className="text-[12px] font-normal">{data.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-[80px]">
        <div className="bg-[#BFD7ED] border border-[rgba(96, 163, 217, 0.56)] rounded-[8px] w-[90%] px-[74px] py-[45px]">
          <div className="flex flex-wrap">
            <div className="w-1/3">
              <h2 className="text-3xl">
                <span className="border-b-4 border-[#003B73]">About Us</span>
              </h2>
            </div>
            <div className="w-2/3">
              <p className="font-normal">
                Selamat datang di Dreamit! Kami adalah perusahaan penyedia jasa
                portofolio yang berdedikasi untuk mengabadikan impian Anda dalam
                desain dan kreativitas. Dengan tim berbakat kami, kami percaya
                bahwa setiap cerita layak diceritakan dan setiap proyek layak
                dibanggakan. Temukan lebih banyak tentang kami dan apa yang
                memotivasi perjalanan kami.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="text-center w-1/2">
          <h2 className="text-3xl font-bold">
            Kreasikan website unikmu, menjadi yang paling berbeda dari yang
            lain.
          </h2>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="text-center w-2/3">
          <p className="pt-5 text-base font-normal">
            Dreamit memberikan kreativitas tak terbatas dalam mengkustomisasi
            website Anda, memastikan setiap detail mencerminkan uniknya merek
            Anda dan menghadirkan pengalaman yang tak terlupakan bagi
            pengunjung, membedakan Anda dari pesaing.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <CarouselComponent />
        {/* <CComponent /> */}
      </div>
      <div className="mt-[420px] flex flex-wrap justify-center gap-5">
        <button className="text-[16px] border-2 rounded-[8px] px-[20px] py-[12px] font-bold text-[#003B73] border-[#003B73]">
          View More Example
        </button>
        <button className="bg-[#003B73] text-white text-[16px] border-2 rounded-[8px] px-[20px] py-[12px] font-bold border-[#003B73]">
          Create Your Portofolio
        </button>
      </div>
      <div className="flex justify-center pt-20">
        <div className="w-4/5">
          <p className="pb-5 font-normal">
            Buat portofoliomu profesional dengan domain{" "}
          </p>
          <div className="flex">
            <input
              type="text"
              className="w-2/3 bg-[#BFD7ED] rounded-[8px] text-xl p-5"
            />
            <div className="w-1/3 flex justify-center">
              <button className="bg-[#003B73] text-white text-[24px] border-2 rounded-[8px] w-2/3 py-[12px] font-bold border-[#003B73]">
                Cari Domain
              </button>
            </div>
          </div>
          <div className="pt-10 flex gap-x-8">
            <div className="bg-[#BFD7ED] rounded-[8px] w-1/3 text-center p-10">
              <h2 className="text-4xl text-[#003B73]">Include Free Domain</h2>
              <p className="text-base pt-10 px-6 font-normal">
                Nama domain gratis selalu termasuk dalam harga semua paket pro.
                Tidak ada biaya tambahan di kemudian hari untuk hosting domain.
                Pilih nama domain profesional dan mulailah membangun portofolio
                online yang dapat dikenali
              </p>
              <div className="pt-24">
                <button className="text-md border-2 rounded-[8px] px-[20px] py-[12px] font-bold text-[#003B73] border-[#003B73]">
                  Learn More About Domain
                </button>
              </div>
            </div>
            <div className="w-1/3 flex flex-col gap-y-8">
              <div className="h-1/3 bg-[#BFD7ED] rounded-[8px] text-center p-6">
                <h2 className="text-4xl text-[#003B73]">Global CDN</h2>
                <p className="text-base pt-3 font-normal px-10">
                  Dreamit Content Delivery Network (CDN) menyediakan koneksi
                  cepat di mana pun Anda berada.
                </p>
              </div>
              <div className="h-2/3 bg-[#BFD7ED] rounded-[8px] text-center p-6">
                <h2 className="text-4xl text-[#003B73]">
                  Transfer a domain you already own
                </h2>
                <p className="text-base pt-6 font-normal px-12">
                  Jika Anda sudah memiliki nama domain untuk perusahaan Anda,
                  Anda dapat dengan mudah mentransfernya ke situs web portofolio
                  online baru Anda.
                </p>
              </div>
            </div>
            <div className="w-1/3 flex flex-col gap-y-8">
              <div className="h-4/7 bg-[#BFD7ED] rounded-[8px] text-center p-10">
                <h2 className="text-4xl text-[#003B73]">Secure with SSL</h2>
                <p className="text-base pt-6 font-normal">
                  Dreamit memberi kliennya sertifikasi Secure Sockets Layer
                  (SSL) untuk memastikan kliennya memiliki tingkat keamanan yang
                  tinggi
                </p>
              </div>
              <div className="h-3/7 bg-[#BFD7ED] rounded-[8px] text-center p-10">
                <h2 className="text-4xl text-[#003B73]">Unlimited hosting</h2>
                <p className="text-base pt-6 font-normal">
                  Hosting tanpa batas gratis menjamin layanan yang cepat dan
                  berkualitas bagi pengunjung situs portofolio Anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-20 flex justify-center">
        <div className="w-4/5">
          <h2 className="text-5xl text-center pt-10">Pricing</h2>
          <p className="text-base font-normal text-center pt-5 px-44">
            "Pilih paket website terbaik yang sesuai anggaran dan kebutuhan
            bisnis Anda untuk memulai kehadiran online yang mengesankan."
          </p>
          <div className="flex justify-center pt-10 pb-10">
            <PricingComponent />
          </div>
        </div>
      </div>
      <div className="pt-10 flex justify-center">
        <div className="w-4/5">
          <h2 className="text-3xl font-bold text-center">
            Steps to create your portfolio website
          </h2>
          <p className="font-normal text-xl text-center pt-2">
            Langkah demi langkah, wujudkan desain impian Anda menjadi nyata.
          </p>
          <div className="flex justify-center pt-14">
            <StepComponent />
          </div>
          <div className="pt-10 flex justify-center gap-5">
            <button className="text-[16px] border-2 rounded-[8px] px-[20px] py-[12px] font-bold text-[#003B73] border-[#003B73]">
              View More Example
            </button>
            <button className="bg-[#003B73] text-white text-[16px] border-2 rounded-[8px] px-[20px] py-[12px] font-bold border-[#003B73]">
              Create Your Portofolio
            </button>
          </div>
        </div>
      </div>
      <div className="pt-20 flex justify-center pb-36">
        <div className="w-3/5">
          <h3 className="text-3xl">Frequently Asked Questions</h3>
          <p className="font-normal pt-3">
            Temukan Jawaban untuk Pertanyaan Anda di Sini.
          </p>
          <div className="pt-14">
            <QnaComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
