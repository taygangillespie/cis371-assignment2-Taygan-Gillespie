import "./style.scss";
// import { setupCounter } from "./counter.ts";

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
const bases: Record<string, string> = {
  blackTea: "#8B4513",
  greenTea: "#C8E6C9",
  coffee: "#6F4E37",
};

const creamers: Record<string, string> = {
  milk: "AliceBlue",
  cream: "#F5F5DC",
  half: "#FFFACD",
};

const syrups: Record<string, string> = {
  vanilla: "#FFEFD5",
  caramel: "#DAA520",
  hazelnut: "#6B4423",
};

function applyTemperature(input: HTMLInputElement): void {
  const container = document.getElementById(
    "condensation",
  ) as HTMLDivElement | null;
  if (!container) return;

  const children = container.children;

  for (let i = 0; i < children.length; i++) {
    const child = children[i] as HTMLElement;

    if (input.value === "hot") {
      child.className = "stream";
    } else {
      child.className = "flake";
    }
  }
}

function applyBase(input: HTMLInputElement): void {
  const baseElements = document.getElementsByClassName("base");

  if (baseElements.length === 0) return;

  const baseDiv = baseElements[0] as HTMLDivElement;

  const color = bases[input.value];
  if (!color) return;

  baseDiv.style.backgroundColor = color;
}

function applyCream(input: HTMLInputElement): void {
  const creamElements = document.getElementsByClassName("foam");

  if (creamElements.length === 0) return;

  const color = creamers[input.value];
  if (!color) return;
  for (let i = 0; i < creamElements.length; i++) {
    const element = creamElements[i] as HTMLDivElement;
    element.style.backgroundColor = color;
  }
}

function applySyrup(input: HTMLInputElement): void {
  const syrupElements = document.getElementsByClassName("syrup");

  if (syrupElements.length === 0) return;

  const color = syrups[input.value];
  if (!color) return;

  for (let i = 0; i < syrupElements.length; i++) {
    const element = syrupElements[i] as HTMLDivElement;
    element.style.setProperty("--syrup-color", color);
  }
  // TODO: implement this function
}

function setupSyrupListeners(): void {
  const syrupInputs = document.querySelectorAll<HTMLInputElement>('input[name="syrup"]');

  for (let x of syrupInputs) {
    x.addEventListener("change", (event) => {
      const target = event.target as HTMLInputElement;
      applySyrup(target);
    });
  }
  const selectedSyrupInput = document.querySelector<HTMLInputElement>('input[name="syrup"]:checked');
  if (selectedSyrupInput) {
    applySyrup(selectedSyrupInput);
  }
  // TODO: implement this function
}

setupSyrupListeners();

function setupCreamListeners(): void {
  const creamInputs = document.querySelectorAll<HTMLInputElement>('input[name="cream"]');

  for (let x of creamInputs) {
    x.addEventListener("change", (event) => {
      const target = event.target as HTMLInputElement;
      applyCream(target);
    });
  }

  const selectedCreamInput = document.querySelector<HTMLInputElement>('input[name="cream"]:checked');
  if (selectedCreamInput) {
    applyCream(selectedCreamInput);
  }
  // TODO: implement this function
}
setupCreamListeners();

function setupTemperatureListeners(): void {
  const temperatureInputs = document.querySelectorAll<HTMLInputElement>('input[name="temperature"]');

  for (let x of temperatureInputs) {
    x.addEventListener("change", (event) => {
      const target = event.target as HTMLInputElement;
      applyTemperature(target);
    });
  }

  const selectedTemperatureInput = document.querySelector<HTMLInputElement>('input[name="temperature"]:checked');
  if (selectedTemperatureInput) {
    applyTemperature(selectedTemperatureInput);
  }
  // TODO: implement this function
}

setupTemperatureListeners();

function setupBaseListeners(): void {
  const baseInputs = document.querySelectorAll<HTMLInputElement>('input[name="base"]');

  for (let x of baseInputs) {
    x.addEventListener("change", (event) => {
      const target = event.target as HTMLInputElement;
      applyBase(target);
    });
  }

  const selectedBaseInput = document.querySelector<HTMLInputElement>('input[name="base"]:checked');
  if (selectedBaseInput) {
    applyBase(selectedBaseInput);
  }
  // TODO: implement this function
}

setupBaseListeners();
