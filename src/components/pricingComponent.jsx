import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Icon } from "@iconify/react";

export default function PricingComponent() {
  return (
    <div className="flex items-center gap-10">
      <div>
        <Card
          variant="gradient"
          className="w-full max-w-[20rem] p-8 border border-[#BFD7ED]"
        >
          <CardBody className="p-0">
            <div className="text-center">
              <h4 className="text-md font-medium text-[#0074B7]">
                Paket Silver
              </h4>
              <h3 className="text-xl font-medium text-[#0074B7] pb-5">
                3 Bulan
              </h3>
              <h2 className="text-3xl font-bold pb-5">Rp 49000</h2>
              <p className="font-medium text-md text-[#0074B7] pb-5 px-10">
                Akses layanan setara Rp 17000/bulan
              </p>
            </div>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <span className="rounded-full text-white border border-green-400 bg-green-400 p-1">
                  <Icon icon="entypo:check" />
                </span>
                <Typography className="font-normal">10 Pages</Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full text-white border border-green-400 bg-green-400 p-1">
                  <Icon icon="entypo:check" />
                </span>
                <Typography className="font-normal">
                  Powerfull SEO tools
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full text-white border border-green-400 bg-green-400 p-1">
                  <Icon icon="entypo:check" />
                </span>
                <Typography className="font-normal">Custom CSS</Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full text-white border border-green-400 bg-green-400 p-1">
                  <Icon icon="entypo:check" />
                </span>
                <Typography className="font-normal">Image Protect</Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full text-white border border-green-400 bg-green-400 p-1">
                  <Icon icon="entypo:check" />
                </span>
                <Typography className="font-normal">SSL Security</Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full text-white border border-green-400 bg-green-400 p-1">
                  <Icon icon="entypo:check" />
                </span>
                <Typography className="font-normal">
                  Unlimited Bandwith
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full text-white border border-red-400 bg-red-400 p-1">
                  <Icon icon="octicon:x-12" />
                </span>
                <Typography className="font-normal">
                  Mobile Optimized Web
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full text-white border border-red-400 bg-red-400 p-1">
                  <Icon icon="octicon:x-12" />
                </span>
                <Typography className="font-normal">24/7 Support</Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full text-white border border-red-400 bg-red-400 p-1">
                  <Icon icon="octicon:x-12" />
                </span>
                <Typography className="font-normal">
                  Free Custom Domain
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full text-white border border-red-400 bg-red-400 p-1">
                  <Icon icon="octicon:x-12" />
                </span>
                <Typography className="font-normal">Custom Template</Typography>
              </li>
            </ul>
          </CardBody>
          <CardFooter className="mt-12 p-0">
            <Button
              size="lg"
              className="text-md bg-white border-2 rounded-[8px] px-[20px] py-[12px] font-bold text-[#003B73] border-[#003B73]"
              ripple={false}
              fullWidth={true}
            >
              Mulai Berlangganan
            </Button>
          </CardFooter>
        </Card>
      </div>
      <Card
        variant="gradient"
        className="w-full max-w-[20rem] border border-[#BFD7ED] overflow-hidden"
      >
        <CardHeader
          floated={false}
          shadow={false}
          className="m-0 rounded-none p-3 bg-[#003B73]"
        >
          <Typography className="text-center text-white text-2xl font-bold">
            Populer
          </Typography>
        </CardHeader>
        <CardBody className="p-8">
          <div className="text-center">
            <h4 className="text-md font-medium text-[#0074B7]">Paket Silver</h4>
            <h3 className="text-xl font-medium text-[#0074B7] pb-5">
              12 Bulan
            </h3>
            <h2 className="text-3xl font-bold pb-5">Rp 119000</h2>
            <p className="font-medium text-md text-[#0074B7] pb-5 px-10">
              Akses layanan setara Rp 8000/bulan
            </p>
          </div>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <span className="rounded-full text-white border border-green-400 bg-green-400 p-1">
                <Icon icon="entypo:check" />
              </span>
              <Typography className="font-normal">10 Pages</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full text-white border border-green-400 bg-green-400 p-1">
                <Icon icon="entypo:check" />
              </span>
              <Typography className="font-normal">
                Powerfull SEO tools
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full text-white border border-green-400 bg-green-400 p-1">
                <Icon icon="entypo:check" />
              </span>
              <Typography className="font-normal">Custom CSS</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full text-white border border-green-400 bg-green-400 p-1">
                <Icon icon="entypo:check" />
              </span>
              <Typography className="font-normal">Image Protect</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full text-white border border-green-400 bg-green-400 p-1">
                <Icon icon="entypo:check" />
              </span>
              <Typography className="font-normal">SSL Security</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full text-white border border-green-400 bg-green-400 p-1">
                <Icon icon="entypo:check" />
              </span>
              <Typography className="font-normal">
                Unlimited Bandwith
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full text-white border border-green-400 bg-green-400 p-1">
                <Icon icon="entypo:check" />
              </span>
              <Typography className="font-normal">
                Mobile Optimized Web
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full text-white border border-green-400 bg-green-400 p-1">
                <Icon icon="entypo:check" />
              </span>
              <Typography className="font-normal">24/7 Support</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full text-white border border-green-400 bg-green-400 p-1">
                <Icon icon="entypo:check" />
              </span>
              <Typography className="font-normal">
                Free Custom Domain
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full text-white border border-green-400 bg-green-400 p-1">
                <Icon icon="entypo:check" />
              </span>
              <Typography className="font-normal">Custom Template</Typography>
            </li>
          </ul>
        </CardBody>
        <CardFooter className="mt-0 p-8">
          <Button
            size="lg"
            className="text-md bg-[#003B73] border-2 rounded-[8px] px-[20px] py-[12px] font-bold text-white border-[#003B73]"
            ripple={false}
            fullWidth={true}
          >
            Mulai Berlangganan
          </Button>
        </CardFooter>
      </Card>
      <div>
        <Card
          variant="gradient"
          className="w-full max-w-[20rem] p-8 border border-[#BFD7ED]"
        >
          <CardBody className="p-0">
            <div className="text-center">
              <h4 className="text-md font-medium text-[#0074B7]">
                Paket Silver
              </h4>
              <h3 className="text-xl font-medium text-[#0074B7] pb-5">
                6 Bulan
              </h3>
              <h2 className="text-3xl font-bold pb-5">Rp 89000</h2>
              <p className="font-medium text-md text-[#0074B7] pb-5 px-10">
                Akses layanan setara Rp 14000/bulan
              </p>
            </div>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <span className="rounded-full text-white border border-green-400 bg-green-400 p-1">
                  <Icon icon="entypo:check" />
                </span>
                <Typography className="font-normal">10 Pages</Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full text-white border border-green-400 bg-green-400 p-1">
                  <Icon icon="entypo:check" />
                </span>
                <Typography className="font-normal">
                  Powerfull SEO tools
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full text-white border border-green-400 bg-green-400 p-1">
                  <Icon icon="entypo:check" />
                </span>
                <Typography className="font-normal">Custom CSS</Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full text-white border border-green-400 bg-green-400 p-1">
                  <Icon icon="entypo:check" />
                </span>
                <Typography className="font-normal">Image Protect</Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full text-white border border-green-400 bg-green-400 p-1">
                  <Icon icon="entypo:check" />
                </span>
                <Typography className="font-normal">SSL Security</Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full text-white border border-green-400 bg-green-400 p-1">
                  <Icon icon="entypo:check" />
                </span>
                <Typography className="font-normal">
                  Unlimited Bandwith
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full text-white border border-green-400 bg-green-400 p-1">
                  <Icon icon="entypo:check" />
                </span>
                <Typography className="font-normal">
                  Mobile Optimized Web
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full text-white border border-green-400 bg-green-400 p-1">
                  <Icon icon="entypo:check" />
                </span>
                <Typography className="font-normal">24/7 Support</Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full text-white border border-red-400 bg-red-400 p-1">
                  <Icon icon="octicon:x-12" />
                </span>
                <Typography className="font-normal">
                  Free Custom Domain
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full text-white border border-red-400 bg-red-400 p-1">
                  <Icon icon="octicon:x-12" />
                </span>
                <Typography className="font-normal">Custom Template</Typography>
              </li>
            </ul>
          </CardBody>
          <CardFooter className="mt-12 p-0">
            <Button
              size="lg"
              className="text-md bg-white border-2 rounded-[8px] px-[20px] py-[12px] font-bold text-[#003B73] border-[#003B73]"
              ripple={false}
              fullWidth={true}
            >
              Mulai Berlangganan
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
