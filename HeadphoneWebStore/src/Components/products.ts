import { HeadPhoneType, IProduct } from "./types";
import AppleBYZS852I from "../app/img/AppleBYZS852I.png";
import AppleEarPods from "../app/img/AppleEarPods.png";
import AppleEarPods2 from "../app/img/AppleEarPods2.png";
import AppleAirPods3 from "../app/img/AppleAirPods3.png";
import GERLAXGH04 from "../app/img/GERLAXGH-04.png";
import BOROFONEBO4 from "../app/img/BOROFONEBO4.png";

export const products: IProduct[] = [
   {
      id: 1,
      img: AppleBYZS852I,
      title: "Apple BYZ S852I",
      price: 2927,
      oldPrice: 3527,
      rate: 4.7,
      type: HeadPhoneType.wired,
   },
   {
      id: 2,
      img: AppleEarPods,
      title: "Apple EarPods",
      price: 2327,
      rate: 4.5,
      type: HeadPhoneType.wired,
   },
   {
      id: 3,
      img: AppleEarPods2,
      title: "Apple EarPods",
      price: 2327,
      rate: 4.5,
      type: HeadPhoneType.wired,
   },
   {
      id: 4,
      img: AppleBYZS852I,
      title: "Apple BYZ S852I",
      price: 2927,
      rate: 4.7,
      type: HeadPhoneType.wired,
   },
   {
      id: 5,
      img: AppleEarPods,
      title: "Apple EarPods",
      price: 2327,
      rate: 4.5,
      type: HeadPhoneType.wired,
   },
   {
      id: 6,
      img: AppleEarPods2,
      title: "Apple EarPods",
      price: 2327,
      rate: 4.5,
      type: HeadPhoneType.wired,
   },
   {
      id: 7,
      img: AppleAirPods3,
      title: "Apple AirPods",
      price: 9527,
      rate: 4.7,
      type: HeadPhoneType.wireless,
   },
   {
      id: 8,
      img: GERLAXGH04,
      title: "GERLAX GH-04",
      price: 6527,
      rate: 4.7,
      type: HeadPhoneType.wireless,
   },
   {
      id: 9,
      img: BOROFONEBO4,
      title: "BOROFONE BO4",
      price: 7527,
      rate: 4.7,
      type: HeadPhoneType.wireless,
   },
];
