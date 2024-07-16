import Link from "./link";


describe("Criação de link", () => {
  test("deve criar um link", () => {
    const link = new Link("cubosacademy", "htpps://cubos.academy");

    expect(link).toHaveProperty("identificador", "cubosacademy");
    expect(link).toHaveProperty("url", "htpps://cubos.academy");
    expect(link).toHaveProperty("visitas", 0);
  });
});
