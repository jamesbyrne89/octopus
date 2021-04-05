import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import { setupServer } from "msw/node";
import { rest, setupWorker } from "msw";

interface LoginBody {
  username: string;
}
interface LoginResponse {
  username: string;
  firstName: string;
}

const worker = setupWorker(
  rest.post<any, any>(
    "https://api.getAddress.io/find",
    (req: any, res: any, ctx: any) => {
      res.status = 500;
      return res;
    }
  )
);

test("searches for valid UK postcode", () => {
  // render(<App />);
  //
});

test("displays error message if API fails", () => {
  // render(<App />);
  //
});

test("displays error message if API fails", () => {
  // render(<App />);
  //
});
