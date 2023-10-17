import { registerAs } from "@nestjs/config";

export default registerAs('email', () => ({
  service: "GMAIL",
  auth: {
    user: "viewzy.com@gmail.com",
    pass: "SEXTOY123",
  },
  baseUrl: "http://loaclhost:3000",
}));
