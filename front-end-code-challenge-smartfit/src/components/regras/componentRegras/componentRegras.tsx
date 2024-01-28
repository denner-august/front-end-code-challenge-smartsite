"use client";
import Image, { StaticImageData } from "next/image";

interface ComponentRegrasProsp {
  titulo: string;
  imagem1: StaticImageData;
  imagem2: StaticImageData;
  alt: string;
  recomendado1: string;
  recomendado2: string;
}

export function ComponentRegras({
  titulo,
  imagem1,
  imagem2,
  alt,
  recomendado1,
  recomendado2,
}: ComponentRegrasProsp) {
  return (
    <div>
      <p>{titulo}</p>
      <ul>
        <li>
          <Image src={imagem1} alt={alt} height={65} width={65} />
          <span>{recomendado1}</span>
        </li>
        <li>
          <Image src={imagem2} alt={alt} height={65} width={65} />
          <span>{recomendado2}</span>
        </li>
      </ul>
    </div>
  );
}
