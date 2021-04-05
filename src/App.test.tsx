import { rest } from "msw";
import {
  render as rtlRender,
  getByTestId,
  fireEvent,
  waitFor,
  findByText,
  getByText,
  waitForElementToBeRemoved,
  queryByTestId,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import { setupServer } from "msw/node";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { formDataReducer as reducer } from "./reducers";

interface LoginBody {
  username: string;
}
interface LoginResponse {
  username: string;
  firstName: string;
}

const mockedAddressesResponse = {
  latitude: 51.490708,
  longitude: -0.144722,
  addresses: [
    "22 St. Georges Drive, , , , , London, ",
    "24 St. Georges Drive, , , , , London, ",
    "24a St. Georges Drive, , , , , London, ",
    "26 St. Georges Drive, , , , , London, ",
    "26a St. Georges Drive, , , , , London, ",
    "28 St. Georges Drive, , , , , London, ",
    "28a St. Georges Drive, , , , , London, ",
    "34 St. Georges Drive, , , , , London, ",
    "36 St. Georges Drive, , , , , London, ",
    "36a St. Georges Drive, , , , , London, ",
    "38a St. Georges Drive, , , , , London, ",
    "38b St. Georges Drive, , , , , London, ",
    "38c St. Georges Drive, , , , , London, ",
    "Flat 1, 26 St. Georges Drive, , , , London, ",
    "Flat 1, 28 St. Georges Drive, , , , London, ",
    "Flat 1, 36 St. Georges Drive, , , , London, ",
    "Flat 10, 22 St. Georges Drive, , , , London, ",
    "Flat 11, 22 St. Georges Drive, , , , London, ",
    "Flat 12, 22 St. Georges Drive, , , , London, ",
    "Flat 13, 22 St. Georges Drive, , , , London, ",
    "Flat 14, 22 St. Georges Drive, , , , London, ",
    "Flat 15, 22 St. Georges Drive, , , , London, ",
    "Flat 16, 22 St. Georges Drive, , , , London, ",
    "Flat 17, 22 St. Georges Drive, , , , London, ",
    "Flat 2, 22 St. Georges Drive, , , , London, ",
    "Flat 2, 28 St. Georges Drive, , , , London, ",
    "Flat 2, 36 St. Georges Drive, , , , London, ",
    "Flat 3, 22 St. Georges Drive, , , , London, ",
    "Flat 3, 26 St. Georges Drive, , , , London, ",
    "Flat 3, 28 St. Georges Drive, , , , London, ",
    "Flat 3, 34 St Georges Drive, , , , London, ",
    "Flat 4, 22 St. Georges Drive, , , , London, ",
    "Flat 4, 26 St. Georges Drive, , , , London, ",
    "Flat 4, 28 St. Georges Drive, , , , London, ",
    "Flat 4, 34 St. Georges Drive, , , , London, ",
    "Flat 5, 22 St. Georges Drive, , , , London, ",
    "Flat 5, 26 St. Georges Drive, , , , London, ",
    "Flat 5, 28 St. Georges Drive, , , , London, ",
    "Flat 6, 22 St. Georges Drive, , , , London, ",
    "Flat 6, 26 St. Georges Drive, , , , London, ",
    "Flat 6, 34 St. Georges Drive, , , , London, ",
    "Flat 7, 22 St. Georges Drive, , , , London, ",
    "Flat 8, 22 St. Georges Drive, , , , London, ",
    "Flat 9, 22 St. Georges Drive, , , , London, ",
    "Greysby Ltd, 32 Street George's Drive, Pimlico, , , London, Greater London",
    "Hanover Hotel, 30-32 St. Georges Drive, , , , London, ",
    "New England Hotel, 20 St. Georges Drive, , , , London, ",
    "Second Floor Flat, 28 St Georges Drive, , , , London, ",
  ],
};

const render = (
  ui: any,
  {
    initialState,
    store = createStore(reducer, initialState),
    ...renderOptions
  }: any = {}
) => {
  const Wrapper = ({ children }: any) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

const server = setupServer(
  rest.get<any, any>(
    "https://api.getAddress.io/*",
    (req: any, res: any, ctx: any) => {
      return res(ctx.json(mockedAddressesResponse));
    }
  )
);

async function selectOption(
  optionText: string,
  container: HTMLElement = document.body
) {
  const placeholder = getByText(container, "Select your address");
  fireEvent.keyDown(placeholder, {
    key: "ArrowDown",
  });
  await findByText(container, optionText);
  fireEvent.click(getByText(container, optionText));
}

describe("App", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test("Searches for valid UK postcode", async () => {
    render(<App />);
    const postcodeSearchInput = getByTestId(
      document.body,
      "postcode-search-input"
    );
    expect(postcodeSearchInput).toBeDefined();
    fireEvent.change(postcodeSearchInput, { target: { value: "SW1V 4BN" } });
    const submitBtn = getByTestId(
      document.body,
      "postcode-search-input-submit-btn"
    );
    fireEvent.click(submitBtn);
    await waitFor(() => {
      expect(
        getByTestId(document.body, "address-matches-dropdown-wrapper")
      ).toBeDefined();
    });

    await selectOption("22 St. Georges Drive, London, SW1V4BN");

    await waitFor(() => {
      expect(getByTestId(document.body, "address-line-1-input")).toHaveValue(
        "22 St. Georges Drive"
      );
      expect(getByTestId(document.body, "address-line-2-input")).toHaveValue(
        ""
      );
      expect(getByTestId(document.body, "county-input")).toHaveValue("");
      expect(getByTestId(document.body, "city-input")).toHaveValue("London");
      expect(getByTestId(document.body, "postcode-input")).toHaveValue(
        "SW1V 4BN"
      );
    });
  });

  test("Adds address to list", async () => {
    render(<App />);
    const postcodeSearchInput = getByTestId(
      document.body,
      "postcode-search-input"
    );
    expect(postcodeSearchInput).toBeDefined();
    fireEvent.change(postcodeSearchInput, { target: { value: "SW1V 4BN" } });
    const searchSubmitBtn = getByTestId(
      document.body,
      "postcode-search-input-submit-btn"
    );
    fireEvent.click(searchSubmitBtn);
    await waitFor(() => {
      expect(getByText(document.body, "Select your address")).toBeDefined();
    });

    await selectOption("22 St. Georges Drive, London, SW1V4BN");
    const addressFormSubmitBtn = getByTestId(
      document.body,
      "address-form-submit-btn"
    );
    fireEvent.click(addressFormSubmitBtn);

    await waitFor(() => {
      expect(getByTestId(document.body, "user-address-item")).toBeDefined();
      expect(
        queryByTestId(document.body, "user-address-form")
      ).not.toBeInTheDocument();
      expect(
        queryByTestId(document.body, "address-matches-dropdown-wrapper")
      ).not.toBeInTheDocument();
    });
  });

  test("Displays error message if API fails", async () => {
    server.use(
      rest.get<any, any>(
        "https://api.getAddress.io/*",
        (req: any, res: any, ctx: any) => {
          return res(
            ctx.status(500),
            ctx.json({
              errorMessage: `API error`,
            })
          );
        }
      )
    );
    render(<App />);
    const postcodeSearchInput = getByTestId(
      document.body,
      "postcode-search-input"
    );
    expect(postcodeSearchInput).toBeDefined();
    fireEvent.change(postcodeSearchInput, { target: { value: "SW1V 4BN" } });
    const submitBtn = getByTestId(
      document.body,
      "postcode-search-input-submit-btn"
    );
    fireEvent.click(submitBtn);
    await waitFor(() => {
      expect(getByTestId(document.body, "api-error-msg")).toHaveTextContent(
        "Failed to fetch addresses"
      );
    });
  });

  test("Removes address from list", async () => {
    server.use(
      rest.get<any, any>(
        "https://api.getAddress.io/*",
        (req: any, res: any, ctx: any) => {
          return res(
            // ctx.status(500),
            ctx.json(mockedAddressesResponse)
          );
        }
      )
    );
    render(<App />);
    const postcodeSearchInput = getByTestId(
      document.body,
      "postcode-search-input"
    );
    expect(postcodeSearchInput).toBeDefined();
    fireEvent.change(postcodeSearchInput, { target: { value: "SW1V 4BN" } });
    const searchSubmitBtn = getByTestId(
      document.body,
      "postcode-search-input-submit-btn"
    );
    fireEvent.click(searchSubmitBtn);
    await waitFor(() => {
      expect(
        getByTestId(document.body, "address-matches-dropdown-wrapper")
      ).toBeDefined();
    });

    await selectOption("22 St. Georges Drive, London, SW1V4BN");
    const addressFormSubmitBtn = getByTestId(
      document.body,
      "address-form-submit-btn"
    );
    fireEvent.click(addressFormSubmitBtn);

    await waitFor(() => {
      expect(getByTestId(document.body, "user-address-item")).toBeDefined();
    });

    fireEvent.click(getByTestId(document.body, "delete-address-btn"));

    await waitFor(() => {
      expect(
        queryByTestId(document.body, "user-address-item")
      ).not.toBeInTheDocument();
    });
  });
});
