import React from "react";
import Image from "next/image";
export default function Header() {
  return (
    <header className="flex w-full items-center justify-between py-5">
      <div className="text-2xl font-bold text-black">C</div>
      <nav className="md:flex hidden gap-4">
        <div className="text-xl font-bold text-black cursor-pointer">Home</div>
        <div className="text-xl font-regular cursor-pointer">Trabalhos</div>
        <div className="text-xl font-regular cursor-pointer">Sobre</div>
        <div className="text-xl font-regular cursor-pointer">Contato</div>
      </nav>
      <nav className="md:hidden flex w-7 h-7">
        <Image
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAtUlEQVR4nO3aMQoEQRACQP//6b54YcM9NKgCcxk7nAQAAAAAAPiDkyy9Qb2AxCA3fAj1AhKD3PAh1AtIDHLDh1AvIDHIDR9CvYDkOQgAAAAAAAAA8M4ng0y9Qb2AxCA3fAj1AhKD3PAh1AtIDHLDh1AvIDHIDR9CvYDkOQgAAAAAAAAA8M4ng0y9Qb2AxCA3fAj1AhKD3PAh1AtIDHLDh1AvIDHIDR9CvYDkOQgAAAAAAJAv/QDM2azukFX6EgAAAABJRU5ErkJggg=="
          alt="MenuIcon"
          width={100}
          height={100}
        />
      </nav>
    </header>
  );
}
