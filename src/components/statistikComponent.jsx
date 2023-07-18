import React from "react";
import "./../assets/css/chart.css";
export default function StatistikComponent() {
  return (
    <div className="flex justify-center">
      <div className="bg-[#BFD7ED] border border-[rgba(96, 163, 217, 0.56)] rounded-[8px] w-[90%] px-[74px] py-[45px]">
        <div className="flex justify-center gap-16">
          <div className="flex items-center w-1/2">
            <div className="w-1/3 flex justify-center">
              <svg
                className="circle-chart"
                viewBox="0 0 34.83098862 34.83098862"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="circle-chart__background"
                  stroke="#ffffff"
                  strokeWidth="3"
                  fill="none"
                  cx="17.5"
                  cy="17.3"
                  r="15.91549431"
                />
                <circle
                  className="circle-chart__circle"
                  stroke="#003B73"
                  strokeWidth="3"
                  strokeDasharray="80,10"
                  strokeLinecap="round"
                  fill="none"
                  cx="17.5"
                  cy="17.5"
                  r="15.91549431"
                />
                <g className="circle-chart__info">
                  <text
                    className="circle-chart__percent"
                    x="16.91549431"
                    y="16.7"
                    alignmentBaseline="central"
                    textAnchor="middle"
                    fontSize="8"
                  >
                    1205
                  </text>
                </g>
              </svg>
            </div>
            <div className="w-2/3">
              <h2 className="text-[32px] text-[#003B73]">1200+ pengguna</h2>
              <p className="text-[16px]">
                telah mempercayai layanan kami di website. Bergabunglah sekarang
                dan rasakan perbedaannya!
              </p>
            </div>
          </div>
          <div className="flex items-center w-1/2">
            <div className="w-1/3 flex justify-center">
              <svg
                className="circle-chart"
                viewBox="0 0 34.83098862 34.83098862"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="circle-chart__background"
                  stroke="#ffffff"
                  strokeWidth="3"
                  fill="none"
                  cx="17.5"
                  cy="17.3"
                  r="15.91549431"
                />
                <circle
                  className="circle-chart__circle"
                  stroke="#003B73"
                  strokeWidth="3"
                  strokeDasharray="80,10"
                  strokeLinecap="round"
                  fill="none"
                  cx="17.5"
                  cy="17.5"
                  r="15.91549431"
                />
                <g className="circle-chart__info">
                  <text
                    className="circle-chart__percent"
                    x="16.91549431"
                    y="16.7"
                    alignmentBaseline="central"
                    textAnchor="middle"
                    fontSize="8"
                  >
                    560
                  </text>
                </g>
              </svg>
            </div>
            <div className="w-2/3">
              <h2 className="text-[32px] text-[#003B73]">Ada 500+ desain</h2>
              <p className="text-[16px]">
                yang menakjubkan untuk memenuhi kebutuhan Anda di website kami
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
