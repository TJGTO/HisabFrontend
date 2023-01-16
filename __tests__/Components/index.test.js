import Test from "../../pages/testing";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("testing", () => {
  it("testing", () => {
    render(<Test />);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
