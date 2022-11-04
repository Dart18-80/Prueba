import { PlatformTest } from "@tsed/common";
import { HelloWorldController } from "./HelloWorldController";

describe("HelloWorldController", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("should do something", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    // const instance = PlatformTest.invoke<HelloWorldController>(HelloWorldController); // get fresh instance

    expect(instance).toBeInstanceOf(HelloWorldController);
  });

  it("Return 12", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    // const instance = PlatformTest.invoke<HelloWorldController>(HelloWorldController); // get fresh instance
    jest.spyOn(instance, "multiplicar").mockResolvedValue(1);
    const num1=4;
    const num2=3;
    expect(instance.multiplicar(num1, num2)).toBe(12);
  });

  it("Return 2", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    // const instance = PlatformTest.invoke<HelloWorldController>(HelloWorldController); // get fresh instance
    jest.spyOn(instance, "dividir").mockResolvedValue(1);
    const num1=4;
    const num2=2;
    expect(instance.dividir(num1, num2)).toBe(2);
  });

  it("return My Name", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    // const instance = PlatformTest.invoke<HelloWorldController>(HelloWorldController); // get fresh instance

    expect(instance.myName()).toEqual("Diego Alejandro Ruiz Trabanino");
  });

  it("Return 523.60", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    // const instance = PlatformTest.invoke<HelloWorldController>(HelloWorldController); // get fresh instance
    jest.spyOn(instance, "Volumen_Circulo").mockResolvedValue(1);
    const num1=5;
    expect(instance.Volumen_Circulo(num1)).toBe(523.60);
  });


});
