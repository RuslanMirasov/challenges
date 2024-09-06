import { render, screen } from "@testing-library/react";
import Navigation from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  // Рендерим компонент Navigation
  render(<Navigation players={[]} />);

  // Ищем ссылку с текстом 'Play' и проверяем, что она рендерится
  const playLink = screen.getByRole("link", { name: "Play" });
  expect(playLink).toBeInTheDocument();

  // Ищем ссылку с текстом 'History' и проверяем, что она рендерится
  const historyLink = screen.getByRole("link", { name: "History" });
  expect(historyLink).toBeInTheDocument();
});
